import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class ActiveCity extends Component {

  infoActiveCity = () => {
    if (this.props.activeCity){
      return( <div>
                <h3>{this.props.activeCity.name}</h3>
                <p>{this.props.activeCity.address}</p>
                <img src={`https://kitt.lewagon.com/placeholder/cities/${this.props.activeCity.slug}`} alt="" width='99%'/>
              </div>)
    }
  }

  render() {
    return(
      <div className="active-city">
        {this.infoActiveCity()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeCity : state.activeCity
  };
}

export default connect(mapStateToProps, null)(ActiveCity);
