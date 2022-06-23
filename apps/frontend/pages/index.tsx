import axios from 'axios';
import cn from 'classnames';
import { NextPage } from 'next';
import { useState } from 'react';
import { useQuery } from 'react-query';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { Hero, Layout, MyTimeline, Project } from '../components/';
import LaptopScreen from '../public/image.png';

const HomePage: NextPage = () => {
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

  const { isLoading, error, data } = useQuery('projectData', () =>
    axios.get('http://localhost:1337/api/projects/1').then((res) => res.data)
  );

  return (
    <Layout>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <Hero />
          <div className="my-10 flex select-none flex-col space-y-10 rounded-xl bg-gray-900 py-8 md:space-y-0 lg:mx-40">
            <Slider {...settings}>
              <Project src={LaptopScreen.src} />
              <Project src={LaptopScreen.src} />
              <Project src={LaptopScreen.src} />
              <Project src={LaptopScreen.src} />
            </Slider>
          </div>
          <MyTimeline />
        </>
      )}
    </Layout>
  );
};

export default HomePage;
