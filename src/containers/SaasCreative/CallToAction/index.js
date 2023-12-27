import React from 'react';
import Container from 'common/components/UI/Container';
import Link from 'common/components/Link';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Section, { Content } from './cta.style';
import SelectButton from './select-button';

const CallToAction = () => {
  return (
    <Section>
      <Container>
        <Content>
          <Heading content="Start making business with our software" />
          <Text content="Best free time tracking software. It's a simple time tracker and time sheet app that lets you and your team track work hours" />
          <SelectButton />
          <span>
            <Link href="#">2,500+ Upvote on ProductHunt</Link>
          </span>
        </Content>
      </Container>
    </Section>
  );
};

export default CallToAction;
