import styled from 'styled-components';

export const Navbar = styled.section`
  border: 2px solid red;

  /* background-color: #2d406b; */
  display: flex;
  justify-content: space-evenly;
  letter-spacing: 1px;

  .bg-body-tertiary {
    background-color: #2d406b !important;
    width: 1200px;
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
