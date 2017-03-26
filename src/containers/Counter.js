import React, { Component } from 'react';
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Count from '../components/Count'
import CountHeader from '../components/CountHeader'
import { fetchCount, increment, decrement } from '../actions/counter'

class CounterContainer extends Component {

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

  render() {
    return (
        <div>
            <CountHeader/>
            <Count count={this.props.count}/>
            <button onClick={this._increment}>Increment: +</button>
            <button onClick={this._decrement}>Decrement: -</button>
            <button onClick={() => this.props.dispatch(push('/'))}>Click to go to Home</button>
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
