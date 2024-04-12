import styled from 'styled-components';
import { fontSize } from '../../GlobalStyles';

export const Navbar = styled.section`
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  background-color: #2c3c6b;
  padding: 0px 30px;
  height: 80px;
  font-size: ${fontSize.md};

  .navbarTop {
    /* border: 1px solid red; */
    width: 1200px;
    background-color: #2c3c6b;

    .navbarTop-brand {
    }

    .navbar-toggler {
      color: transparent;
      border: 2px solid white;
      padding: 3px 6px;
    }

    .navbarTop-toggle {
      .navbar-toggler-icon {
        background-image: url("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke='rgba(255,255,255, 1)' stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e");
      }
    }

    .navbarCollapse {
      width: 100%;

      .navbarCollapse-nav {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        .dashboardImage {
          width: 23px;
          filter: opacity(0.5) drop-shadow(0 0 0 #d3d3d3);
        }

        .navbarCollapse-nav-navLink {
          font-weight: 600;
          color: #d3d3d3;
        }
      }
    }
  }
`;
