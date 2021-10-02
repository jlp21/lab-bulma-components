import React from 'react';
import FormField from './formfield/Formfield';
import Navbar from './navbar/Navbar';
import CoolButton from '../coolbutton/CoolButton';
import 'bulma/css/bulma.css';

class SignUp extends React.Component {
    render() {
        return (

<div>
<Navbar/>

<FormField label="Name" type="text" placeholder="e.g Alex Smith" />
<FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
<FormField label="Password" type="text" placeholder="e.g. Password" />

<CoolButton className="button is-success" placeholder="Submit"/>

</div>

        )
    }
}

export default SignUp;