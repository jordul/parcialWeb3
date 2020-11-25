import React,{ Component } from 'react';
import Consulta from '../src/Components/Consulta';
import Card from '../src/Components/Card';
import Mapa from '../src/Components/Mapa';
import './App.css'
let ipConsulta;
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      location: '-----',
      timezone: '-----',
      lat: '4.6486259',
      lng: '-74.2478966',
      isp: '-----',
      error: null
    };
  }
  
  fetchExercises = async () => {
    try {
      const response = await fetch(
        "https://geo.ipify.org/api/v1?apiKey=clave&ipAddress=" + ipConsulta
      );
      const data = await response.json();
      this.setState({
        isp: data.isp,
        lat: data.location.lat,
        lng: data.location.lng,
        timezone: 'UTC'+data.location.timezone,
        location: data.location.city + ', ' + data.location.postalCode
      });
      console.log('Location: '+this.state.location+' timezone: '+ this.state.timezone + ' lat: '+ this.state.lat + 
      ' lng: '+ this.state.lng + ' isp: '+ this.state.isp)
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  getConsulta = (event) => {
    event.preventDefault();
    ipConsulta=event.target[0].value;
    this.fetchExercises()
  }

  render() {
    return (
      <div className="componente1">
        <Consulta
          onchange={this.getConsulta}
        />
        <Card
          ip={ipConsulta}
          location={this.state.location}
          timezone={this.state.timezone}
          isp={this.state.isp}
        />
        <Mapa 
          lat={this.state.lat}
          lng={this.state.lng}
          isp = {this.state.isp}
        />
      </div>
    );
  }

}

export default App;
