import React, { Fragment, useState, useEffect } from 'react';
import Link from 'next/link';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import NextImage from 'common/components/NextImage';
import Container from 'common/components/UI/Container';
import GlideCarousel from 'common/components/GlideCarousel';
import GlideSlide from 'common/components/GlideCarousel/glideSlide';
import { SectionHeader, CircleLoader } from '../interior.style';
import SectionWrapper, {
  TeamCard,
  ImageWrapper,
  TextWrapper,
  CarouselWrapper,
} from './team.style';

import { teamData } from 'common/data/Interior';
import { Fade } from 'react-awesome-reveal';

const Team = () => {
  const { title, slogan, members } = teamData;
  const [loading, setLoading] = useState(false);

  const glideOptions = {
    type: 'carousel',
    perView: 3,
    gap: 50,
    breakpoints: {
      1200: {
        perView: 3,
        gap: 30,
      },
      767: {
        perView: 2,
        gap: 30,
      },
      480: {
        perView: 1,
      },
    },
  };

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <SectionWrapper id="team">
      <Container width="1360px">
        <Fade direction='down' triggerOnce>
          <SectionHeader>
            <Heading as="h5" content={title} />
            <Heading content={slogan} />
          </SectionHeader>
        </Fade>
        <Fade direction='down' triggerOnce delay={30}>
          <CarouselWrapper>
            {loading ? (
              <GlideCarousel
                carouselSelector="team_carousel"
                options={glideOptions}
                nextButton={<span className="next_arrow" />}
                prevButton={<span className="prev_arrow" />}
              >
                <Fragment>
                  {members.map((member) => (
                    <GlideSlide key={`project_key${member.id}`}>
                      <TeamCard className="team_card">
                        <ImageWrapper className="image_wrapper">
                          <NextImage src={member.avatar} alt={member.name} />
                        </ImageWrapper>
                        <TextWrapper className="text_wrapper">
                          <div className="name_plate">
                            <Heading as="h3" content={member.name} />
                            <Text content={member.designation} />
                          </div>
                          <ul className="social_links">
                            {member.social_links.map((item) => (
                              <li key={`social_link__key${item.id}`}>
                                <Link href={item.url}>
                                  {item.icon}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </TextWrapper>
                      </TeamCard>
                    </GlideSlide>
                  ))}
                </Fragment>
              </GlideCarousel>
            ) : (
              <CircleLoader className="alt">
                <div className="circle"></div>
                <div className="circle"></div>
              </CircleLoader>
            )}
          </CarouselWrapper>
        </Fade>
      </Container>
    </SectionWrapper>
  );
};

export default Team;
