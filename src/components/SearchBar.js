import React, { Component, PropTypes } from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            term: ''
        };
    }

    onSearchChange(term){
        this.setState({term});
        this.props.onKeyChange(term);
    }

    render() {
        return (
        <div className="top row">
            <div className="col-md-1 col-lg-1">
                <img src="logo.svg" className="img-responsive" alt=""/>
            </div>
		  <div className="col-md-10 col-lg-10 form-group">
		    <input onChange={ e => this.onSearchChange(e.target.value) } type="email" className="form-control" id="" placeholder="Search Here" />
		  </div>
        </div>
        );
    }
}

export default SearchBar;
