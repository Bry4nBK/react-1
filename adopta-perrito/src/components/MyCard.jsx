import React from 'react';
import Tags from './Tags';


import 'bootstrap/dist/css/bootstrap.min.css';

const MyCard = ({ imgDog, name, textButton, colorButton, description}) => (
  <div className="custom-card card">
    <img src={imgDog} className="custom-card-img card-img-top"/>
    <div className="custom-card-body card-body">
      <h5 className="custom-card-title card-title">{name}</h5>
      <p className="custom-card-text card-text">{description}</p>
      <Tags text={textButton} color={colorButton} />
    </div>
  </div>
);

export default MyCard;