import React, {Component} from 'react';

class PigCard extends Component {

    state = {
        clicked: false
    }

    handleClick = () => {
        this.setState((prevState) => {
            return {
                clicked: !prevState.clicked
            }
        })
    }
    
    render(){
        const {hog} = this.props
        const {name, specialty, greased, weight, 'highest medal achieved': medal} = hog
        
        let imageName = name.toLowerCase().split(" ").join("_")

        let infoToShow = this.state.clicked ?
        <div>
            <p>Specialty: {specialty}</p>
            <p>Greased: {greased ? "Greased" : "Not Greased"}</p>
            <p>Weight: {weight}</p>
            <p>{medal}</p> 
        </div>
        :
        null
        
        return(
            <div className="pigTile">
            <h3>{name}</h3>
            {infoToShow}
            <img src={ require(`../hog-imgs/${imageName}.jpg`) } alt={name}/>
            <button onClick={ this.handleClick }> Toggle details </button>
            </div>
        )
    }
}

export default PigCard;

