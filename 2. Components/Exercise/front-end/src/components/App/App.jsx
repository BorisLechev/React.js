import React, {
  Component
} from 'react';
import './App.css';
import Street from '../Streets/Street';
import House from '../Houses/House';
import HouseDetails from '../HouseDetails/HouseDetails';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      streets: [],
      selectedStreetIdx: 0,
      selectedHouseIdx: 0,
      hasFetched: false  // if we have taken the data
    };
  }

  async componentWillMount() {
    const response = await fetch('http://localhost:9999/feed/street/all');
    const json = await response.json();

    this.setState({
      streets: json.streets,
      hasFetched: true
    });
  }

  getSelectedStreetHouses() { // will return all houses in the currently selected street
    if (this.state.hasFetched) {
      return this.state.streets[this.state.selectedStreetIdx].homes;
    }

    return [];
  }

  getHouseDetails() {
    return this.state.streets[this.state.selectedStreetIdx].homes[this.state.selectedHouseIdx];
  }

  streetHoverEvent(index) {
    this.setState({
      selectedStreetIdx: index
    });
  }

  houseHoverEvent(index) {
    this.setState({
      selectedHouseIdx: index
    });
  }

  render() {
    return (
      <div className="App">
        <div className="streets">
          <h2>Streets</h2>
          {
            this.state.streets.length > 0 ? this.state.streets.map((street, index) => (
              <Street location={street.location} key={index} id={index} 
              streetHoverEvent={this.streetHoverEvent.bind(this)} />
            )) : null
          }
        </div>
        <div className="houses">
          <h2>Houses</h2>
          {
            this.getSelectedStreetHouses().map((home, index) => (
              <House type={home.type} description={home.description}
                imageUrl={home.imageUrl} price={home.price} id={index} key={index}
                houseHoverEvent={this.houseHoverEvent.bind(this)} />
            ))
          }
        </div>
        <div className="houseDetails">
          {
            this.state.streets.length > 0
              ?
              <HouseDetails type={this.getHouseDetails().type} description={this.getHouseDetails().description}
                imageUrl={this.getHouseDetails().imageUrl} price={this.getHouseDetails().price} /> : null
          }
        </div>
      </div>
    );
  };
};

export default App;