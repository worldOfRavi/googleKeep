import React, {useState} from 'react';
import './GoogleKeep.css';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Notes from "../Notes"
import Demo from "./Demo"


const GoogleKeep = () => {
    const[addNote, setAddNote] = useState([])
    let AddNote = (note) =>{
        setAddNote((oldData)=>{
            return [...oldData, note]
        })
    }
let deleteNote = (id) =>{
    setAddNote((oldData)=>{
        return oldData.filter((curVal, index)=>{
            return index!=id
        })
    })
}
  return (
  <>
    <Header />
    <Demo /> 
    <CreateNote addFun = {AddNote} />
       
    <div className="notes_container">
    {
        addNote.map((curVal, index)=>{
           return <Notes 
           key = {index}
           id = {index}
           title = {curVal.title}
           content = {curVal.content}
           onDelete = {deleteNote} />
        })
    }
    </div>
     

    <Footer />
  </>
  ); 
};

export default GoogleKeep;
