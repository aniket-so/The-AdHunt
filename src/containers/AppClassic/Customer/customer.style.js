import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const CustomerWrapper = styled.div`
  max-width: 810px;
  padding: 37px 0;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 991px) {
    padding: 30px 0;
  }

  p {
    flex: 0 0 auto;
    margin: 0 12px 0 0;
    color: ${themeGet('colors.menu', '#0D233E')};
    @media only screen and (max-width: 991px) {
      display: none;
    }
  }
`;

export const ImageWrapper = styled.div`
  gap: 12px;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(4, auto);
  @media only screen and (max-width: 991px) {
    margin: 0 auto;
    gap: 15px;
  }
  @media only screen and (max-width: 767px) {
    grid-template-columns: repeat(2, auto);
  }
  img {
    margin: 0 12px;
    @media only screen and (max-width: 667px) {
      margin: 5px 10px;
    }
  }
`;

export default CustomerWrapper;
