import React, { Fragment } from 'react';
import { Icon } from 'react-icons-kit';
import { mediaRecordOutline } from 'react-icons-kit/typicons/mediaRecordOutline';
import { plus } from 'react-icons-kit/typicons/plus';
import { starOutline } from 'react-icons-kit/typicons/starOutline';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import NextImage from 'common/components/NextImage';
import Container from 'common/components/UI/Container';
import FeatureBlock from 'common/components/FeatureBlock';
import { SectionHeader } from '../appClassic.style';
import SectionWrapper, { FeatureWrapper } from './keyFeatures.style';

import { keyFeatures } from 'common/data/AppClassic';
import { Fade } from 'react-awesome-reveal';

const KeyFeatures = () => {
  const { slogan, title, features } = keyFeatures;

  return (
    <SectionWrapper id="keyFeatures">
      <Container>
        <SectionHeader>
          <Fade direction='up' triggerOnce>
            <Heading as="h5" content={slogan} />
            <Heading content={title} />
          </Fade>
        </SectionHeader>
        <FeatureWrapper>
          {features.map((item) => (
            <Fade direction='up' triggerOnce delay={100 * item.id} key={`key-feature--key${item.id}`}>
              <FeatureBlock
                style={{ '--color': `${item.color}` }}
                icon={
                  <Fragment>
                    <Icon className="plus" icon={plus} />
                    <Icon className="circle" icon={mediaRecordOutline} />
                    <NextImage src={item.icon} alt={item.title} />
                    <Icon className="star" icon={starOutline} />
                  </Fragment>
                }
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
