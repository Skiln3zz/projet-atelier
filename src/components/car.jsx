import React from 'react';

const Car = ({ car, onRemoveCar }) => (
  <div className="car">
    <div className="car-image">
      <img src={car.image} alt={car.model} />
    </div>
    <h2>{car.model}</h2>
    <p>Puissance : {car.power}</p>
    <p>Date de fabrication : {car.manufacturingDate}</p>
    <p>Prix actuel: {car.price}</p>
    <button onClick={() => onRemoveCar(car)}>Mettre la voiture à la casse</button> {/* Utilisez la fonction onRemoveCar */}
  </div>
);

export default Car;
