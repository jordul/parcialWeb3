import React, { Component } from "react";
import './Styles/Card.css'
class Card extends Component {
    render() {
        const { ip, location, timezone, isp } = this.props;
        return (
            // <nav className="card">
            //     <ul>
            //     <li>
            //         <p>IP ADDRESS</p>
            //         <h1>{ip}</h1>
            //     </li>
            //     <li>
            //         <p>LOCATION</p>
            //         <h1>{location}</h1>
            //     </li>
            //     <li>
            //         <p>TIMEZONE</p>
            //         <h1>{timezone}</h1>
            //     </li>
            //     <li>
            //         <p>ISP</p>
            //         <h1>{isp}</h1>
            //     </li>
            // </ul>
            // </nav>
            <ul className="list-group list-group-horizontal">
                <li className="list-group-item">
                    <p className='atributo'>IP ADDRESS</p>
                    <h1>{ip}</h1>
                </li>
                <li className="list-group-item">
                    <p className='atributo'>LOCATION</p>
                    <h1>{location}</h1>
                </li>
                <li className="list-group-item">
                    <p className='atributo'>TIMEZONE</p>
                    <h1>{timezone}</h1>
                </li>
                <li className="list-group-item">
                    <p className='atributo'>ISP</p>
                    <h1>{isp}</h1>
                </li>
            </ul>
        )
    }
}

export default Card;