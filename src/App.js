// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Howdy, Eisen!</p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



// ---------------------------------
// // THIS IS A SAMPLE REACT CLASS COMPONENTS
// ---------------------------------
// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';


// class App extends Component {
//   // Adding a constructor for the STATE
//   constructor() {
//     super(); // it calls the constructor into component class

//     this.state = {
//       string: 'Howdy, Eisen!'
//     };
//   }

//   // This is a sample Class Component structure
//   render() {
//     return (
//       <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>{this.state.string}</p>
//         <button onClick={() => this.setState({ string: 'Howdy, Hohohower!' })}>Change Text</button>
//       </header>
//     </div>
//     );
//   }
// }

// export default App;



// // ---------------------------------
// // THIS IS A SAMPLE REACT FETCHING CONTENT
// // ---------------------------------
// import React, { Component } from 'react';
// import './App.css';


// class App extends Component {
//   // Adding a constructor for the STATE
//   constructor() {
//     super(); // it calls the constructor into component class

//     this.state = {
//       monsters: []
//     };
//   }

//   // fetching content/data using JSON format
//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(users => this.setState({monsters: users}))
//   }

//   // This is a sample Class Component structure
//   render() {
//     return (
//       <div className="App">
//         {
//           this.state.monsters.map( monster =>  <h1 key={monster.id}>{monster.name}</h1>)
//         }
      
//       </div>
//     );
//   }
// }

// export default App;



// // ---------------------------------
// // THIS IS A SAMPLE REACT SEARCHFIELD STATE Example #1
// // ---------------------------------
// import React, { Component } from 'react';
// import './App.css';

// import { CardList } from './components/card-list/card-list.component';

// class App extends Component {
//   // Adding a constructor for the STATE
//   constructor() {
//     super(); // it calls the constructor into component class

//     this.state = {
//       monsters: [],
//       searchField: ''
//     };
//   }

//   // fetching content/data using JSON format
//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(users => this.setState({ monsters: users }))
//   }

//   // This is a sample Class Component structure
//   render() {
//     return (
//       <div className="App">
//         <input 
//           type='Search' 
//           placeholder='Search Monsters' 
//           onChange={e => { this.setState({ searchField: e.target.value });
//           console.log(this.state);
//         } }
//         />
//         <CardList monsters={this.state.monsters} />
//       </div>
//     );
//   }
// }

// export default App;


// // ---------------------------------
// // THIS IS A SAMPLE REACT SEARCHFIELD STATE Example #2
// // ---------------------------------
// import React, { Component } from 'react';
// import './App.css';

// import { CardList } from './components/card-list/card-list.component';

// class App extends Component {
//   // Adding a constructor for the STATE
//   constructor() {
//     super(); // it calls the constructor into component class

//     this.state = {
//       monsters: [],
//       searchField: ''
//     };
//   }

//   // fetching content/data using JSON format
//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(users => this.setState({ monsters: users }))
//   }

//   // This is a sample Class Component structure
//   render() {
//     return (
//       <div className='App'>
//         <input 
//           type='Search' 
//           placeholder='Search Monsters' 
//           onChange={e => this.setState({ searchField: e.target.value })}
//         />
//         <CardList monsters={this.state.monsters} />
//       </div>
//     );
//   }
// }

// export default App;





// // ---------------------------------
// // THIS IS A SAMPLE REACT FILTERING STATE Example #1
// // ---------------------------------
// import React, { Component } from 'react';
// import './App.css';

// import { CardList } from './components/card-list/card-list.component';

// class App extends Component {
//   // Adding a constructor for the STATE
//   constructor() {
//     super(); // it calls the constructor into component class

//     this.state = {
//       monsters: [],
//       searchField: ''
//     };
//   }

//   // fetching content/data using JSON format
//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(users => this.setState({ monsters: users }))
//   }

//   // This is a sample Class Component structure
//   render() {
//     // destructuring - pull propeties off of an object then set as a constant as we put inside the array
//     const { monsters, searchField } = this.state;
//     // this  is a shortcut to = const monsters = this.state.monsters; const searchField = this.state.searchField;
//     const filteredMonsters = monsters.filter(monster => 
//         monster.name.toLowerCase().includes(searchField.toLowerCase())
//       );

//     return (
//       <div className='App'>
//         <input 
//           type='Search' 
//           placeholder='Search Monsters' 
//           onChange={e => this.setState({ searchField: e.target.value })}
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

// export default App;


// // ---------------------------------
// // THIS IS A SAMPLE REACT SEARCHBOX COMPONENT Example #1
// // ---------------------------------
// import React, { Component } from 'react';
// import './App.css';

// // importing searchbox components
// import { SearchBox } from './components/search-box/search-box.component';

// import { CardList } from './components/card-list/card-list.component';

// class App extends Component {
//   // Adding a constructor for the STATE
//   constructor() {
//     super(); // it calls the constructor into component class

//     this.state = {
//       monsters: [],
//       searchField: ''
//     };

//     // this is the code for the handleChange function
//     this.handleChange = this.handleChange.bind(this);
//   }

//   // fetching content/data using JSON format
//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(users => this.setState({ monsters: users }))
//   }

//   // this is a short format for the handleChange function
//   handleChange(e) {
//     this.setState({ searchField: e.target.value });
//   }

//   // This is a sample Class Component structure
//   render() {
//     // destructuring - pull propeties off of an object then set as a constant as we put inside the array
//     const { monsters, searchField } = this.state;
//     // this  is a shortcut to = const monsters = this.state.monsters; const searchField = this.state.searchField;
//     const filteredMonsters = monsters.filter(monster => 
//         monster.name.toLowerCase().includes(searchField.toLowerCase())
//       );

//     return (
//       <div className='App'>
//         <SearchBox
//           placeholder='Search Monsters'
//           handleChange={this.handleChange}
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

// export default App;



// ---------------------------------
// THIS IS A SAMPLE REACT DEPLOYING OUR APP Example #1
// ---------------------------------
import React, { Component } from 'react';
import './App.css';

// importing searchbox components
import { SearchBox } from './components/search-box/search-box.component';

import { CardList } from './components/card-list/card-list.component';

class App extends Component {
  // Adding a constructor for the STATE
  constructor() {
    super(); // it calls the constructor into component class

    this.state = {
      monsters: [],
      searchField: ''
    };

    // this is the code for the handleChange function
    this.handleChange = this.handleChange.bind(this);
  }

  // fetching content/data using JSON format
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }))
  }

  // this is a short format for the handleChange function
  handleChange(e) {
    this.setState({ searchField: e.target.value });
  }

  // This is a sample Class Component structure
  render() {
    // destructuring - pull propeties off of an object then set as a constant as we put inside the array
    const { monsters, searchField } = this.state;
    // this  is a shortcut to = const monsters = this.state.monsters; const searchField = this.state.searchField;
    const filteredMonsters = monsters.filter(monster => 
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      );

    return (
      <div className='App'>
        <h1> Monsters Database </h1>
        <SearchBox
          placeholder='Search Monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;