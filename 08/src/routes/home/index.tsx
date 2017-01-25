import * as React from "react";
import { connect } from "react-redux";

// ------------------------------------------------

import { decrease, fetchSuccess, increase } from "./actions";
import { IState } from "./reducer";
import * as styles from "./styles.scss";
const img = require("../../../assets/img/img.jpg");

// ------------------------------------------------

interface IHomeState extends IState {
    doDecrease: () => void;
    doIncrease: () => void;
    fetchSuccess: () => void;
}

const mapStateToProps = (store: any) => {
    return store.home;
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        doDecrease: () => {
            dispatch(decrease());
        },
        doIncrease: () => {
            dispatch(increase());
        },
        fetchSuccess: () => {
            dispatch(fetchSuccess());
        },
    };
};

// ------------------------------------------------

class Home extends React.Component<IHomeState, void> {
    public componentWillMount() {
        this.props.fetchSuccess();
        return;
    }

    public render() {
        const { counter, json } = this.props;

        return (
            <div>
                <h1 className={styles.title}>React</h1>
                <img src={img}/>
                <h2>Counter: {counter}</h2>
                <h3>JSON: {JSON.stringify(json)}</h3>
                <button onClick={this.props.doDecrease}>DECREASE</button>
                <button onClick={this.props.doIncrease}>INCREASE</button>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
