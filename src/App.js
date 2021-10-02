import React from 'react';
import FormField from './formfield/Formfield';
import Navbar from './navbar/Navbar';
import CoolButton from './coolbutton/CoolButton';




const App = () => {
  return <div> 

  <Navbar/>

  <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
  <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
  <CoolButton className="button is-primary" placeholder="Log In"/>
  <CoolButton className="button is-success" placeholder="Submit"/>
  
  </div>

};

export default App;
