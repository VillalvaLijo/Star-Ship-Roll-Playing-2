import Component from 'react';

class Start_Form extends Component{
    constructor(props){
        super(props);
        this.state = {num_of_players: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({num_of_players: event.target.value});
    }

    handleSUbmit(event){
        console.log("Number of players was submited: ", this.state.num_of_players);
        event.preventDefault();
    }

    render() {
        return(
            <form onSubmit = {this.handleSubmit}>
                <label>
                    Number of Players:
                
                <input type="number" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

export default Start_Form;