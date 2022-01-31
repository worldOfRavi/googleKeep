import React, {useState} from 'react';
import './TodoList.css';
import ToDoLists from './ToDoLists';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const TodoList = () => {
    const [list, setList] = useState('');
    const[showItem, setShowItem] = useState([]);
    let getItem = (event) =>{
        let value = event.target.value;
        setList(value);
    }

    let addItem = () =>{
        if(!list){
            alert('Add something in the list')
        }
        else{
            setShowItem((oldValue)=>{
                return [...oldValue, list]
            })
            setList('')

        }  
    }

    let deleteItem = (id) =>{
        setShowItem((oldValue)=>{
            return showItem.filter((curVal, ind)=>{
                return ind != id;
            })
        })
    }
    return (
        <>
            <div className="main_container">
                <div className="header">
                    <h1>
                        ToDo List
                    </h1>
                </div>

                <div className="input_div">
                    <input type="text"
                        placeholder='Add Items'
                        value = {list}
                        onChange={getItem}
                    />
                     <AddIcon  onClick={addItem} className = "newAddBtn"/>
                </div>

                <div className="items">
                {
                    showItem.map((curVal , ind)=>{
                        return(
                                <ToDoLists key = {ind} 
                                text = {curVal}
                                id = {ind} 
                                onSelect = {deleteItem}
                                />
                        )
                    })
                }
                    
                </div>

            </div>
        </>
    )
}

export default TodoList
