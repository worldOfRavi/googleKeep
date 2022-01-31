import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';
import { useState } from 'react';

const CreateNote = (props) => {
    const[note, setNote] = useState({
        title:'',
        content:''
    })
    const [expand, stExpand] = useState(false)


    let Submitted = (event) => {
        event.preventDefault();
    }
    let showIt = () =>{
        stExpand(true)
    }
    let BackTONormal = () =>{
        stExpand(false)
    }

    let InputEvent = (event) =>{
        let {name, value} = event.target;
        
            setNote((oldData)=>{
                return{
                    ...oldData,
                    [name]:value,
                }

            })
        
    }

    let NoteAdded = () =>{
        props.addFun(note)
        setNote({
            title:'',
            content:''
        })
    }

    return (
        <>
            <div className="main_note" onDoubleClick = {BackTONormal}>
                <form onSubmit={Submitted}>

                    {expand ?
                        (
                            <input type="text"
                                name = 'title'
                                onChange={InputEvent}
                                value={note.title}
                                placeholder='Title'
                            />
                        ) : null
                    }


                    <textarea
                        name = 'content'
                        onChange={InputEvent}
                        value={note.content}
                        placeholder='Write a note...'
                        onClick = {showIt}
                        >
                        
                    </textarea>
                    {expand ?
                        (
                            <Tooltip title="Add">
                                <button className="addBtn" onClick={NoteAdded}>
                                    <AddIcon />
                                </button>
                            </Tooltip>
                        ) : null
                    }

                </form>
            </div>
        </>
    );
};

export default CreateNote;
