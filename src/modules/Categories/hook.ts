import { useState } from 'react';

import { categoriesImg } from '@constants/images';

const useContainer = () => {
  const [loadingStates, setLoadingStates] = useState(
    categoriesImg.map(() => true),
  );

  const handleImageLoad = (index: number) => {
    setLoadingStates((prev) =>
      prev.map((state, i) => (i === index ? false : state)),
    );
  };
  return { loadingStates, categoriesImg, handleImageLoad };
};

export default useContainer;
