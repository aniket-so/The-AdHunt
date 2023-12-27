import React from 'react';
import Link from 'next/link';
import Box from 'common/components/Box';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Button from 'common/components/Button';
import NextImage from 'common/components/NextImage';
import Container from 'common/components/UI/Container';

import { BannerWrapper } from './bannerSection.style';

import { BANNER_DATA } from 'common/data/SassMinimal';
import { Fade } from 'react-awesome-reveal';

const BannerSection = () => {
  return (
    <BannerWrapper id="banner_section">
      {BANNER_DATA.map((banner, index) => (
        <Container key={`banner-${index}`}>
          <Heading content={banner.title} as="h3" />
          <Text content={banner.text} />
          <Link href={banner.btnLink}>
            <Button title={banner.btnLabel} />
          </Link>
          <Text as="span" content={banner.offerText} />
          <Fade direction='down' triggerOnce>
            <Box className="imageWrapper">
              <NextImage src={banner.image} alt="Banner Image" />
            </Box>
          </Fade>
        </Container>
      ))}
      ;
    </BannerWrapper>
  );
};

export default BannerSection;
