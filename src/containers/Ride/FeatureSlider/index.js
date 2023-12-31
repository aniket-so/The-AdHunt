import React from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import FeatureSliderWrapper from './featureSlider.style';
import Image1 from 'common/assets/image/ride/mask-1.png';
import Image2 from 'common/assets/image/ride/mask-2.png';
import Image3 from 'common/assets/image/ride/mask-3.png';
import Image4 from 'common/assets/image/ride/mask-1.png';
import Image5 from 'common/assets/image/ride/mask-3.png';
import { Fade } from 'react-awesome-reveal';

const images = [
  {
    original: `${Image1?.src}`,
    originalAlt: 'slide one',
  },
  {
    original: `${Image2?.src}`,
    originalAlt: 'slide two',
  },
  {
    original: `${Image3?.src}`,
    originalAlt: 'slide three',
  },
  {
    original: `${Image2?.src}`,
    originalAlt: 'slide four',
  },
  {
    original: `${Image4?.src}`,
    originalAlt: 'slide five',
  },
  {
    original: `${Image5?.src}`,
    originalAlt: 'slide six',
  },
];

const FeatureSlider = ({ secTitleWrapper, secTitle, secDescription }) => {
  return (
    <FeatureSliderWrapper id="keyfeature">
      <div className="FeatureSliderInner">
        <span> </span>
        <span> </span>
        <span> </span>
      </div>
      <Container noGutter mobileGutter width="100%" className="container">
        <Box {...secTitleWrapper}>
          <Fade direction='up' triggerOnce>
            <Heading {...secTitle} content="How does Godrive Work" />
          </Fade>
          <Fade direction='up' triggerOnce>
            <Text
              {...secDescription}
              content="Just choose the destination with some simple touches!"
            />
          </Fade>
        </Box>
        <Box className="FeatureSlider">
          <ImageGallery
            items={images}
            className="Slider-img"
            showPlayButton={false}
            showFullscreenButton={false}
            showNav={false}
            showBullets={true}
            autoPlay={true}
          />
        </Box>
      </Container>
    </FeatureSliderWrapper>
  );
};

// FeatureSlider style props
FeatureSlider.propTypes = {
  secTitleWrapper: PropTypes.object,
  secTitle: PropTypes.object,
  secDescription: PropTypes.object,
};

// FeatureSlider default style
FeatureSlider.defaultProps = {
  secTitleWrapper: {
    mb: ['65px', '65px', '70px', '70px', '70px'],
  },
  secTitle: {
    fontSize: ['22px', '26px', '26px', '30px', '36px'],
    fontWeight: '600',
    color: '#15172C',
    lineHeight: '1.34',
    mb: ['15px', '18px', '18px', '20px', '30px'],
    textAlign: 'center',
    fontFamily: 'Poppins',
  },
  secDescription: {
    fontSize: ['15px', '16px'],
    fontWeight: '400',
    color: '#15172C',
    lineHeight: '1.5',
    mb: '0',
    textAlign: 'center',
    width: '300px',
    maxWidth: '100%',
    ml: 'auto',
    mr: 'auto',
    fontFamily: 'Lato',
  },
};

export default FeatureSlider;
