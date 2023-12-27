import React from 'react';
import { Icon } from 'react-icons-kit';
import { chevronRight } from 'react-icons-kit/feather/chevronRight';
import Container from 'common/components/UI/ContainerTwo';
import Link from 'common/components/Link';
import BlogPost from 'common/components/BlogPost';
import SectionHeading from '../SectionHeading';
import Section, { ServiceWrapper } from './service.style';

import { data } from 'common/data/AgencyDigital';
import { Fade, Zoom } from 'react-awesome-reveal';

const Service = () => {
  return (
    <Section id="service">
      <Container>
        <Zoom cascade direction='up' triggerOnce>
          <SectionHeading
            slogan="Ideal solutions for you"
            title="Go beyond ultimate features"
          />
        </Zoom>
        <ServiceWrapper>
          {data.services.map((service) => (
            <Fade key={service.id} direction='up' delay={100 * service.id} triggerOnce>
              <BlogPost
                className="serviceItem"
                thumbUrl={service.icon}
                title={service.title}
                excerpt={service.desc}
                link={
                  <Link href={service.link}>
                    Learn More <Icon icon={chevronRight} />
                  </Link>
                }
              />
            </Fade>
          ))}
        </ServiceWrapper>
      </Container>
    </Section>
  );
};

export default Service;
