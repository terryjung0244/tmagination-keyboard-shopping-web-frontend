/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import { IProduct } from '../../../type/product.interface';
import ProductCardDetail from '../../../components/productCardDetail/ProductCardDetail';
import arrowImage from '../../../assets/previous.png';
import { useAppDispatch } from '../../../service/store';
import { addCart } from '../../../service/slice/cartSlice';
import { getUuid } from '../../../util/uuid';

interface IStateProps {
  product: IProduct;
}

const ProductDetail = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { state }: { state: IStateProps } = useLocation();
  const { product } = state;

  console.log(state);

  const [quantity, setQuantity] = useState<number>(1);
  const [selectedFeatures, setSelectedFeatures] = useState<{ color: string; switch?: string }>({
    color: '',
    switch: '',
  });
  const [alertState, setAlertState] = useState<{
    message: string;
    toggle: boolean;
  }>({
    message: '',
    toggle: false,
  });

  useEffect(() => {
    if (alertState.toggle) {
      setTimeout(() => {
        setAlertState({ ...alertState, message: '', toggle: false });
      }, 1500);
    }
  }, [alertState]);

  const handleDisocuntPrice = () => {
    return (
      parseInt(state.product.price) -
      parseInt(state.product.price) * parseFloat(state.product.discountRate)
    );
  };

  const handlePreviousPage = () => {
    navigate(-1);
  };

  const handleIncreaseQuantity = () => {
    if (quantity < parseInt(state.product.stock)) {
      setQuantity(quantity + 1);
    }
    console.log('Inc');
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
    console.log('Dec');
  };

  const handleSelectedFeatures = (feature: string, type: string) => {
    console.log(feature, type);
    // if (type === 'color') {
    //   setSelectedFeatures({ ...selectedFeatures, color: feature });
    // } else {
    //   setSelectedFeatures({ ...selectedFeatures, switch: feature });
    // }
    setSelectedFeatures({ ...selectedFeatures, [type]: feature });
  };

  const handleAddToCart = (product: IProduct, isGoCheckout: boolean) => {
    switch (product.category) {
      case 'KEYBOARD':
        if (!selectedFeatures.color || !selectedFeatures.switch) {
          // alert('Please select color and switch');
          setAlertState({ ...alertState, message: 'Please select color and switch', toggle: true });
          return;
        }
        break;

      case 'SWITCH':
        if (!selectedFeatures.color) {
          // alert('Please select color');
          setAlertState({ ...alertState, message: 'Please select color', toggle: true });
          return;
        }
        break;

      case 'KEYCAP':
        if (!selectedFeatures.color) {
          alert('Please select color');
          return;
        }
        break;

      default:
        alert('Default');
        break;
    }

    const cartLocalStorage = localStorage.getItem('cart');
    if (cartLocalStorage) {
      const parsedCartLocalStorage = JSON.parse(cartLocalStorage);
      const tempProduct = { ...product, quantity, features: selectedFeatures, cartId: getUuid() };
      parsedCartLocalStorage.push(tempProduct);
      localStorage.setItem('cart', JSON.stringify(parsedCartLocalStorage));
      dispatch(addCart(tempProduct));

      if (isGoCheckout) {
        navigate('/checkout');
      }
      return;
    }

    const tempProduct = { ...product, quantity, features: selectedFeatures, cartId: getUuid() };
    localStorage.setItem('cart', JSON.stringify([tempProduct]));
    dispatch(addCart(tempProduct));

    if (isGoCheckout) {
      navigate('/checkout');
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <div onClick={handlePreviousPage}>
        <img
          src={arrowImage}
          alt="arrowImage"
          style={{
            width: '40px',
            marginBottom: '20px',
            filter:
              'invert(100%) sepia(0%) saturate(1%) hue-rotate(298deg) brightness(109%) contrast(101%)',
          }}
        />
      </div>

      <ProductCardDetail
        quantityState={quantity}
        productDetail={product}
        handleIncreaseQuantity={handleIncreaseQuantity}
        handleDecreaseQuantity={handleDecreaseQuantity}
        handleSelectedFeatures={handleSelectedFeatures}
        selectedFeatures={selectedFeatures}
        handleDisocuntPrice={handleDisocuntPrice}
        handleAddToCart={handleAddToCart}
      />

      {alertState.toggle && (
        <div style={{ position: 'absolute', bottom: '-80px', left: 0, right: 0 }}>
          <Alert variant={'light'}>{alertState.message}</Alert>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
