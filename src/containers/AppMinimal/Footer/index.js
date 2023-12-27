import React from 'react';
import Link from 'next/link';
import NextImage from 'common/components/NextImage';
import Logo from 'common/components/UIElements/Logo';
import Container from 'common/components/UI/Container';
import FooterArea, {
  Left,
  Menu,
  CopyText,
  Social,
  SocialText,
} from './footer.style';
import { FooterData } from 'common/data/AppMinimal';

const Footer = () => {
  const { menu, logo, social } = FooterData;
  const date = new Date();
  const year = date.getFullYear();

  return (
    <FooterArea>
      <Container className="Container">
        <Left>
          <Logo
            className="logo"
            href="/appminimal"
            logoSrc={logo}
            title="App Classic"
          />
          <CopyText>
            Copyright © {year}
            <Link href="/">
              RedQ, Inc.
            </Link>
          </CopyText>
        </Left>
        <Menu>
          {menu.map(({ link, label }, index) => (
            <Link href={link} key={`footer-link-key-${index}`}>
              {label}
            </Link>
          ))}
        </Menu>
        <Social>
          <SocialText>Social:</SocialText>
          {social.map(({ link, icon }, index) => (
            <Link href={link} key={`footer-social-key-${index}`}>
              <NextImage src={icon} alt="social image" />
            </Link>
          ))}
        </Social>
      </Container>
    </FooterArea>
  );
};

export default Footer;
