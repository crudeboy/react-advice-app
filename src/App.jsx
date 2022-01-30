import React from "react";
import axios from 'axios';

import './App.css';

class App extends React.Component  {
    state = {
        advice: ''
    }

    componentDidMount(){
        console.log('component did mout');
        this.fetchAdvice()
    }

    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
        .then((result) => {
            const { advice } = result.data.slip
            this.setState({advice})
            console.log(advice);
        }).catch((error) => {
            console.log(error);
        });
   }

    render(){
        const { advice } = this.state;
        return (
            <div className="app">
                <div className="card">
                    <h1 className="heading">
                        {advice}
                    </h1>
                    <button className="button" onClick={this.fetchAdvice}>
                        <span>GIVE ME ADVICE</span>
                    </button>
                </div>      
            </div>
           
        )
    }
}

export default App;