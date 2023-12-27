import patternBg from 'common/assets/image/webAppMinimal/pricing-pattern-bg.png';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import { pricing } from 'common/data/WebAppMinimal';
import React, { useState } from 'react';
import PriceCard from './price-card';
import {
  Grid, Section,
  SectionHeading,
  SwitcherWrapper
} from './pricing.style';
import { Fade } from 'react-awesome-reveal';

const Pricing = (props) => {
  const [isMonthly, setIsMonthly] = useState(true);

  const handleToggle = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <div {...props}>
      <Section
        bgImage={patternBg?.src}
        bgImageAlt="pattern"
        strength={200}
      >
        <Container width="1400px">
          <SectionHeading>
            <Heading content="Explore our exciting pricing" />
          </SectionHeading>
          <SwitcherWrapper>
            <button className={isMonthly ? 'active' : undefined}>Monthly</button>
            <span className="switcher" onClick={handleToggle} role="button">
              <span
                className={`switcher-button ${isMonthly ? 'left' : 'right'}`}
              />
            </span>
            <button className={!isMonthly ? 'active' : undefined}>Yearly</button>
          </SwitcherWrapper>
          <Grid>
            {pricing?.map((priceTable, index) => (
              <Fade
                key={index}
                delay={priceTable?.id * 100}
                direction='up'
                duration={600}
              >
                <PriceCard isMonthly={isMonthly} priceTable={priceTable} />
              </Fade>
            ))}
          </Grid>
        </Container>
      </Section>
    </div>
  );
};

export default Pricing;
