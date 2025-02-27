import React from 'react';

const Item = ({ id, title, description, price, pictureUrl }) => {
  return (
    <div className="item">
      <img src={pictureUrl} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p><strong>Price: ${price}</strong></p>
    </div>
  );
};

export default Item;
