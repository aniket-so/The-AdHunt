import React from 'react';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import NextImage from 'common/components/NextImage';
import Container from 'common/components/UI/Container';
import FeatureBlock from 'common/components/FeatureBlock';
import { SectionHeader } from '../app-minimal.style';
import SectionWrapper, { FeatureWrapper } from './key-features.style';

import { keyFeatures } from 'common/data/AppMinimal';
import { Fade } from 'react-awesome-reveal';

const KeyFeatures = () => {
  const { title, description, features } = keyFeatures;

  return (
    <SectionWrapper id="feature_section">
      <Container>
        <SectionHeader>
          <Heading content={title} />
          <Text content={description} />
        </SectionHeader>
        <FeatureWrapper>
          {features.map((item) => (
            <Fade direction='up' triggerOnce delay={100 * item.id} key={`key-feature--key${item.id}`}>
              <FeatureBlock
                key={`key-feature--key${item.id}`}
                icon={<NextImage src={item.icon} alt={item.title} />}
                title={<Heading as="h3" content={item.title} />}
                description={<Text content={item.description} />}
              />
            </Fade>
          ))}
        </FeatureWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default KeyFeatures;
