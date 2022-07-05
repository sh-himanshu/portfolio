import axios from 'axios';
import cn from 'classnames';
import { NextPage } from 'next';
import { useState } from 'react';
import { useQuery } from 'react-query';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { Hero, Layout, MyTimeline, Project } from '../components/';

interface ProjectsData {
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

const HomePage: NextPage<HomePageProps> = ({ projects: initialData, miscData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings: Settings = {
    arrows: true,
    dots: true,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 6000,
    cssEase: 'linear',
    afterChange: (newSlide: number) => setCurrentSlide(newSlide),
    // afterChange: (currentSlide: number, nextSlide: number) => {
    //   console.log(currentSlide, nextSlide);
    // },
    appendDots: (dots: number) => (
      <div className="py-4">
        <ul className="m-0">{dots}</ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div
        className={cn(
          'w-6 rounded-full text-center font-semibold leading-6 text-black decoration-teal-300',
          {
            'bg-teal-400': i === currentSlide,
            'bg-gray-400': i !== currentSlide,
          }
        )}
      >
        {i + 1}
      </div>
    ),
  };

  const { data, isLoading } = useQuery('projects', getProjects, { initialData });
  const { data: miscQueryData } = useQuery('miscData', getData, { initialData: miscData });
  return (
    <Layout>
      {isLoading || !data ? (
        <div>Loading...</div>
      ) : (
        <>
          <Hero data={miscQueryData} />
          <div className="my-10 flex select-none flex-col space-y-10 rounded-xl bg-gray-900 py-8 md:space-y-0 lg:mx-40">
            <Slider {...settings}>
              {data.data.map((project, index) => (
                <Project
                  key={`project-${index}`}
                  src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${project.attributes.Preview.data[0].attributes.formats.medium.url}`}
                  title={project.attributes.Title}
                  description={project.attributes.Description}
                  weblink={project.attributes.Weblink}
                />
              ))}
            </Slider>
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
  const projects = await getProjects();
  const miscData = await getData();

  return {
    props: { projects, miscData },
  };
};

export default HomePage;
