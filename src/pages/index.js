import React, { Fragment } from 'react';
import Head from 'next/head';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { agencyTheme } from 'common/theme/agency';
import ResetCSS from 'common/assets/css/style';
import { GlobalStyle, AgencyWrapper } from 'containers/Agency/agency.style';
import Food from "./fooddelivery"

const Main = () => {
	return (
		<ThemeProvider theme={agencyTheme}>
			<Fragment>
				{/* Start agency head section */}
				<Head>
					<title>Agency | A react next landing page</title>
					<meta name="theme-color" content="#10ac84" />
					<meta name="Description" content="React next landing page" />
					{/* Load google fonts */}
					<link
						href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
						rel="stylesheet"
					/>
				</Head>
				<ResetCSS />
				<GlobalStyle />
				<Food/>
			</Fragment>
		</ThemeProvider>
	);
};
export default Main;
