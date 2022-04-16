const SingleCar = ({ car }) => {
  const { img, name, price, description } = car;
  console.log(car.img);
  return (
    <div className="col-md-4 mt-4">
      <div class="card">
        <img class="card-img-top" src={img} alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p className="text-success fw-bold">${price}</p>
          <p class="card-text">{description.slice(0, 200)}</p>
        </div>
        <div class="">
          <button className="w-100 btn btn-primary rounded-0 mt-2 fw-bold">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleCar;
