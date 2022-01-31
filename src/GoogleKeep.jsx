import React, {useState} from 'react';
import './GoogleKeep.css';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Notes from "./Notes"


const GoogleKeep = () => {
    const[addNote, setAddItem] = useState([])

    let AddNote = (note) =>{
        // alert('I am clicked');
        setAddItem((oldData)=>{
            return [...oldData, note]
        })

    }
    let deleted = (id)=>{
        setAddItem((oldData)=>{
            return oldData.filter((curVal, index)=>{
                return index!=id
            })
        })
    }


  return (
  <>
    <Header />
    <CreateNote passNote = {AddNote}/>

    <div className="notes_container">
        {
            addNote.map((curVal, index)=>{
                return <Notes 
                key={index}
                id = {index}
                title = {curVal.title}
                content = {curVal.content}
                OnDelete = {deleted}
                  />
            })
        }
    </div>
    

    <Footer />
  </>
  ); 
};

export default GoogleKeep;
