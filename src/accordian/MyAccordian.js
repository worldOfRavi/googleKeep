import React,{useState} from 'react';

const MyAccordian = (props) => {
    const[show, setShow] = useState(false);
    return (
        <><div className="main_heading">
        <p  onClick={()=>{setShow(!show)}}>{show ? "➖" : "➕"}</p>
            <h1>{props.question}</h1>
        </div>
        {
            show && <p className='answer'>{props.answer}</p>
        }
        </>
        );
};

export default MyAccordian;
