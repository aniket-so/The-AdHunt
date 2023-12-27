import React from 'react';
import Link from 'next/link';
import Container from 'common/components/UI/Container';
import Text from 'common/components/Text';
import Image from 'common/components/Image';
import Box from 'common/components/Box';
import Logo from 'common/components/UIElements/Logo';
import FooterWrapper from './footer.style';

import LogoImage from 'common/assets/image/foodDelivery/logo-dark.png';
import facebookIcon from 'common/assets/image/foodDelivery/footer-fb.svg';
import twitterIcon from 'common/assets/image/foodDelivery/footer-twitter.svg';
import dribbleIcon from 'common/assets/image/foodDelivery/footer-dribbble.svg';

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <Box className="leftText">
          <Logo
            href="#"
            className="logo"
            logoSrc={LogoImage}
            title="FoodDelivery"
          />
          <Box className="footerText">
            <Text
              as="span"
              content={`Copyright © ${new Date().getFullYear()}`}
            />{' '}
            <Link href="#">
              RedQ, Inc.
            </Link>
          </Box>
        </Box>
        <Box className="footerMenu">
          <Link href="#">
            Support
          </Link>
          <Link href="#">
            About Us
          </Link>
          <Link href="#">
            Privacy
          </Link>
          <Link href="#">
            Contact
          </Link>
        </Box>
        <Box className="socialLinks">
          <Text as="span" content="Social:" />
          <Link href="#">
            <Image src={facebookIcon?.src} alt="facebook" />
          </Link>
          <Link href="#">
            <Image src={twitterIcon?.src} alt="twitter" />
          </Link>
          <Link href="#">
            <Image src={dribbleIcon?.src} alt="dribbble" />
          </Link>
        </Box>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
