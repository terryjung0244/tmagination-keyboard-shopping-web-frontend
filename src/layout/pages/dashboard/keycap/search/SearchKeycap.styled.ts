import styled from 'styled-components';

export const SearchKeycap = styled.section`
  width: 300px;
  margin-top: 50px;
  margin-left: 20px;
  display: flex;
  /* border: 1px solid red; */

  .searchInput {
    width: 70%;
    padding: 5px 15px;
    border-radius: 5px 0px 0px 5px;
    border: 1px solid #dedede;
  }

  .searchBtn {
    width: 30%;
    padding: 5px 15px;
    background-color: #f1efe5;
    color: black;
    border-radius: 0px 5px 5px 0px;
    border: 1px solid #dedede;
  }
`;
