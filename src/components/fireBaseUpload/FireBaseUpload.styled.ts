import styled from 'styled-components';

export const FireBaseUpload = styled.section`
  .previewMain {
    display: flex;
    justify-content: center;
    object-fit: cover;

    .previewImage {
      width: 150px;
    }
  }

  .filebox {
    margin-top: 20px;
    text-align: center;
  }

  .uploadImageLabel {
    padding: 5px 15px;
    border-radius: 4px;
    background-color: #f1efe5;
    border-color: #d6d4c8;
  }

  .uploadImage {
    display: none;
  }
`;
