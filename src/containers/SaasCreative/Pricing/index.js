import React from 'react';
import { Icon } from 'react-icons-kit';
import { check } from 'react-icons-kit/feather/check';
import Container from 'common/components/UI/Container';
import Heading from 'common/components/Heading';
import Section, { SectionHeading, Grid, PriceTable } from './pricing.style';

import { pricing } from 'common/data/SaasCreative';
import { Fade } from 'react-awesome-reveal';

const Pricing = () => {
  return (
    <Section id="pricing">
      <Container width="1400px">
        <SectionHeading>
          <Heading content="Simple pricing. No hidden fees." />
        </SectionHeading>
        <Grid>
          {pricing.map((price) => (
            <Fade key={price.id} direction='up' triggerOnce delay={100 * price.id}>
              <PriceTable>
                <header>
                  <Heading as="h3" content={price.title} />
                  {price.isPro && <span className="pro-badge">PRO</span>}
                </header>
                <ul>
                  {price.features.map((feature, i) => (
                    <li key={i}>
                      <Icon icon={check} size={22} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </PriceTable>
            </Fade>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Pricing;
