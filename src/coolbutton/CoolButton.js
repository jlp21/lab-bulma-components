import React from "react";
import 'bulma/css/bulma.css';

class CoolButton extends React.Component{
    render() {
        
        const {className, placeholder} = this.props

        return (
        <div>
        <button className={className}>{placeholder}</button>
        </div>
        )
    }
}

export default CoolButton;