import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import NavbarWrapper from 'common/components/Navbar';
import Drawer from 'common/components/Drawer';
import Button from 'common/components/Button';
import Logo from 'common/components/UIElements/Logo';
import HamburgMenu from 'common/components/HamburgMenu';
import ScrollSpyMenu from 'common/components/ScrollSpyMenu';
import { Container } from './navbar.style';
import SearchPanel from '../SearchPanel';
import LoginModal from '../LoginModal';
import LogoImage from 'common/assets/image/app/logo.png';
import { DrawerContext } from 'common/contexts/DrawerContext';
import data from 'common/data/App/MenuItems';
import SearchDialog from 'common/components/Dialog/searchDialog';
import LoginDialog from 'common/components/Dialog/loginDialog';

const Navbar = ({ navbarStyle, logoStyle, buttonStyle }) => {
  const { state, dispatch } = useContext(DrawerContext);

  // Toggle drawer
  const toggleHandler = () => {
    dispatch({
      type: 'TOGGLE',
    });
  };

  return (
    <NavbarWrapper {...navbarStyle}>
      <>
        <Container>
          <Logo
            href="#"
            logoSrc={LogoImage}
            title="Agency"
            logoStyle={logoStyle}
          />
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <SearchDialog
              label={
                <Button variant="textButton" icon={<i className="flaticon-magnifying-glass" />} aria-label="search" />
              }
              content={<SearchPanel />}
            />
            <LoginDialog
              label={
                <Button variant="textButton" icon={<i className="flaticon-user" />} aria-label="login" />
              }
              content={<LoginModal />}
            />
            <Drawer
              width="420px"
              placement="right"
              drawerHandler={<HamburgMenu />}
              open={state.isOpen}
              toggleHandler={toggleHandler}
            >
              <ScrollSpyMenu
                menuItems={data.menuItems}
                drawerClose={true}
                offset={-100}
              />
            </Drawer>
          </div>
        </Container>
      </>
    </NavbarWrapper>
  );
};

// Navbar style props
Navbar.propTypes = {
  navbarStyle: PropTypes.object,
  logoStyle: PropTypes.object,
  buttonStyle: PropTypes.object,
  wrapperStyle2: PropTypes.object,
};

Navbar.defaultProps = {
  navbarStyle: {
    minHeight: '70px',
  },
  logoStyle: {
    width: ['100px', '140px'],
  },
  buttonStyle: {
    minHeight: '70px',
    color: '#fff',
  },
};

export default Navbar;
