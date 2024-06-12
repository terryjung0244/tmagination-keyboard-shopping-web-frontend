import React from 'react';
import * as Styled from './DeleteAllProducts.Styled';

const DeleteAllProducts = () => {
  const onClickDeleteKeyboard = () => {
    // 1. Delete ImagePath in Firebase
    // 2. Delete Data in MongoDB
  };

  const handleCancelModal = () => {
    // closeDeleteModal();
  };

  return (
    <Styled.DeleteAllProducts>
      <div className="messageContainer">
        <h2>Delete All Products?</h2>
        <div className="btnMain">
          <button className="keyboardDeleteBtn" onClick={onClickDeleteKeyboard}>
            Delete
          </button>
          <button className="keyboardDeleteBtn" onClick={handleCancelModal}>
            Cancel
          </button>
        </div>
      </div>
    </Styled.DeleteAllProducts>
  );
};

export default DeleteAllProducts;
