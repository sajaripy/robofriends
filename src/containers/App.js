import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response => Response.json())
    .then(users => {this.setState({robots: users })});
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }
  render() {
    const { robots, searchfield } = this.state;
    const fileredRobots = robots.filter(robot => {
      // return robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase()) || robot.email.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase())robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase())
      return `${robot.name} ${robot.email}`.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase())
    })
    if (!robots.length) {
      return <h1>Loading</h1>
    }
    else {
      return (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <ErrorBoundry>
              <CardList robots={fileredRobots} />

            </ErrorBoundry>

          </Scroll>
    
        </div>
      );
    }
  }
}

export default App;