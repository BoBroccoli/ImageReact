import React from 'react';
import golden from './images/golden.jpeg'
import './App.css';

class Image extends React.Component {
    render() {
        return(
            <img className="image"
                src={golden}
                alt={"logo"}
            ></img>
        );
    }
}

export default Image;