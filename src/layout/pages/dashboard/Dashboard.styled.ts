import styled from 'styled-components';

export const Dashboard = styled.section`
  /* border: 1px solid red; */
  min-height: 500px;
  margin-bottom: 50px;

  .dashboardText {
    font-size: 50px;
    font-weight: 600;
    padding-left: 15px;
    padding-bottom: 15px;
    margin-bottom: 30px;
    border-bottom: 2px solid #dedede;
  }

  .linkContainer {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .btnMain {
    text-decoration: none;
    font-weight: bold;
    font-size: 20px;
    color: #2eff2e;
    border: 1px solid black;
    padding: 15px 30px;
    margin-left: 40px;
    border-radius: 8px;
    background-color: #084298;
  }
`;
