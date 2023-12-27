import React from 'react';
import Text from 'common/components/Text';
import NextImage from 'common/components/NextImage';
import Button from 'common/components/Button';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import BannerWrapper, {
  BannerContent,
  DiscountLabel,
  BannerImage,
  ButtonGroup,
} from './banner.style';

import bannerImg from 'common/assets/image/cryptoModern/banner-bg.png';
import { Fade } from 'react-awesome-reveal';

const Banner = () => {
  return (
    <BannerWrapper id="home">
      <Container>
        <BannerContent>
          <Fade direction='up' triggerOnce>
            <DiscountLabel>
              <Text className="discountAmount" content="25% Discount" />
              <Text
                className="discountText"
                content="on every first project "
              />
            </DiscountLabel>
          </Fade>
          <Fade direction='up' triggerOnce delay={100}>
            <Heading
              as="h1"
              content="Welcome next level  cryptocurrency token with faster transfer"
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
              <Button className="primary" title="GET TOKEN" />
              <Button
                className="text"
                variant="textButton"
                title="WHITE PAPER"
              />
            </ButtonGroup>
          </Fade>
        </BannerContent>
        <BannerImage>
          <Fade direction='down' delay={100}>
            <NextImage src={bannerImg} alt="Banner" />
          </Fade>
        </BannerImage>
      </Container>
    </BannerWrapper>
  );
};

export default Banner;
