// src/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../assets/images/logo_white.png'
import { colors } from '../assets/ui/styles'

const HeaderContainer = styled.div`
  position: fixed;
  top: 20px; 
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  background-color: ${colors.darkblue};
  display: flex;
  justify-content: flex-start; /* 왼쪽 정렬 */
  padding: 18px 0px;
  /* box-shadow: 0 2px 4px rgba(0,0,0,0.1); */
  border-radius: 50px; /* 모서리를 둥글게 */
`;

const LogoImage = styled.img`
    height: 32px;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 1.2em;
  margin-left: 20px; /* 왼쪽에 여백 추가 */

  &:hover {
    color: blue;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <StyledLink to="/">
        <LogoImage src={Logo} />
      </StyledLink>
    </HeaderContainer>
  );
};

export default Header;
