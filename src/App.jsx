import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Products from './Components/Products';

const App = () => {

  const data = [
    { 
      image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title:"Fancy Product",
      price:"$40.00",
      saleprice:"$80.00",
      sale:false,
      rating:false,
      cart:false,
    },
    { 
      image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title:"Special Item",
      price:"$20.00",
      saleprice:"$18.00",
      sale:true,
      rating:true,
      cart:false,
    },
    { 
      image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title:"Sale Item",
      price:"$50.00",
      saleprice:"$25.00",
      sale:false,
      rating:false,
      cart:false,
    },
    { 
      image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title:"Popular Item",
      price:"",
      saleprice:"$40.00",
      sale:true,
      rating:true,
      cart:false,
    },
    { 
      image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title:"Sale Item",
      price:"$50.00",
      saleprice:"$25.00",
      sale:true,
      rating:false,
      cart:false,
    },
    { 
      image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title:"Fancy Product",
      price:"$120.00",
      saleprice:"$280.00",
      sale:false,
      rating:false,
      cart:false,
    },
    { 
      image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title:"Special Item",
      price:"$20.00",
      saleprice:"$18.00",
      sale:true,
      rating:true,
      cart:false,
    },
    { 
      image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title:"Popular Item",
      price:"",
      saleprice:"$40.00",
      sale:false,
      rating:true,
      cart:false,
    },
  ];

  const[count, setCount]=useState(0);
  const[product, setProduct]=useState(data);

  return (
    <>
      <Navbar count={count} />
      <Header />
      <Products data={data} product={product} setProduct={setProduct} count={count} setCount={setCount} />
      <Footer />
    </>
  );
};

export default App;