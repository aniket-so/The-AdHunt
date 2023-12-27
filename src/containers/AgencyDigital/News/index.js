import React from 'react';
import { MasonryGrid } from "@egjs/react-grid"
import { Icon } from 'react-icons-kit';
import { chevronRight } from 'react-icons-kit/feather/chevronRight';

import Container from 'common/components/UI/ContainerTwo';
import NextImage from 'common/components/NextImage';
import Link from 'common/components/Link';
import SectionHeading from '../SectionHeading';
import Section, { ContentWrapper, BlogPost } from './news.style';

import { data } from 'common/data/AgencyDigital';

const News = () => {
  return (
    <Section id="blog">
      <Container>
        <SectionHeading
          slogan="Ideal solutions for you"
          title="Go beyond ultimate features"
        />
        <ContentWrapper>
          <MasonryGrid
            className="container"            
            defaultDirection={"end"}
            align={"justify"}
          >
            {data.newsFeed.map((news, i) => {
              return (
                <BlogPost className={"item"} key={news.id}>
                  <figure>
                    <NextImage src={news.image} alt={news.title} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                  </figure>
                  <h4>{news.title}</h4>
                  {news.desc && <p>{news.desc}</p>}
                  {news.link && (
                    <Link href={news.link} className="learnMore">
                      Learn More <Icon icon={chevronRight} />
                    </Link>
                  )}
                </BlogPost>
              );
            })}
          </MasonryGrid>
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default News;
