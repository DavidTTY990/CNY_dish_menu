import React, { useState } from 'react';
import { dishes } from '../dishes';
import MenuItem from './MenuItem';
import './Menu.css';

const categories = ['All', ...new Set(dishes.map(dish => dish.category))];

const Menu = ({ onOpenModal }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredDishes = selectedCategory === 'All'
    ? dishes
    : dishes.filter(dish => dish.category === selectedCategory);

  return (
    <main className="menu-container">
      <div className="filter-buttons">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="menu-items-grid">
        {filteredDishes.map((dish, index) => (
          <MenuItem key={index} dish={dish} onOpenModal={onOpenModal} />
        ))}
      </div>
    </main>
  );
};

export default Menu;
