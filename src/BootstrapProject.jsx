import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Cards from './Cards';
const BootstrapProject = () => {
  return ( 
    <>
        <h1 className='text-capitalize text-center text-danger' >Welcome to my Bootstrap Project</h1>
        <div className="container d-flex justify-content-around  mt-5">
        <Cards  img = {"https://picsum.photos/200/200"}/>
        <Cards  img = {"https://picsum.photos/201/200"}/>
        <Cards  img = {"https://picsum.photos/200/201"}/>
        </div>
        
    </>
  );
};

export default BootstrapProject;
