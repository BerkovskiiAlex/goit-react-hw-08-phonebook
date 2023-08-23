const { NavLink } = require('react-router-dom');
const { styled } = require('styled-components');

export const StyledDiv = styled.div`
  width: 100%;
  height: 50px;
  padding: 0 15px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(248 239 224);
`;

export const StyledNavLink = styled(NavLink)`
  position: relative;
  padding: 0 30px;
  text-decoration: none;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to right,
      transparent,
      rgb(67 152 251),
      transparent
    );
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  &.active::after {
    opacity: 0.5;
  }
`;

export const StyledH1 = styled.h1`
  line-height: 30px;
  margin: 0;
`;
