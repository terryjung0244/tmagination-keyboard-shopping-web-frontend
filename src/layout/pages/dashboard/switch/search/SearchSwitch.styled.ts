import styled from 'styled-components';

export const SearchSwitch = styled.section`
  margin-top: 20px;
  /* border: 1px solid red; */
  width: 300px;
  display: flex;

  .searchInput {
    width: 70%;
    padding: 5px 15px;
    border-radius: 5px 0px 0px 5px;
    border: 1px solid #dedede;
  }

  .searchBtn {
    /* width: 100%; */
    width: 30%;
    padding: 5px 15px;
    background-color: #f1efe5;
    color: black;
    border-radius: 0px 5px 5px 0px;
    border: 1px solid #dedede;
  }
`;
