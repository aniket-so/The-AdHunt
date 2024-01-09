import React, { Fragment, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { interiorTheme } from 'common/theme/interior';
import { DrawerProvider } from 'common/contexts/DrawerContext';
// import Navbar from 'containers/Interior/Navbar';
import Banner from 'containers/Interior/Banner';
import ResetCSS from 'common/assets/css/style';
import { GlobalStyle, InteriorWrapper, ContentWrapper } from 'containers/Interior/interior.style';
import Counter from 'containers/WebApp/Counter';
import Navbar from 'containers/FoodDelivery/Navbar';

function generateSlug(name) {
  return name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-{2,}/g, '-');
}

const Name = ({apiData}) => {
    const router = useRouter();

    const { name, subname } = router.query;

  // State to store the matching object
  const [matchingObject, setMatchingObject] = useState(null);

  useEffect(() => {
    if (name && apiData) {

        const formattedName = decodeURIComponent(subname).replace(/-/g, '').toLowerCase();
        const foundObject = apiData.find(item => item.name.toLowerCase().replace(/[ -]/g, '') === formattedName);     
        setMatchingObject(foundObject);
    }
  }, [name, apiData]);

  return (
    <ThemeProvider theme={interiorTheme}>
      <Fragment>
        <Head>
          <title>Interior | A react next landing page</title>
          <meta name="theme-color" content="#171717" />
          <meta name="description" content="React next landing page" />
          <meta name="keywords" content="React, React js, Next, Next js, Gatsby, Gatsby Js, Fast Landing, Modren Landing" />
          <link href="https://fonts.googleapis.com/css?family=Raleway:500,600&display=swap" rel="stylesheet"></link>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
            rel="stylesheet"
          />
        </Head>
        <ResetCSS />
        <GlobalStyle />
        <InteriorWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <ContentWrapper>
            <Counter counterData={matchingObject} />
          </ContentWrapper>
        </InteriorWrapper>
      </Fragment>
    </ThemeProvider>
  );
};

export async function getServerSideProps(context) {
    const apiUrl = 'http://172.203.170.19:8055/items/ad_options/?access_token=Qmm3cucjSQAOwXPilvrRb8qW_El8lET1';
    const response = await fetch(apiUrl);
    const apiData = await response.json();
  
    return {
      props: {
        apiData: apiData.data,
      },
    };
  }

export default Name;
