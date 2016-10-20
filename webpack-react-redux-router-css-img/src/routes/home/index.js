import React from 'react';
import { connect } from 'react-redux';

// ------------------------------------------------

import { decrease, increase } from './actions';
import cx from "./styles.scss";
import img from "../../../assets/img/img.jpg"

// ------------------------------------------------

class Home extends React.Component {
    constructor() {
        super();
        this.doDecrease = this.doDecrease.bind(this);
        this.doIncrease = this.doIncrease.bind(this);
    }

    doDecrease() {
        this.props.dispatch(decrease());
    }

    doIncrease() {
        this.props.dispatch(increase());
    }

    render() {
        const { home } = this.props;
        
        return (
            <div>
                <h1 className={cx('title')}>
                    Webpack - React - Redux - Router
                </h1>
                <img src={img}/>
                <h2>Value: {home}</h2>
                <button onClick={this.doDecrease}>DECREASE</button>
                <button onClick={this.doIncrease}>INCREASE</button>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return { home: store.home }
}

export default connect(mapStateToProps)(Home);