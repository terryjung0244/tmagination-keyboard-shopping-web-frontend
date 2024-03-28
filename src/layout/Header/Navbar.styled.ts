import styled from 'styled-components';

export const Navbar = styled.section`
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  background-color: #2c3c6b;
  padding: 0px 30px;

  .navbarTop {
    border: 1px solid red;
    width: 1200px;
    background-color: #2c3c6b;
    /* display: flex;
    flex-direction: column; */

    .navbarTop-brand {
      /* border: 1px solid yellow; */
      /* width: 100%; */
      /* display: flex;
      justify-content: space-between;
      align-items: center; */

      .searchInput {
        height: 50px;
        border-radius: 25px;
        padding-left: 20px;
        width: 500px;
      }
    }

    .navbarTop-toggle {
    }

    .navbarCollapse {
      border: 1px solid red;
      width: 100%;

      .navbarCollapse-nav {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        .navbarCollapse-nav-navLink {
          font-weight: 600;
          font-size: 20px;
          color: whitesmoke;
        }
      }
    }
  }
`;
