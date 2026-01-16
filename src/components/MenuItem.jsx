import React from 'react';
import './MenuItem.css';

const MenuItem = ({ dish }) => {
  return (
    <div className="menu-item">
      <img src={dish.image} alt={dish.name} className="menu-item-image" />
      <div className="menu-item-content">
        <h3 className="menu-item-name">{dish.name}</h3>
        <p className="menu-item-description">{dish.description}</p>
        <p className="menu-item-price">{dish.price}</p>
      </div>
    </div>
  );
};

export default MenuItem;
