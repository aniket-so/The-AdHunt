import React from 'react';
import Container from 'common/components/UI/ContainerTwo';
import NextImage from 'common/components/NextImage';
import Text from 'common/components/Text';
import { accordions } from 'common/data/HostingModern';
import iPad from 'common/assets/image/hostingModern/ipad.png';
import { Accordion } from '@mantine/core';
import FeatureWrapper, { FeatureContent, Content, Ipad } from './feature.style';
import SectionHeading from '../SectionHeading';

const Feature = () => {
  return (
    <FeatureWrapper id="features">
      <Ipad>
        <NextImage src={iPad} alt="" />
      </Ipad>
      <Container>
        <FeatureContent>
          <SectionHeading
            mb="20px"
            slogan="Website content builder"
            title="Meet our premium features that will make you wow"
            textAlign="left"
          />
          <Content>
            <Text
              className="caption"
              content="Build an incredible workplace and grow your business with Gusto’s all-in-one platform with amazing contents."
            />

            <Accordion
              variant="separated"
              defaultValue="customization"
              styles={{
                item: {
                  backgroundColor: 'rgb(246, 248, 251)',
                  borderRadius: '10px',

                  '&[data-active]': {
                    backgroundColor: 'rgb(246, 248, 251)',
                    borderColor: 'transparent',
                  },

                  '.mantine-Accordion-control': {
                    paddingLeft: '32px',
                    paddingRight: '32px',

                    '@media (max-width: 1024px)': {
                      paddingLeft: '32px',
                      paddingRight: '32px',
                    },

                    '@media (max-width: 480px)': {
                      paddingLeft: '25px',
                      paddingRight: '25px',
                    },
                  },

                  '.mantine-Accordion-label': {
                    paddingTop: '25px',
                    paddingBottom: '25px',
                    fontWeight: '500',

                    '@media (max-width: 1024px)': {
                      paddingTop: '35px',
                      paddingRight: '35px',
                    },

                    '@media (max-width: 480px)': {
                      paddingTop: '25px',
                      paddingBottom: '25px',
                    },
                  },

                  '.mantine-Accordion-content': {
                    color: 'rgb(52, 61, 72)',
                    fontSize: '15px',
                    fontFamily: 'DM Sans',
                    lineHeight: '32px',
                    transition: 'all 0.3s ease 0s',
                    animation: '0.4s ease 0s 1 normal none running slideDown',
                    paddingTop: '0px',
                    paddingLeft: '32px',
                    paddingRight: '32px',

                    '@media (max-width: 1024px)': {
                      paddingLeft: '32px',
                      paddingRight: '32px',
                    },

                    '@media (max-width: 480px)': {
                      paddingLeft: '25px',
                      paddingRight: '25px',
                    },
                  },

                  '.mantine-Accordion-chevron svg': {
                    width: '20px !important',
                    height: '20px !important',
                  }
                }
              }}
            >
              {
                accordions.map((item) => {
                  return (
                    <Accordion.Item value={item.title} key={item.id}>
                      <Accordion.Control>{item.title}</Accordion.Control>
                      <Accordion.Panel>{item.desc}</Accordion.Panel>
                    </Accordion.Item>
                  )
                })
              }
            </Accordion>
          </Content>
        </FeatureContent>
      </Container>
    </FeatureWrapper>
  );
};

export default Feature;
