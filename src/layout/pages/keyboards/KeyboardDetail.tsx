import React from 'react';
import { useParams } from 'react-router-dom';

const KeyboardDetail = () => {
  const { id } = useParams();

  return <div>{id}</div>;
};

export default KeyboardDetail;

/**
 * 링크 클릭 했을 때, state 값으로 해당 키보드 데이터 넘기기
 * 또는
 * 링크 클릭 하고 페이지 이동됬을 때, 넘어온 id 값으로 API 부르기
 */
