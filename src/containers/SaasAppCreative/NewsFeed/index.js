import React from 'react';
import { Icon } from 'react-icons-kit';
import { arrowRight } from 'react-icons-kit/feather/arrowRight';
import Container from 'common/components/UI/Container';
import Heading from 'common/components/Heading';
import NextImage from 'common/components/NextImage';
import Text from 'common/components/Text';
import Link from 'common/components/Link';

import { posts } from 'common/data/SaasAppCreative';
import { Section, SectionHeading, Grid, Article } from './newsFeed.style';
import { Fade } from 'react-awesome-reveal';

const NewsFeed = () => {
  return (
    <Section id="newsfeed">
      <Container width="1360px">
        <SectionHeading>
          <Text content="Updated Blog Post" />
          <Heading content="What our author post on Newsfeed" />
        </SectionHeading>
        <Grid>
          {posts.map((post) => (
            <Fade key={post.id} direction='up' triggerOnce delay={post.id * 100}>
              <Article>
                <NextImage src={post.image} alt={post.title} />
                <Text content={post.date} />
                <Heading as="h4" content={post.title} />
                <Link href={post.excerpt.link}>
                  {post.excerpt.label} <Icon icon={arrowRight} />
                </Link>
              </Article>
            </Fade>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default NewsFeed;
