import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import { Link, NavLink, withRouter } from 'react-router-dom';

class Navbar extends React.Component {

   render() {
       return (
        <div>
            <Tabs>
                <Tab label="Home" 
                     containerElement={<Link to="/"/>} 
                     style={styles}>
                </Tab>
                <Tab label="About" 
                     containerElement={<NavLink to="/about"/>} 
                     style={styles}>
                </Tab>
                <Tab label="Contact" 
                     containerElement={<NavLink to="/contact"/>} 
                     style={styles}>
                </Tab>
            </Tabs>

        {/* <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a href=" " className="brand-logo">Poke'Times</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>  */}
        </div>
       );
   }
}

let styles = {
    backgroundColor: "#921414", 
    padding: "10px", 
    fontSize: "18px",
    textTransform: "properCase"
}

export default withRouter(Navbar);