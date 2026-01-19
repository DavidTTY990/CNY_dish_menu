import React, { useState } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Modal from './components/Modal';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [selectedDish, setSelectedDish] = useState(null);
  
  const handleOpenModal = (dish) => {
    setSelectedDish(dish);
  };

  const handleCloseModal = () => {
    setSelectedDish(null);
  };

  return (
    <div className="App">
      <Header />
      <Menu onOpenModal={handleOpenModal} />
      <Contact />
      <Footer />
      {selectedDish && <Modal dish={selectedDish} onClose={handleCloseModal} />}
    </div>
  );
}
export default App;
