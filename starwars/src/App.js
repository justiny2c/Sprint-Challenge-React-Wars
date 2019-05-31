import React, { Component } from 'react';
import './App.css';


const starwarsChars = [
  {
    name: "Luke Skywalker",
    species: "human",
    weapon: "Lightsaber",
    img: "https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_5a38c454_461eebf5.jpeg?region=0%2C0%2C1536%2C864"
  },
  {
    name: "Han Solo",
    species: "human",
    weapon: "Blaster Pistol",
    img: "https://lumiere-a.akamaihd.net/v1/images/han-solo-main_a4c8ff79.jpeg?region=0%2C0%2C1920%2C1080&width=1536"
  },
  {
    name: "Jar Jar Binks",
    species: "Gungan",
    weapon: "Energy Ball",
    img: "https://lumiere-a.akamaihd.net/v1/images/databank_jarjarbinks_01_169_c70767ab.jpeg?region=0%2C0%2C1560%2C878&width=1536"
  },
  {
    name: "Chewbacca",
    species: "Wookiee",
    weapon: "Bowcaster",
    img:"https://lumiere-a.akamaihd.net/v1/images/solo-chewbacca-main_80768fa8.jpeg?region=8%2C0%2C1543%2C868&width=1536"
  }
  ]

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
      </div>
    );
  }
}

export default App;
