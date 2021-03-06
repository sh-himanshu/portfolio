import { Container, Text } from '@mantine/core';
import axios from 'axios';
import Carousel from 'framer-motion-carousel';

import { NextPage } from 'next';
import {
  BsFillCaretLeftFill as LeftArrowIcon,
  BsFillCaretRightFill as RightArrowIcon,
} from 'react-icons/bs';
import { useQuery } from 'react-query';

// import Slider, { Settings } from 'react-slick';
// import 'slick-carousel/slick/slick-theme.css';
// import 'slick-carousel/slick/slick.css';
import { Hero, Layout, MyTimeline, Project } from '../components/';

export interface ProjectsData {
  data: Datum2[];
  meta: Meta;
}

interface Meta {
  pagination: Pagination;
}

interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

interface Datum2 {
  id: number;
  attributes: Attributes2;
}

interface Attributes2 {
  Title: string;
  Description: string;
  Weblink: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  Preview: Preview;
}

interface Preview {
  data: Datum[];
}

interface Datum {
  id: number;
  attributes: Attributes;
}

interface Attributes {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: any;
  provider: string;
  provider_metadata?: any;
  createdAt: string;
  updatedAt: string;
}

interface Formats {
  large: Large;
  small: Large;
  medium: Large;
  thumbnail: Large;
}

interface Large {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: any;
  size: number;
  width: number;
  height: number;
}

export interface MiscData {
  data: {
    id: number;
    attributes: {
      resume: string;
      about: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  };
}

interface HomePageProps {
  projects?: ProjectsData;
  miscData?: MiscData;
}

interface ArrowProps {
  left: boolean;
  children: React.ReactNode;
  onClick: () => void;
}

const baseArrowStyle: React.CSSProperties = {
  position: 'absolute',
  width: '50px',
  height: '50px',
  backgroundColor: 'rgba(0,0,0,0.5)',
  top: '50%',
  transform: 'translateY(-50%)',
  borderRadius: '50%',
  color: '#fff',
  fontSize: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
};

const Arrow = ({ left = false, children, onClick }: ArrowProps) => (
  <div
    onClick={onClick}
    style={{
      ...baseArrowStyle,
      left: left ? '20px' : 'initial',
      right: !left ? '10px' : 'initial',
    }}
  >
    {children}
  </div>
);

const HomePage: NextPage<HomePageProps> = ({ projects: initialData, miscData }) => {
  const { data, isLoading } = useQuery('projects', getProjects, { initialData });
  const { data: miscQueryData } = useQuery('miscData', getData, { initialData: miscData });

  return (
    <Layout>
      {isLoading || !data ? (
        <div>Loading...</div>
      ) : (
        <>
          <Hero data={miscQueryData} />
          <div className="bg-purple-900/20">
            <Container size="lg" className="flex h-screen items-center justify-center ">
              <Text className="basis-1/3 font-greycliff text-5xl font-bold uppercase">
                Projects
              </Text>

              <div className="h-[30rem] max-w-3xl basis-2/3">
                <Carousel
                  renderArrowLeft={({ handlePrev }) => (
                    <Arrow left={true} onClick={handlePrev}>
                      <LeftArrowIcon />
                    </Arrow>
                  )}
                  renderArrowRight={({ handleNext }) => (
                    <Arrow left={false} onClick={handleNext}>
                      <RightArrowIcon />
                    </Arrow>
                  )}
                  autoPlay={false}
                  interval={1}
                  loop={true}
                >
                  {data.data.map((project, index) => (
                    <Project
                      key={index}
                      title={project.attributes.Title}
                      description={project.attributes.Description}
                      weblink={project.attributes.Weblink}
                      src={project.attributes.Preview.data[0].attributes.formats.medium.url}
                    />
                  ))}
                </Carousel>
              </div>
            </Container>
          </div>
          <MyTimeline />
        </>
      )}
    </Layout>
  );
};

export const getData = async () => {
  const { NEXT_PUBLIC_STRAPI_URL: STRAPI_URL, NEXT_PUBLIC_STRAPI_TOKEN: STRAPI_TOKEN } =
    process.env;

  try {
    const resp = await axios.get<MiscData>(`${STRAPI_URL}/api/data`, {
      headers: {
        Authorization: `Bearer ${STRAPI_TOKEN}`,
      },
    });

    if (resp.status === 200) return resp.data;
  } catch (error) {
    console.log(error);
  }
};

const getProjects = async () => {
  const { NEXT_PUBLIC_STRAPI_URL: STRAPI_URL, NEXT_PUBLIC_STRAPI_TOKEN: STRAPI_TOKEN } =
    process.env;

  try {
    const resp = await axios.get<ProjectsData>(`${STRAPI_URL}/api/projects?populate=Preview`, {
      headers: {
        Authorization: `Bearer ${STRAPI_TOKEN}`,
      },
    });

    if (resp.status === 200) return resp.data;
  } catch (error) {
    console.log(error);
  }
};

export const getServerSideProps = async () => {
  const projects = (await getProjects()) || null;
  const miscData = (await getData()) || null;

  return {
    props: { projects, miscData },
  };
};

export default HomePage;
