import styled from 'styled-components';

export const FireBaseUpload = styled.section`
  .preview {
    /* border: 1px solid red; */
    display: flex;
    justify-content: center;
    object-fit: cover;
  }

  .filebox {
    /* border: 1px solid red; */
    margin-top: 10px;
    text-align: center;
    /* padding: 5px 5px; */
  }

  .uploadImageLabel {
    border: 1px solid red;
    padding: 5px 15px;
    border-radius: 4px;
    background-color: #f1efe5;
    border-color: #d6d4c8;
  }

  .uploadImage {
    display: none;
  }
`;
