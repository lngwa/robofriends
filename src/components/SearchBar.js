import React, { Component } from 'react';


class SearchBar extends Component{
	render(){
		return (

			<div className="b--green bg-lightest-blue pa3 ba">
				<input type="search" placeholder="Search Robots" onChange={this.props.search} className="input-reset ba b--black-20 pa2 mb2 db w-100 br2" />
			</div>

			);

	}
}

export default SearchBar;