import React from 'react';
import Container from 'common/components/UI/Container';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import NextImage from 'common/components/NextImage';
import Box from 'common/components/Box';
import ProductDeliveryWrapper from './productDelivery.style';
import { DELIVERY_PRODUCT_DATA } from 'common/data/FoodDelivery';
import { Fade } from 'react-awesome-reveal';
const ProductDelivery = () => {
  const { sectionContent, posts } = DELIVERY_PRODUCT_DATA;
  const { title, text, image } = sectionContent;
  return (
    <ProductDeliveryWrapper>
      <Container>
        <Box className="image">
          <Fade direction='left' triggerOnce>
            <NextImage src={image} alt={title} />
          </Fade>
        </Box>
        <Box className="content">
          <Heading as="h2" content={title} />
          <Text as="p" content={text} />
          <Box className="postWrap">
            {posts.map(({ title, text }, index) => (
              <Box className="post" key={`product-delivery-post-key-${index}`}>
                <Box>
                  <Heading as="h3" content={title} />
                  <Text as="p" content={text} />
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </ProductDeliveryWrapper>
  );
};

export default ProductDelivery;
