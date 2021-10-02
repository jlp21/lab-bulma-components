import React from "react";
import 'bulma/css/bulma.css';


class FormField extends React.Component {
    render() {
        
        const {label, type, placeholder} = this.props
        
        return (
            
          <div className="field">
            <label className="label"> {label} </label>
            
            <div className="control">
              <input type={type} placeholder={placeholder} />
            </div>
          
          </div>
        )
    };
  };

export default FormField;