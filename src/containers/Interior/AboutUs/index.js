import React from 'react';
import Link from 'next/link';
import NextImage from 'common/components/NextImage';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import SectionWrapper, {
  Container,
  ImageWrapper,
  TextWrapper,
} from './aboutUs.style';

import { aboutData } from 'common/data/Interior';
import { Fade } from 'react-awesome-reveal';

const AboutUs = () => {
  const { thumb_url, title, text, text2 } = aboutData;
  const setTitle = (title) => {
    return { __html: title };
  };

  return (
    <SectionWrapper id="aboutUs">
      <Container>
        <ImageWrapper>
          <Fade direction='left' triggerOnce>
            <NextImage src={thumb_url} alt="Interior Landing by RedQ" />
          </Fade>
        </ImageWrapper>
        <TextWrapper>
          <Fade direction='right' triggerOnce>
            <Heading dangerouslySetInnerHTML={setTitle(title)} />
            <Text content={text} />
            <Text content={text2} />
            <Link href="#1" className="learn__more-btn">
              <span className="btn_text">VISITE SITE</span>
              <span className="next_arrow"></span>
            </Link>
          </Fade>
        </TextWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default AboutUs;
