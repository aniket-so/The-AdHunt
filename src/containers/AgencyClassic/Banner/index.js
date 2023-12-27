import React, { useState } from 'react';
import { Fade } from "react-awesome-reveal";
import Text from 'common/components/Text';
import NextImage from 'common/components/NextImage';
import Button from 'common/components/Button';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import BannerWrapper, {
  BannerContent,
  BannerImage,
  ButtonGroup,
} from './banner.style';

import bannerImg from 'common/assets/image/agencyClassic/banner/heroImage.png';
import playIcon from 'common/assets/image/agencyClassic/banner/play.png';
import VideoDialog from 'common/components/Dialog/videoDialog';

const Banner = () => {
  return (
    <BannerWrapper id="banner_section">
      <Container>
        <BannerContent>
          <Fade direction='up' delay={100} triggerOnce>
            <Heading
              as="h1"
              content="We built to make your life easier & smarter"
            />
          </Fade>
          <Fade direction='up' delay={200} triggerOnce>
            <Text
              content="We are one-man design studio founded by Dash & Andri. We specialise in web design and development using Webflow & other CMS."
            />
          </Fade>
          <Fade direction='up' delay={300} triggerOnce>
            <ButtonGroup>
              <Button className="primary primary_hover" title="Read our Story" />
              <VideoDialog
                label={
                  <div className="playBtn">
                    <NextImage src={playIcon} alt="play" />
                    <Button
                      className="text"
                      variant="textButton"
                      title="Our Interviews"
                    />
                  </div>
                }
                content={
                  <div style={{ margin: 'auto' }}>
                    <iframe width="850" height="505" src="https://www.youtube.com/embed/hW98BFnVCm8" title="Cartsy - Super Fast WooCommerce Theme" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  </div>
                }
              />
            </ButtonGroup>
          </Fade>
        </BannerContent>
        <BannerImage className="heroImg">
          <Fade up delay={100}>
            <NextImage src={bannerImg} alt="Banner" width={650} />
          </Fade>
        </BannerImage>
      </Container>
    </BannerWrapper>
  );
};

export default Banner;
