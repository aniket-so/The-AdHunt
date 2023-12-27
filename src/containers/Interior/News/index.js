import React from 'react';
import Link from 'next/link';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import SectionWrapper, {
  ContentWrapper,
  NewsWrapper,
  NewsItem,
} from './news.style';

import { newsData } from 'common/data/Interior';
import { Fade } from 'react-awesome-reveal';

const News = () => {
  return (
    <SectionWrapper id="news">
      <ContentWrapper>
        <div className="row">
          <div className="col">
            <Fade triggerOnce delay={30}>N</Fade>
          </div>
          <div className="col">
            <Fade triggerOnce delay={60}>E</Fade>
          </div>
          <div className="col">
            <Fade triggerOnce delay={90}>W</Fade>
          </div>
          <div className="col">
            <Fade triggerOnce delay={90}>S</Fade>
          </div>
        </div>
        <NewsWrapper>
          {newsData.map((item) => (
            <NewsItem key={`news_key${item.id}`}>
              <Fade direction='down' triggerOnce delay={60 * item.id}>
                <Heading as="h3" content={item.title} />
                <Text content={item.excerpt} />
                <Link href={item.link_url} className="read_more__btn">
                  <span className="arrow"></span>
                  <span className="text">{item.link_text}</span>
                </Link>
              </Fade>
            </NewsItem>
          ))}
        </NewsWrapper>
      </ContentWrapper>
    </SectionWrapper>
  );
};

export default News;
