import React, { useContext, useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import NavbarWrapper from 'common/components/Navbar';
import Drawer from 'common/components/Drawer';
import Button from 'common/components/Button';
import Logo from 'common/components/UIElements/Logo';
import Box from 'common/components/Box';
import HamburgMenu from 'common/components/HamburgMenu';
import Container from 'common/components/UI/Container';
import { DrawerContext } from 'common/contexts/DrawerContext';

import { menu_items } from 'common/data/SaasAppCreative';
import ScrollSpyMenu from 'common/components/ScrollSpyMenu';
import LoginModal from '../LoginModal';

import logo from 'common/assets/image/saasAppCreative/logo.svg';
import lockIcon from 'common/assets/image/saasAppCreative/icons/lock.svg';
import LoginDialog from 'common/components/Dialog/loginDialog';

const Navbar = ({ navbarStyle, logoStyle, button, row, menuWrapper }) => {
  const [loginModal, setLoginModal] = useState(false);
  const { state, dispatch } = useContext(DrawerContext);

  // Toggle drawer
  const toggleHandler = () => {
    dispatch({
      type: 'TOGGLE',
    });
  };

  return (
    <NavbarWrapper {...navbarStyle}>
      <Container width="1360px">
        <Box {...row}>
          <Logo
            href="#"
            logoSrc={logo}
            title="SaaS Creative"
            logoStyle={logoStyle}
            className="sticky-logo"
          />
          <Box {...menuWrapper} className="mainMenuWrapper">
            <ScrollSpyMenu
              className="main_menu"
              menuItems={menu_items}
              offset={-70}
            />

            <div className="navbar-buttons">
              <LoginDialog
                label={
                  <Button
                    {...button}
                    iconPosition="left"
                    icon={<img src={lockIcon?.src} alt="lock icon" />}
                    title="Login"
                    className="navbar_button navbar_button_one"
                  />
                }
                content={<LoginModal />}
              />
              <Link href="#" className="navbar_button navbar_button_two">
                <Button {...button} title="Join Free" />
              </Link>
            </div>
            <Drawer
              width="420px"
              placement="right"
              drawerHandler={<HamburgMenu barColor="#108AFF" />}
              open={state.isOpen}
              toggleHandler={toggleHandler}
            >
              <ScrollSpyMenu
                className="mobile_menu"
                menuItems={menu_items}
                drawerClose={true}
                offset={-100}
              />
            </Drawer>
          </Box>
        </Box>
      </Container>
    </NavbarWrapper>
  );
};

Navbar.propTypes = {
  navbarStyle: PropTypes.object,
  logoStyle: PropTypes.object,
  button: PropTypes.object,
  row: PropTypes.object,
  menuWrapper: PropTypes.object,
};

Navbar.defaultProps = {
  navbarStyle: {
    className: 'sass_app_creative_navbar',
    minHeight: '70px',
    display: 'block',
  },
  row: {
    flexBox: true,
    alignItems: 'center',
    width: '100%',
  },
  logoContainer: {},
  logoStyle: {
    maxWidth: ['126px', '126px'],
  },
  button: {},
  menuWrapper: {
    flexBox: true,
    alignItems: 'center',
  },
};

export default Navbar;
