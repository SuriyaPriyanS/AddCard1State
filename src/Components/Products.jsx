import React, { useState } from 'react';

const Productes = () => {
  // Define state to manage the quantity of each product
  const [quantities, setQuantities] = useState({
    'Fancy Product': 0,
    'Special Item': 0,
    'Sale Item': 0,
    'Popular Item': 0
  });

  // Function to handle incrementing the quantity of a product
  const handleIncrement = (productName) => {
    setQuantities(prevQuantities => {
      const newQuantities = {
        ...prevQuantities,
        [productName]: prevQuantities[productName] + 1
      };
      console.log('New quantities:', newQuantities);
      return newQuantities;
    });
  };

  // Function to handle decrementing the quantity of a product
  const handleDecrement = (productName) => {
    if (quantities[productName] > 0) {
      setQuantities(prevQuantities => {
        const newQuantities = {
          ...prevQuantities,
          [productName]: prevQuantities[productName] - 1
        };
        console.log('New quantities:', newQuantities);
        return newQuantities;
      });
    }
  };

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {/* Product card for Fancy Product */}
          <div className="col mb-5">
            <div className="card h-100">
              <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
              <div className="card-body p-4">
                <div className="text-center">
                  <h5 className="fw-bolder">Fancy Product</h5>
                  {/* Display the quantity and buttons to increment and decrement */}
                  <span>Quantity: {quantities['Fancy Product']}</span>
                  <div>
                    <button className="btn btn-outline-dark mr-2" onClick={() => handleDecrement('Fancy Product')}>
                      -
                    </button>
                    <button className="btn btn-outline-dark" onClick={() => handleIncrement('Fancy Product')}>
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  <a className="btn btn-outline-dark mt-auto" href="#">View options</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col mb-5">
            <div className="card h-100">
              <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
              <div className="card-body p-4">
                <div className="text-center">
                  <h5 className="fw-bolder">Special Item</h5>
                  {/* Display the quantity and buttons to increment and decrement */}
                  <span>$18.00 {quantities['Fancy Product']}</span>
                  <div>
                    <button className="btn btn-outline-dark mr-2" onClick={() => handleDecrement('Fancy Product')}>
                      -
                    </button>
                    <button className="btn btn-outline-dark" onClick={() => handleIncrement('Fancy Product')}>
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  <a className="btn btn-outline-dark mt-auto" href="#">Add to Card</a>
                </div>
              </div>
            </div>
          </div>
         
          <div className="col mb-5">
            <div className="card h-100">
              <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
              <div className="card-body p-4">
                <div className="text-center">
                  <h5 className="fw-bolder">sale Items</h5>
                  {/* Display the quantity and buttons to increment and decrement */}
                  <span>$25.00 {quantities['Fancy Product']}</span>
                  <div>
                    <button className="btn btn-outline-dark mr-2" onClick={() => handleDecrement('Fancy Product')}>
                      -
                    </button>
                    <button className="btn btn-outline-dark" onClick={() => handleIncrement('Fancy Product')}>
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  <a className="btn btn-outline-dark mt-auto" href="#">Add to Card</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col mb-5">
            <div className="card h-100">
              <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
              <div className="card-body p-4">
                <div className="text-center">
                  <h5 className="fw-bolder">Popular Items</h5>
                  {/* Display the quantity and buttons to increment and decrement */}
                  <span>$40.00 {quantities['Fancy Product']}</span>
                  <div>
                    <button className="btn btn-outline-dark mr-2" onClick={() => handleDecrement('Fancy Product')}>
                      -
                    </button>
                    <button className="btn btn-outline-dark" onClick={() => handleIncrement('Fancy Product')}>
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  <a className="btn btn-outline-dark mt-auto" href="#">Add to card</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col mb-5">
            <div className="card h-100">
              <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
              <div className="card-body p-4">
                <div className="text-center">
                  <h5 className="fw-bolder">Sale Item</h5>
                  {/* Display the quantity and buttons to increment and decrement */}
                  <span>$25.00 {quantities['Fancy Product']}</span>
                  <div>
                    <button className="btn btn-outline-dark mr-2" onClick={() => handleDecrement('Fancy Product')}>
                      -
                    </button>
                    <button className="btn btn-outline-dark" onClick={() => handleIncrement('Fancy Product')}>
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  <a className="btn btn-outline-dark mt-auto" href="#">Add to Card</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col mb-5">
            <div className="card h-100">
              <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
              <div className="card-body p-4">
                <div className="text-center">
                  <h5 className="fw-bolder">Fancy Product</h5>
                  {/* Display the quantity and buttons to increment and decrement */}
                  <span>$120.00-$280.00 {quantities['Fancy Product']}</span>
                  <div>
                    <button className="btn btn-outline-dark mr-2" onClick={() => handleDecrement('Fancy Product')}>
                      -
                    </button>
                    <button className="btn btn-outline-dark" onClick={() => handleIncrement('Fancy Product')}>
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  <a className="btn btn-outline-dark mt-auto" href="#">View options</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col mb-5">
            <div className="card h-100">
              <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
              <div className="card-body p-4">
                <div className="text-center">
                  <h5 className="fw-bolder">Special Item</h5>
                  {/* Display the quantity and buttons to increment and decrement */}
                  <span>$20.00 "18.00" {quantities['Fancy Product']}</span>
                  <div>
                    <button className="btn btn-outline-dark mr-2" onClick={() => handleDecrement('Fancy Product')}>
                      -
                    </button>
                    <button className="btn btn-outline-dark" onClick={() => handleIncrement('Fancy Product')}>
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  <a className="btn btn-outline-dark mt-auto" href="#">Add to Card</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col mb-5">
            <div className="card h-100">
              <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
              <div className="card-body p-4">
                <div className="text-center">
                  <h5 className="fw-bolder">Popluer Item</h5>
                  {/* Display the quantity and buttons to increment and decrement */}
                  <span>$40.00 {quantities['Fancy Product']}</span>
                  <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
                  <div>
                    <button className="btn btn-outline-dark mr-2" onClick={() => handleDecrement('Fancy Product')}>
                      -
                    </button>
                    <button className="btn btn-outline-dark" onClick={() => handleIncrement('Fancy Product')}>
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  <a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a>
                </div>
              </div>
            </div>
          </div>

          {/* Add other product cards similarly */}
        </div>
      </div>
      
    </section>
  );
};

export default Productes;
