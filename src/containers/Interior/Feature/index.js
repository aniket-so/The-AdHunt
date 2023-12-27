import React from 'react';
import Heading from 'common/components/Heading';
import BlogPost from 'common/components/BlogPost';
import Container from 'common/components/UI/Container';
import { SectionHeader } from '../interior.style';
import SectionWrapper, { FeatureWrapper } from './feature.style';

import { featureData } from 'common/data/Interior/';
import { Fade } from 'react-awesome-reveal';

const Feature = () => {
  const { title, slogan, features } = featureData;

  return (
    <SectionWrapper id="feature">
      <Fade direction='down' triggerOnce>
        <SectionHeader>
          <Heading as="h5" content={title} />
          <Heading content={slogan} />
        </SectionHeader>
      </Fade>
      <Container width="1360px">
        <Fade direction='down' triggerOnce delay={30}>
          <FeatureWrapper>
            {features.map((item) => (
              <BlogPost
                key={`feature_key${item.id}`}
                thumbUrl={item.icon}
                title={item.title}
                excerpt={item.description}
              />
            ))}
          </FeatureWrapper>
        </Fade>
      </Container>
    </SectionWrapper>
  );
};

export default Feature;
