import React from 'react';
import Container from 'common/components/UI/Container';
import Text from 'common/components/Text';
import Button from 'common/components/Button';
import NextImage from 'common/components/NextImage';
import Section, {
  BannerContentWrapper,
  BannerContent,
  Buttons,
  Figure,
} from './banner.style';
import playIcon from 'common/assets/image/saasAppDark/icons/play.svg';
import dashboard from 'common/assets/image/saasAppDark/banner-dashboard.png';
import VideoDialog from 'common/components/Dialog/videoDialog';

const Banner = () => {

  return (
    <Section id="home">
      <Container width="1300px">
        <BannerContentWrapper>
          <BannerContent>
            <h2 className="animate__animated animate__fadeInUp">
              The leading Customer <span>dashboard</span> for your daily
              workspace
            </h2>
            <Text
              className="animate__animated animate__fadeInUp"
              content="Join 30,000+ businesses that use Segment's software and APIs to collect, clean, and control their customer data."
            />
            <Buttons>
              <Button
                colors="primary"
                title="Get Free Trial"
                className="button-one"
              />
              <VideoDialog
                label={
                  <button className="button-two">
                    <span className="play-icon">
                      <img src={playIcon?.src} alt="play Icon" />
                    </span>
                    <span className="btn-txt">
                      <span className="primary">Explore</span> Intro Video
                    </span>
                  </button>
                }
                content={
                  <div style={{ margin: 'auto' }}>
                    <iframe width="850" height="505" src="https://www.youtube.com/embed/hW98BFnVCm8" title="Cartsy - Super Fast WooCommerce Theme" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  </div>
                }
              />
            </Buttons>
          </BannerContent>
          <Figure className="hero-banner">
            <NextImage src={dashboard} alt="dashboard" />
          </Figure>
        </BannerContentWrapper>
      </Container>
    </Section>
  );
};

export default Banner;
