import React, { useState } from 'react';
import './Challenge.css';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';



let Challenge = () => {
    const [state, setstate] = useState(5)
    let decrement = () => {
        if (state > 0) {
            setstate(state - 1)
        }
        else {
            alert('Sorry zero limitation reached...😔')
        }
    }
    return (
        <>

            <div className="main_div">
                <div className="number">
                    <h1>{state}</h1>
                </div>

                <div className="buttons">
                    <Tooltip title="Add">
                        <Button variant="contained" color= "error" className="incr" onClick={() => { setstate(state + 1) }}>
                            <AddIcon />
                        </Button>
                    </Tooltip>

                    <Tooltip title="Delete">
                        <Button variant = "outlined" className="decr" onClick={decrement}>
                            <DeleteIcon />
                        </Button>
                    </Tooltip>
                </div>
                {/* <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button> */}
            </div>
        </>
    )
}

export default Challenge;