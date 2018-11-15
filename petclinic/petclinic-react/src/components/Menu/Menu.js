
import * as React from 'react';
import { Link,NavLink } from 'react-router-dom'

export default class Menu extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <Link to="/" className="navbar-brand">Petclinic</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li>
                            <NavLink exact to="/"  
                            activeStyle={{fontWeight: "bold",color: "#5fa134"}}
                            style={{color: "#f1f1f1"}}><span>HOME</span></NavLink>
                        </li>
                        <li>
                        <NavLink exact to="/owners/find"  
                            activeStyle={{fontWeight: "bold",color: "#5fa134"}}
                            style={{color: "#f1f1f1"}}><span>FIND OWNERS</span></NavLink>
                        </li>
                        <li>
                        <NavLink exact to="/vets"  
                            activeStyle={{fontWeight: "bold",color: "#5fa134"}}
                            style={{color: "#f1f1f1"}}><span>VETERINARIANS</span></NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}