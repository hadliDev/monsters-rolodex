// import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";

import { CardList } from "./components/card-list/card-list.component";
import {SearchBox} from './components/search-box/search-box.component'
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filtersMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );

    return (
      <div className="App">
        <h1> Mosters Rolodex</h1>
        <SearchBox 
          placeholder='search monsters'
          handleChange={e=>this.setState({searchField:e.target.value})}
        />
        <CardList monsters={filtersMonsters} />
      </div>
    );
  }
}
// function App() {
//   return (
// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//      Nur Hadli
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>
//   );
// }

export default App;
