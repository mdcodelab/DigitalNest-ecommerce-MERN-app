import React from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {

    const {pathName} = useLocation();

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathName]);
  return (
    null
  );
}

export default ScrollToTop;
