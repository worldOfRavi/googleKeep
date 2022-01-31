import React, {useState} from 'react';
import "./Accordian.css";
import {Api} from './Api'
import MyAccordian from './MyAccordian';

const Accordian = () => {
    const[data, setData] = useState(Api);
    
  return (
  <>
    <section className='container'>
        <h1 className='header'>react interview question</h1>
        {
            data.map((curVal)=>{
                return <MyAccordian key={curVal.id} {...curVal}/>
            })
        }
    </section>
  </>);
};

export default Accordian;
