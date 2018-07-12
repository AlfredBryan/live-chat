import React, { Component } from 'react';
import './Form.css';

class UsernameForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
        }



    }
    onChange = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.state.username)
    }
    render() {
        return (
            <div className="center">
                <div className="card">
                <h2>What is your username</h2>
                <form onSubmit={this.onSubmit}>
                    <input
                        className="form-item"
                        type="text"
                        placeholder="Enter Username"
                        onChange={this.onChange}
                    />
                    <input 
                    type="submit" 
                    className="form-submit"
                    />
                </form>
                </div>
            </div>
        )
    }
}

export default UsernameForm;