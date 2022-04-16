const SingleCar = ({ car }) => {
  const { img, name, price, description } = car;
  return (
    <div className="col-md-4 mt-4">
      <div class="card">
        <img
          width="250px"
          height=" 400px"
          class="card-img-top"
          src={img}
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p className="text-success fw-bold">${price}</p>
          <p class="card-text">{description.slice(0, 200)}</p>
        </div>
        <div class="">
          <button className="shadow-none w-50 btn btn-primary rounded-0 mt-2 fw-bold">
            Details
          </button>
          <button className="shadow-none w-50 btn btn-success rounded-0 mt-2 fw-bold">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleCar;
