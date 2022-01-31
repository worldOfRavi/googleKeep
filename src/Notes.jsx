import React from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Tooltip from '@mui/material/Tooltip';

const Notes = ({id, title, content, OnDelete}) => {
    let deleteNote = () =>{
        OnDelete(id)
    }
   
  return (
    <>
        
            <div className="note">
                <h1>{title}</h1>
                <br />
                <p>{content}</p>
                <Tooltip title="Delete">
                <button className="deleteIcon" onClick={deleteNote} >
                    <DeleteOutlineIcon style = {{fontSize:"medium"}} />
                </button>
                </Tooltip>
            </div>
    </>

  );}

export default Notes;
