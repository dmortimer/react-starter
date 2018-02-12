import React from 'react';

class SearchBar extends React.Component {
    constructor(props){
        super(props);

        this.state = { term: ''};
    }

    onInputChange = (e) => { this.setState({term: e.target.value}) };

    render() {
    return(
            <div>
                <input 
                    value = {this.state.term}
                    onChange={this.onInputChange}
                />
            </div>
    );
    }

}

export default SearchBar;
