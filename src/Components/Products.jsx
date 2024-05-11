import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Products = ({ data, setProduct, product, setCount, count }) => {
 
  const handleinc = () => {
    setCount((initialval) => initialval + 1);
  };

  const handledec = () => {
    if(count>0){
      setCount((initialval) => initialval - 1);
    }
  };

  const handleClick = (index) => {
    if (product[index].cart) {
      product[index].cart = false;
      setProduct([...product])
      handledec();
    } 
    else {
      product[index].cart=true;
      setProduct([...product])
      handleinc();
    }
  };

  return (
    <>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {product.map((element, index) => {
              return (
                <div key={index}>
                  <div className="col mb-5">
                    <div className="card h-100">
                      {element.sale ? (
                        <div
                        className="badge bg-dark text-white position-absolute"
                          style={{ top: "0.5rem", right: "0.5rem" }}
                        >
                          Sale
                        </div>
                      ) : (
                        <div></div>
                      )}
                      
                      <img className="card-img-top" src={element.image} alt="..."></img>
                     
                      <div className="card-body p-4">
                        <div className="text-center">
                          <h5 className="fw-bolder">{element.title}</h5>
                          
                          {element.rating ? (<div className="d-flex justify-content-center small text-warning mb-2">
                          <div className="bi-star-fill"><FaStar /></div>
                          <div className="bi-star-fill"><FaStar /></div>
                          <div className="bi-star-fill"><FaStar /></div>
                          <div className="bi-star-fill"><FaStar /></div>
                          <div className="bi-star-fill"><FaStar /></div>
                          </div>)
                          :(<div className="d-flex justify-content-center small text-warning mb-2">
                            <div className="bi-star-fill p-2 mb-1 "></div>
                            
                          </div>)}
                          
                          <span className="text-muted text-decoration-line-through">{element.price}</span>
                          <span className="px-2 ">{element.saleprice}</span>
                          </div>
                      </div>

                      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center">
                          <button className="btn btn-outline-dark mt-auto" onClick={()=>{handleClick(index)}}>
                            {element.cart ? "Remove from cart" : "Add to card"}
                          </button>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
