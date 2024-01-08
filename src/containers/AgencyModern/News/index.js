import React, { useState } from 'react';
import Link from 'next/link';

import Container from 'common/components/UI/Container';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import BlogPost from 'common/components/BlogPost';
import NextImage from 'common/components/NextImage';

import SectionWrapper, { SectionHeading, NewsWrapper, SearchBar } from './news.style'; // Import the new styled components

import AdsPalceholder from "common/assets/image/foodDelivery/ads-placeholder.png";

const News = ({ platform }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = platform.filter(post =>
    post.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SectionWrapper id="news">
      <Container>
        <SectionHeading>
          <Heading as="h2" content="Search Platform" />
          <Text content="Focus only on the meaning, we take care of the design. As soon as the meeting ends you can export in one click." />
        </SectionHeading>

          <input
            type="text"
            placeholder="Search Platform"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

        <NewsWrapper>
          {filteredPosts.map((post) => (
            <BlogPost
              key={post.id}
              thumbUrl={AdsPalceholder}
              title={post.name}
              excerpt={post.short_description}
              ott={post.type}
              post={post}
            />
          ))}
        </NewsWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default News;
