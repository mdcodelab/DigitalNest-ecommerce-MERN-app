import React from 'react';
import {Link} from "react-router-dom";

function ProductPreview({_id, category, name, pictures}) {

  return (
    <Link to={`/product/${_id}`} className="product__preview__container">
      <div className="product__content">
        <img src={pictures[0]}></img>
        <p>{name}</p>
        <span>{category}</span>
      </div>
    </Link>
  );
}


export default ProductPreview;
