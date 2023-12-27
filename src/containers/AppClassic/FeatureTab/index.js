import React, { Fragment } from 'react';
import { Icon } from 'react-icons-kit';
import { mediaRecordOutline } from 'react-icons-kit/typicons/mediaRecordOutline';
import { plus } from 'react-icons-kit/typicons/plus';
import { starOutline } from 'react-icons-kit/typicons/starOutline';
import Text from 'common/components/Text';
import NextImage from 'common/components/NextImage';
import Heading from 'common/components/Heading';
import Tab, { Panel } from 'common/components/Tabs';
import Container from 'common/components/UI/Container';
import FeatureBlock from 'common/components/FeatureBlock';
import { SectionHeader } from '../appClassic.style';
import SectionWrapper, { TabArea } from './featureTab.style';

import { featuresTab } from 'common/data/AppClassic';
import { Fade } from 'react-awesome-reveal';

const FeatureTab = () => {
  const { slogan, title, tab } = featuresTab;
  return (
    <SectionWrapper>
      <Container>
        <SectionHeader>
          <Fade direction='up' triggerOnce>
            <Heading as="h5" content={slogan} />
            <Heading content={title} />
          </Fade>
        </SectionHeader>
        <Fade direction='up' triggerOnce delay={100}>
          <TabArea>
            <Tab active={0}>
              {tab.map((item) => (
                <Panel
                  title={
                    <FeatureBlock
                      style={{ '--color': `${item.color}` }}
                      iconPosition="left"
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
                  }
                  key={`app-tab--key${item.id}`}
                >
                  <Fade triggerOnce>
                    <NextImage src={item.image} alt={item.title} />
                  </Fade>
                </Panel>
              ))}
            </Tab>
          </TabArea>
        </Fade>
      </Container>
    </SectionWrapper>
  );
};

export default FeatureTab;
