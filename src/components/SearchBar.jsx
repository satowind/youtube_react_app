import React from 'react';

class SearchBar extends React.Component {
    state = { term:'' };

    onInputChange=(event)=>{

        this.setState({term: event.target.value})

    }

    onFormSubmit=(event)=>{

        event.preventDefault();
        this.props.onFormSubmit(this.state.term)


    }

    render() { 
        return ( 
 
            <div className="ui pointing menu">
            <a href='https://google.com' className="item">
                Home
            </a>
            <a href='https://google.com' className="item">
               About
            </a>
        
            <div className="right menu">
                <div className="item">
                    <div className="ui transparent icon input">
                        <form  onSubmit={this.onFormSubmit} className="ui form">
                            <input type="text" value={this.state.term} onChange={this.onInputChange} placeholder='Search Video Here'/>
                          
                        </form>
                    </div>
                </div>
            </div>
            </div>
         );
    }
}
 
export default SearchBar;