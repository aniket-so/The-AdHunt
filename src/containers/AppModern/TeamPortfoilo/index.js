import React, { useState } from 'react';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import NextImage from 'common/components/NextImage';
import Container from 'common/components/UI/Container';
import { teamportfolio } from 'common/data/AppModern';
import SectionWrapper, { ContentWrapper } from './teamPortfolio.style';

const TeamPortfolioSection = () => {
  const { title, description, teammember } = teamportfolio;
  const [hover, setHover] = useState({
    active: 6, // active item when start
  });

  return (
    <SectionWrapper id="team">
      <Container width="1200px">
        <ContentWrapper>
          <div className="image">
            {teammember.map((item, index) => (
              <div
                className={`item_wrapper ${hover.active === index ? 'active' : ''
                  }`}
                key={index}
                onMouseEnter={() => {
                  setHover({
                    active: index,
                  });
                }}
                onMouseLeave={() => {
                  setHover({
                    active: index,
                  });
                }}
              >
                <div className="imageWrapper">
                  <NextImage src={item.img} alt={item.text} />
                </div>
                <Text className="author_name" content={item.text} />
              </div>
            ))}
          </div>
          <div className="content">
            <Heading content={title} />
            <Text content={description} />
            <Button title="Learn More" />
          </div>
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default TeamPortfolioSection;
