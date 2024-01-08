import React from 'react';
import Link from 'next/link';
import { Icon } from 'react-icons-kit';
import { arrowRight } from 'react-icons-kit/feather/arrowRight';
import Container from 'common/components/UI/Container';
import Heading from 'common/components/Heading';
import NextImage from 'common/components/NextImage';
import Box from 'common/components/Box';
import AvailableRestaurantsWrapper from './availableRestaurants.style';
import { AVAILABLE_RESTAURANTS_DATA } from 'common/data/FoodDelivery';
import AdsImage from 'common/assets/image/foodDelivery/ads-placeholder.png'


const AvailableRestaurants = ({platform}) => {
  console.log(platform)
  const { title, posts } = AVAILABLE_RESTAURANTS_DATA;
  return (
    <AvailableRestaurantsWrapper id="restaurants">
      <Container>
        <Heading as="h2" content={title} />
        <Box className="postWrap">
          {platform.map((data, index) => (
            <Box
              className="post"
              key={`available-restaurant-post-key-${index}`}
            >
              <NextImage src={AdsImage} alt={title} />
              <h3>
                <Link href={`/platform/${data.slug}`}>
                  {data.name} - {data.type}
                </Link>
              </h3>
              <p>{data.key_insights[0].monthly_unique_users}M Mothly Unique Users</p>
              {
                data.min_spends ? <p>{data.min_spends} Minimum Spends</p> : null
              }
              
              <Box className="postMeta">
                  <Link
                  href={`/platform/${data.slug}`}
                    key={`available-restaurant-category-key-${data.id}`}
                    className="categoryItem"
                  >
                    Read More
                  </Link>
              </Box>
            </Box>
          ))}
        </Box>
        <Box className="text-center">
          <Link href="/search" className="MoreButton">
            Discover More <Icon size={14} icon={arrowRight} />
          </Link>
        </Box>
      </Container>
    </AvailableRestaurantsWrapper>
  );
};

export default AvailableRestaurants;
