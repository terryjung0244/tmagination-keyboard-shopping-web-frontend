import styled from 'styled-components';

export const Navbar = styled.section`
  background-color: #2d406b;
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-evenly;

  .bg-body-tertiary {
    background-color: #2d406b !important;
  }

  .navbarFont {
    /* border: 1px solid red; */
    color: white;
    font-weight: 600;
    font-size: 20px;
    margin-right: 30px;
  }

  .navbarContainer {
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-evenly;
  }
`;
