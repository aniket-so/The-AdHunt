import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import { FOOTER_DATA } from 'common/data/WebApp';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import FooterArea from './footer.style';

const Footer = () => {
  const { logo, menu, social } = FOOTER_DATA;
  return (
    <FooterArea>
      <Container>
        <Box className="logoBox">
          <Link href="/webapp" className="logo">
            <Image src={logo} alt="logo footer" />
          </Link>
          <Text as="p" content={`Copyright © ${new Date().getFullYear()}`} />
          <Link href="/" className="footerLink"> 
            RedQ, Inc.
          </Link>
        </Box>
        <Box className="menu">
          {menu.map(({ link, label }, index) => (
            <Link href={link} key={`footer-menu-link-${index}`} className="menuLink">
              {label}
            </Link>
          ))}
        </Box>
        <Box className="social">
          <Text as="span" content="Social:" />
          {social.map(({ icon, link }, index) => (
            <Link href={link} key={`footer-social-link-${index}`} className="socialLink">
              <Image src={icon} alt="social icon" />
            </Link>
          ))}
        </Box>
      </Container>
    </FooterArea>
  );
};

export default Footer;
