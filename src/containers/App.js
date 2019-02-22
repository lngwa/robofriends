import React, {Component} from 'react';
import { connect } from 'react-redux';
import { searchRobots } from '../reducers'
import CardList from '../components/CardList';
import SearchBar from '../components/SearchBar';
import Scroll from '../components/Scroll';
// import {robots} from './robots';
import './App.css'

import { setSearchField } from '../actions'

const mapStateToProps = (state) => {
	return {
		searchField: state.searchField
	}
}

const mapDispatchToProps = (dispatch) => {
		return {
			onSearchChange: (event) => dispatch(setSearchField(event.target.value))
		}	
}

class App extends Component {

	constructor(){
		super();
		this.state = {
			myRobots: []
		}
	}

	componentDidMount(){
		console.log(this);
		fetch("http://jsonplaceholder.typicode.com/users")
			.then(response => response.json())
			.then(user => {this.setState({myRobots:user})} )			
	}

	render(){
		const { searchField, onSearchChange } = this.props;
		const filteredRobots = this.state.myRobots.filter(robot => {return robot.name.toLowerCase().includes(searchField.toLowerCase())});
		const content =  !filteredRobots.length ? <h1>Loading ...</h1> : <CardList robots = {filteredRobots}/>

		return (
					<div className="tc pa2 ma2"> 
					<h1 className="f1">RoboFriends</h1>
					<SearchBar  search={onSearchChange} />
					<hr />
					<Scroll>
						{ content }
					</Scroll>
					</div>
				);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);