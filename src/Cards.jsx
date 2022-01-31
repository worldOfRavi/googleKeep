import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Cards = ({img}) => {
  return (<>
        <div className="card" style={{width : "18rem"}}>
  <img src={img} className="card-img-top" alt="random Img 1" />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
  </>);
};

export default Cards;
