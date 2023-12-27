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
import CopyrightSection from '../CopyrightsSection';
import LogoImage from 'common/assets/image/agency/logo.png';
import { DrawerContext } from 'common/contexts/DrawerContext';
import data from 'common/data/Agency/';
import SearchDialog from 'common/components/Dialog/searchDialog';
import LoginDialog from 'common/components/Dialog/loginDialog';

const Navbar = ({ navbarStyle, logoStyle }) => {
  const { state, dispatch } = useContext(DrawerContext);

  // Toggle drawer
  const toggleHandler = () => {
    dispatch({
      type: 'TOGGLE',
    });
  };

  return (
    <NavbarWrapper {...navbarStyle}>
      <Container>
        <Logo href="#" logoSrc={LogoImage} title="Agency" logoStyle={logoStyle} />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <SearchDialog
            label={<Button variant="textButton" icon={<i className="flaticon-magnifying-glass" />} aria-label="search" />}
            content={<SearchPanel />}
          />
          <LoginDialog
            label={<Button variant="textButton" icon={<i className="flaticon-user" />} aria-label="login" />}
            content={<LoginModal />}
          />
          <Drawer
            width="420px"
            placement="right"
            drawerHandler={<HamburgMenu />}
            open={state.isOpen}
            toggleHandler={toggleHandler}
            duration={500}
          >
            <ScrollSpyMenu menuItems={data.menuItems} drawerClose={true} offset={-100} />
            <CopyrightSection />
          </Drawer>
        </div>        
      </Container>
    </NavbarWrapper>
  );
};

// Navbar style props
Navbar.propTypes = {
  navbarStyle: PropTypes.object,
  logoStyle: PropTypes.object,
};

Navbar.defaultProps = {
  // Default navbar style
  navbarStyle: {
    minHeight: '70px',
  },
  // Default logo size
  logoStyle: {
    width: '128px',
    height: 'auto',
  },
};

export default Navbar;
