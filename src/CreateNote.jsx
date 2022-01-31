import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';
import { useState } from 'react';

const CreateNote = (props) => {
    const[hideIt, setHideIt] = useState(false) 
    const[note, setNote] = useState({
        title:'',
        content:'',
    })
    
    let Submitted = (event) =>{
        event.preventDefault();
    }
    let showIt = () =>{
        setHideIt(true)
    }
    let HideItAgain = () =>{
        setHideIt(false)
    }

    let InputEvent = (event) =>{
        // let value = event.target.value;
        // let name = event.target.name;
        let {name, value} = event.target;
        if(value){
            setNote((oldData)=>{
                return {
                    ...oldData,
                    [name]:value,
                }
            })
        }
        
    }

     let addEvent = () =>{
        props.passNote(note);
        // setNote(()=>{
        //     return{
        //         title:"",
        //         content:""
        //     }
        // })
        setNote({
            title:'',
            content:''
        })

     }
  return (
    <>
        <div className="main_note" onDoubleClick = {HideItAgain}>
            <form onSubmit={Submitted}> 

            {hideIt ?
                (<input type="text" 
                onChange={InputEvent}
                name='title'
                value={note.title}
                placeholder='Title' 
                

                />): null}

                <textarea  
                onChange={InputEvent}
                name='content'
                value={note.content}
                onClick = {showIt}
                placeholder='Write a note...'>
                

                </textarea>
                {hideIt ?
                (<Tooltip title="Add">
                <button onClick = {addEvent}  className="addBtn">
                    <AddIcon  />
                </button>
                </Tooltip>) :null}
            </form>
        </div>
    </>
  );
};

export default CreateNote;
