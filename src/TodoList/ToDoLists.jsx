import React, {useState} from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

const ToDoLists = (props) => {
const[line, setLine] = useState(false);
   
let cutIt = () =>{
    setLine(true);
}
    return (
        <>
            <div className="each" key={props.index}>
                <span onClick={cutIt}  onDoubleClick={()=>{props.onSelect(props.id)}}><DeleteIcon className='deleteBtn' /></span>
                <div style={{textDecoration: line ? "line-through" : 'none'}} className="item">{props.text}</div>
            </div>
        </>
    )
}

export default ToDoLists
