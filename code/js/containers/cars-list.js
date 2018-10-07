import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {select} from "../actions/index";

class CarsList extends Component {
  showList() {
    return this.props.cars.map((car) => {
      return (
        <li onClick={() => this.props.select (car)}
        key={car.id}>{car.name}</li>
      );
    });
  }
  render () {
    return (
      <ol>
       {this.showList() }
      </ol>
    );
  }
};
// указывает с каким конкретно массивом работаем (cars)
function mapStateToProps(state) {
  return {
    cars: state.cars
  };
}
// приводит функцию(action) в свойство  
function matchDispatchToProps (dispatch) {
  return bindActionCreators({select: select}, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(CarsList);