import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBar from '../components/SearchBar';
import Scroll from '../components/Scroll';
// import {robots} from './robots';
import './App.css'

class App extends Component {

	constructor(){
		super();
		this.state = {
			myRobots: [],
			searchKey:""
		}
	}

	componentDidMount(){
		fetch("http://jsonplaceholder.typicode.com/users")
			.then(response => response.json())
			.then(user => {this.setState({myRobots:user})} )			
	}

	onSearchChange = (event) => {
			this.setState({searchKey:event.target.value});	
	}	

	render(){
		const filteredRobots = this.state.myRobots.filter(robot => {return robot.name.toLowerCase().includes(this.state.searchKey.toLowerCase())});
		return !filteredRobots.length ? 
					<h1>Loading ...</h1>
				:(
					<div className="tc pa2 ma2"> 
					<h1 className="f1">RoboFriends</h1>
					<SearchBar  search={this.onSearchChange} />
					<hr />
					<Scroll>
						<CardList robots = {filteredRobots}/> 
					</Scroll>
					</div>
				);
	}
}

export default App;