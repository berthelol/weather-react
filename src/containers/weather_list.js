import React , {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
class WeatherList extends Component{
  renderWeather(cityData){
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);
        return(
      <tr key={name}>
        <td> {name}</td>
        <td><Chart color="red" data={temps}/> </td>
        <td><Chart color="orange" data={pressure}/> </td>
        <td><Chart color="blue" data={humidity}/> </td>
      </tr>
    );
  }
  render(){
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (pA)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

/*function mapStateToProps(state){
  return {weather:state.weather}
}*/
function mapStateToProps({weather}){
  return {weather}
}

export default connect(mapStateToProps)(WeatherList);
