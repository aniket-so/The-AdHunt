import React from 'react';
import Link from 'next/link';
import Container from 'common/components/UI/Container';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import NextImage from 'common/components/NextImage';
import Box from 'common/components/Box';
import mapPin from 'common/assets/image/foodDelivery/banner-map-pin.svg';
import BannerWrapper from './banner.style';
import { BANNER_DATA } from 'common/data/FoodDelivery';
import { Fade } from 'react-awesome-reveal';
import SearchComponent from '../SearchComponent/SearchComponent';

const Banner = () => {
  const { sectionImage, title, text, tagLine, buttons } = BANNER_DATA;
  return (
    <BannerWrapper id="banner_section">
      <Container>
        <Box className="content">
          <Heading as="h2" content={title} />
          <Text as="p" className="paragraph" content={text} />
          <form action="#" className="bannerForm">
            <label htmlFor="location" className="sr-only">
              Your Address
            </label>
            <img className="mapPin" src={mapPin?.src} alt={title} />
            {/* <input type="text" placeholder="Search Channel, Media.." /> */}
            <SearchComponent/>
          </form>
          <Text as="p" className="tagLine" content={tagLine} />
        </Box>
        <Fade direction='right' triggerOnce>
          <Box className="image">
            <NextImage src={sectionImage} alt={title} />
          </Box>
        </Fade>
      </Container>
    </BannerWrapper>
  );
};

export default Banner;
