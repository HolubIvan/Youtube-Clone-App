import React from 'react';


class SearchBar extends React.Component{

    constructor(props){
        super(props);
        this.state={
            term: ''
        }
    }

    onFormSubmit = (e)=>{
        e.preventDefault();
        

        // callback from parent
    }

    onInputChange = (e) => {
        this.setState({term: e.target.value})
    }

    render(){
        return(
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label htmlFor="input-search">Video Search</label>
                        <input value={this.state.term} id="input-search" type="text" onChange={this.onInputChange}></input>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;