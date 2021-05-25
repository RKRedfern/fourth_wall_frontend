import React from 'react';

class Search extends React.Component {

    state = {
        searchInput: ''
    }

    searchGhosts = (e) => {
        this.setState({ searchInput: e.target.value })
    }

    searchSubmit = () => {
        this.props.search(this.state.searchInput)
    }

    render(){

        return(
            <div onChange={this.searchGhosts} className="ghost search">
                <input placeholder="Search Ghosts"/>
                <button type="submit" onClick={this.searchSubmit}> Search </button>
            </div>
        )
    }

}

export default Search;