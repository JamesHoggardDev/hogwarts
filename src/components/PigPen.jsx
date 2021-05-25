import React from 'react';
import PigCard from './PigCard';

const PigPen = (props) => {
    const {hogs} = props

    const arrOfComps = hogs.map((hogObj) => {
        return <PigCard hog={hogObj} key={hogObj.name}/>
    })
    
    return(
        <div className="ui grid container">
            <h1>Hello from PigPen</h1>
            {arrOfComps}
        </div>
    )
}

export default PigPen;

