import React from 'react';
import Container from 'common/components/UI/Container';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Image from 'common/components/Image';
import Box from 'common/components/Box';
import QualityFeaturesWrapper from './qualityFeatures.style';
import { QUALITY_FEATURES_DATA } from 'common/data/FoodDelivery';
import { Fade } from 'react-awesome-reveal';
const QualityFeatures = () => {
  const { title, posts } = QUALITY_FEATURES_DATA;
  return (
    <QualityFeaturesWrapper id="features">
      <Container>
        <Heading as="h2" content={title} />
        <Box className="postWrap">
          {posts.map(({ icon, title, text }, index) => (
            <Box className="post" key={`quality-features-key-${index}`}>
              <Fade direction='down' triggerOnce cascade>
                <Image src={icon?.src} alt={title} />
                <Heading as="h3" content={title} />
                <Text as="p" content={text} />
              </Fade>
            </Box>
          ))}
        </Box>
      </Container>
    </QualityFeaturesWrapper>
  );
};

export default QualityFeatures;
