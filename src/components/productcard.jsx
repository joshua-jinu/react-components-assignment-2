import React from 'react';  
import Button from './button'; 
import './productcard.css';  

const Productcard = () => { 
    const data = { 
        productImage: 'https://res.cloudinary.com/dabeupfqq/image/upload/v1734699696/uploads/hvvyd3op416lbdrqwxzg.jpg', 
        productName: 'DJI Ozmo', 
        price: '19,999'
    }
    
  return (  
    <div className="productcard">  
      <img src={data.productImage} alt={data.productName} className="productcard-image" />  
      <div className="productcard-details">  
        <h3 className="productcard-name">{data.productName}</h3>  
        <p className="productcard-price">${data.price}</p>  
        <Button text="View Product" onClick={() => alert(`Viewing ${data.productName}`)} />  
      </div>  
    </div>  
  );  
};  

export default Productcard;  
