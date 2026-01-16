import React from 'react';
import { dishes } from '../dishes';
import MenuItem from './MenuItem';
import './Menu.css';

const Menu = () => {
  return (
    <main className="menu-container">
      {dishes.map((dish, index) => (
        <MenuItem key={index} dish={dish} />
      ))}
    </main>
  );
};

export default Menu;
