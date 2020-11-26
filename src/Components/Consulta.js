import React from 'react';
import './Styles/Consulta.css'

class Consulta extends React.Component {

    render() {
        const { onchange } = this.props;
        return (
            <div className='fondo'>
                <div className='busqueda'>
                    <div>
                        <h1 className='titulo'>IP Address Tracker</h1>
                        <form onSubmit={onchange}>
                            <label >
                                <input type="text" className='Agregar' name="name" placeholder='Search for any IP address or domain' />
                            </label>
                            <input type="submit" className='boton' value=">" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Consulta;