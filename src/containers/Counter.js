import React, { Component } from 'react';
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Count from '../components/Count'
import CountHeader from '../components/CountHeader'
import { fetchCount, increment, decrement } from '../actions/counter'

class CounterContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ''
        }
    }

    componentDidMount() {
        // fetch the count
        this.props.dispatch(fetchCount())
    }

    _increment = () => {
        // we need to dispacth an action
        // I need the action
        this.props.dispatch(increment())
    }

    _decrement = () => {
        // we need to dispacth an action
        this.props.dispatch(decrement())
    }

    _handleSubmit = (event) => {
        event.preventDefault()
        const user = {
            name: this.state.name
        }
        // Here we can dispatch an action
        // this.props.dispatch(createUser(user))
        this.setState({ error: null, name: ''})

    }

    _handleChange = (event) => {
        // We can do validations
        if (event.target.value.length > 6) {
            this.setState({ error: 'You input it too long'})
        } else {
            this.setState({ error: null, name: event.target.value})
        }
    }

  render() {
    return (
        <div>
            <CountHeader/>
            <Count count={this.props.count}/>
            <button onClick={this._increment}>Increment: +</button>
            <button onClick={this._decrement}>Decrement: -</button>
            <button onClick={() => this.props.dispatch(push('/'))}>Click to go to Home</button>
            { this.state.error ? <p style={{color: 'red'}}>{this.state.error}</p> : null }
            <form onSubmit={this._handleSubmit}>
                <label>
                    Name:
                    <input name="name" type="text" value={this.state.name} onChange={this._handleChange}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        count: state.counter.count
    }
}

export default connect(mapStateToProps)(CounterContainer);
