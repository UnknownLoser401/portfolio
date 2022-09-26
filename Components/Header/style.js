import styled from 'styled-components';

export const Container = styled.div`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 560px) {
    justify-content: end;
  }
`;

export const NavLinks = styled.nav`
  display: flex;
  justify-content: space-evenly;
  box-sizing: border-box;
  width: 100%;

  @media (max-width: 560px) {
    flex-direction: column;
    background-color: #161616;
    position: fixed;
    height: 100%;

    gap: 0px;
    top: 0px;
    right: 0px;
    width: 100%;
    right: ${props => props.sidebar ? '0' : '-100%'};
    transition: 0.5s;

    a {
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  }
`;

export const Ancora = styled.a`
  font-size: 20px;
  height: 100px;
  transition: 0.3s;
  
  &.active {
    background-color: black;
  }

  &:hover {
        text-shadow: 2px 2px 4px #D9D9D9;
    }

  @media (min-width: 560px) {
    align-items: center;
    display: flex;
    padding: 0px 10px;
  }
`;

export const Menu = styled.div`
  font-size: 30px;
  display: none;
  cursor: pointer;
  
  
  @media (max-width: 560px) {
    display: flex;
    padding-right: 1rem;
  }
`;

export const CloseSidebar = styled.div`
  font-size: 30px;
  right: 1rem;
  top: 1rem;
  position: absolute;
  display: none;
  cursor: pointer;
  
  @media (max-width: 560px) {
    display: flex;
    right: 1rem;
    top: 1rem;
  }
`;