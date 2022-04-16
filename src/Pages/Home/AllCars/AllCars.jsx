import React, { useEffect, useState } from "react";
import SingleCar from "../SingleCar/SingleCar";

const AllCars = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch("car.json")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);
  return (
    <div className="container mt-4 text-center">
      <div className="row ">
        {cars.map((car) => (
          <SingleCar key={car.id} car={car}></SingleCar>
        ))}
      </div>
    </div>
  );
};

export default AllCars;
