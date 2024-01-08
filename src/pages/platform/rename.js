import React, { Fragment } from 'react';
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

const Interior = () => {
  const router = useRouter();
  const { name } = router.query;
  const formattedName = generateSlug(name || '');
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

        {/* Start writing your markup from here. */}
        <InteriorWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <ContentWrapper>
            <Counter />
            <Banner />
          </ContentWrapper>
        </InteriorWrapper>
        {/* End of markup section. */}
      </Fragment>
    </ThemeProvider>
  );
};

export default Interior;
