import React, { useState } from 'react';
import { Icon } from 'react-icons-kit';
import { playCircle } from 'react-icons-kit/fa/playCircle';
import Text from 'common/components/Text';
import NextImage from 'common/components/NextImage';
import Button from 'common/components/Button';
import Heading from 'common/components/Heading';
import Rating from 'common/components/Rating';
import Container from 'common/components/UI/Container';
import BannerWrapper, {
  BannerContent,
  RatingInfo,
  BannerImage,
  ButtonGroup,
} from './banner.style';

import microsoft from 'common/assets/image/appClassic/microsoft.svg';
import bannerImg from 'common/assets/image/appClassic/bannerImg.png';
import { Fade } from 'react-awesome-reveal';
import VideoDialog from 'common/components/Dialog/videoDialog';

const Banner = () => {
  const [openModal, setModal] = useState(false);
  
  return (
    <BannerWrapper id="home">
      <Container>
        <BannerContent>
          <Fade direction='up' triggerOnce>
            <RatingInfo>
              <Rating rating={4} />
              4.9 of 5 By <img src={microsoft?.src} alt="Microsoft" />
            </RatingInfo>
          </Fade>
          <Fade direction='up' triggerOnce delay={100}>
            <Heading
              as="h1"
              content="The Revolution of
          Ultimate Platform to 
          monitor your task"
            />
          </Fade>
          <Fade direction='up' triggerOnce delay={200}>
            <Text
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore magna
          ipsum dolor sit amet consectetur."
            />
          </Fade>
          <Fade direction='up' triggerOnce delay={300}>
            <ButtonGroup>
              <Button className="primary" title="Start Free trail" />
              <VideoDialog
                label={
                  <Button
                    className="text"
                    variant="textButton"
                    icon={<Icon icon={playCircle} />}
                    iconPosition="left"
                    title="Watch Video"
                  />
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
        <BannerImage>
          <Fade direction='up' triggerOnce delay={100}>
            <NextImage src={bannerImg} alt="Banner" />
          </Fade>
        </BannerImage>
      </Container>
    </BannerWrapper>
  );
};

export default Banner;
