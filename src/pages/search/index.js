import React, { Fragment, useState, useEffect } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import Sticky from 'react-stickynode';
import { foodDeliveryTheme } from 'common/theme/foodDelivery';
import ResetCSS from 'common/assets/css/style';
import { GlobalStyle, ContentWrapper } from 'containers/FoodDelivery/foodDelivery.style';

import Navbar from 'containers/FoodDelivery/Navbar';
import Footer from 'containers/FoodDelivery/Footer';
import News from 'containers/AgencyModern/News';


function generateSlug(name) {
    return name
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '')
      .replace(/-{2,}/g, '-');
  }

const FoodDelivery = () => {

    const [searchResults, setSearchResults] = useState([]);
  
    useEffect(() => {
        const handleSearch = async () => {
            try {
              const response = await fetch(
                `https://172.203.170.19:8055/items/items/?access_token=Qmm3cucjSQAOwXPilvrRb8qW_El8lET1`
              );
              const { data } = await response.json();
              const modifiedData = data.map(post => ({
                ...post,
                slug: generateSlug(post.name),
              }));
              setSearchResults(modifiedData);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };

        handleSearch();
    }, [])

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
          {/* <Banner /> */}
          <div style={{marginTop: "100px"}}>
            {searchResults ? <News platform={searchResults} /> : null}
          </div>
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default FoodDelivery;
