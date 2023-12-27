import React from 'react';
import NextImage from 'common/components/NextImage';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import JoinTrailArea, { ContentWrapper, ButtonGroup } from './joinTrial.style';

import { joinSlack } from 'common/data/AppClassic';
import { Fade } from 'react-awesome-reveal';

const JoinTrail = () => {
  const { logo, title, description } = joinSlack;

  return (
    <JoinTrailArea id="trail">
      <ContentWrapper>
        <Fade direction='up' triggerOnce>
          <div className="trial-apps">
            <NextImage src={logo} alt="Slack" />
          </div>
        </Fade>
        <Fade direction='up' triggerOnce delay={100}>
          <Heading content={title} />
        </Fade>
        <Fade direction='up' triggerOnce delay={200}>
          <Text content={description} />
        </Fade>
        <Fade direction='up' triggerOnce delay={300}>
          <ButtonGroup>
            <Button title="Join with Slack" />
            <Button title="Login with Email" variant="textButton" />
          </ButtonGroup>
        </Fade>
      </ContentWrapper>
    </JoinTrailArea>
  );
};

export default JoinTrail;
