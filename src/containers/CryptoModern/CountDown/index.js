import React from 'react';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import Container from 'common/components/UI/Container';
import NormalClock from './timer';
const deadline = new Date(Date.parse(new Date()) + 12 * 24 * 60 * 60 * 1000);
import SectionWrapper, { ContentWrapper } from './countdown.style';
import { Fade } from 'react-awesome-reveal';

const CountDownSection = () => {
  return (
    <SectionWrapper>
      <Container>
        <ContentWrapper>
          <Heading content="Token Pre-sale starting in: " />
          <Fade direction='up' triggerOnce>
            <div className="timerCount">
              <NormalClock countdown={deadline} divider="true" />
            </div>
          </Fade>
          <Button className="primary" title="PRE-ORDER NOW" />
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default CountDownSection;
