import React, { useState } from 'react';
import Car from './car.jsx';

const CarsData = [
  {
    model: 'Ford Mustang',
    power: '355 cv',
    manufacturingDate: '1967',
    price: '50k €',
    image: 'mustang1.png',
  },
  {
    model: 'BMW M3 E36',
    power: '321 cv',
    manufacturingDate: '1992-1999',
    price: '25k €',
    image: 'bmwe36.png',
  },
  {
    model: 'Dodge Charger',
    power: '900 cv',
    manufacturingDate: '1970',
    price: '70k €',
    image: 'dodge.png',
  },
  {
    model: 'BMW Z4 Roadster',
    power: '340 cv',
    manufacturingDate: '2023',
    price: '70k €',
    image: 'z4.png',
  },
];

const Catalog = () => {
  const [currentCarIndex, setCurrentCarIndex] = useState(0);
  const [carsData, setCarsData] = useState(CarsData);
  const [newCar, setNewCar] = useState({ model: '', power: '', manufacturingDate: '', price: '', image: '' });
  const hasPreviousCar = currentCarIndex > 0;
  const hasNextCar = currentCarIndex < carsData.length - 1;

  const goToNextCar = () => {
    setCurrentCarIndex((prevIndex) =>
      prevIndex < carsData.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const goToPreviousCar = () => {
    setCurrentCarIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };

  const addCar = () => {
    if (newCar.model && newCar.power && newCar.manufacturingDate && newCar.price && newCar.image) {
      setCarsData([...carsData, newCar]);
      setNewCar({ model: '', power: '', manufacturingDate: '', price: '', image: '' });
    }
  };

  const removeCar = (carToRemove) => {
    const updatedCars = carsData.filter((car) => car !== carToRemove);
    setCarsData(updatedCars);
    if (currentCarIndex >= updatedCars.length) {
      setCurrentCarIndex(updatedCars.length - 1);
    }
  };

  const currentCar = carsData[currentCarIndex];

  return (
    <div className="catalog">
      <h1>Catalogue de voitures</h1>
      <Car car={currentCar} onRemoveCar={removeCar} />
      <div className="buttons">
        {hasPreviousCar && (
          <button onClick={goToPreviousCar}>Voiture Précédente</button>
        )}
        {hasNextCar && <button onClick={goToNextCar}>Voiture Suivante</button>}
      </div>
      <h2>Ajouter une nouvelle voiture</h2>
      <form>
        <input
          type="text"
          placeholder="Modèle"
          value={newCar.model}
          onChange={(e) => setNewCar({ ...newCar, model: e.target.value })}
        />
        <input
          type="text"
          placeholder="Puissance"
          value={newCar.power}
          onChange={(e) => setNewCar({ ...newCar, power: e.target.value })}
        />
        <input
          type="text"
          placeholder="Date de fabrication"
          value={newCar.manufacturingDate}
          onChange={(e) => setNewCar({ ...newCar, manufacturingDate: e.target.value })}
        />
        <input
          type="text"
          placeholder="Prix"
          value={newCar.price}
          onChange={(e) => setNewCar({ ...newCar, price: e.target.value })}
        />
        <input
          type="text"
          placeholder="URL de l'image"
          value={newCar.image}
          onChange={(e) => setNewCar({ ...newCar, image: e.target.value })}
        />
        <button type="button" onClick={addCar}>Ajouter</button>
      </form>
    </div>
  );
};

export default Catalog;
