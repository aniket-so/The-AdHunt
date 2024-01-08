import React, { Fragment } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import Sticky from 'react-stickynode';
import { foodDeliveryTheme } from 'common/theme/foodDelivery';
import ResetCSS from 'common/assets/css/style';
import { GlobalStyle, ContentWrapper } from 'containers/FoodDelivery/foodDelivery.style';

import Navbar from 'containers/FoodDelivery/Navbar';
import Banner from 'containers/FoodDelivery/Banner';
import Faq from 'containers/AppCreative/Faq';
import Footer from 'containers/FoodDelivery/Footer';
import News from 'containers/AgencyModern/News';
import Subscribe from 'containers/AgencyModern/Subscribe';

const FoodDelivery = () => {
  return (
    <ThemeProvider theme={foodDeliveryTheme}>
      <Fragment>
        <Head>
          <title>FoodDelivery | A react next landing page</title>
          <meta name="Description" content="React next landing page" />
          <meta name="theme-color" content="#fff2d9" />
          {/* Load google fonts */}
          <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;600&display=swap" rel="stylesheet" />
        </Head>
        <ResetCSS />
        <GlobalStyle />
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <div style={{marginTop: "100px"}}>
          <Subscribe/>
          </div>
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default FoodDelivery;
