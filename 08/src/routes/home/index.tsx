import * as React from "react";
import { connect } from "react-redux";

// ------------------------------------------------

import * as repository from "../../repositories/crud";
import { decrease, increase } from "./actions";
import * as styles from "./styles.scss";
const img = require("../../../assets/img/img.jpg");

// ------------------------------------------------

class Home extends React.Component<any, any> {
    constructor() {
        super();
        this.doDecrease = this.doDecrease.bind(this);
        this.doIncrease = this.doIncrease.bind(this);

        const promise = repository.get("");
        console.log("promise", promise);
        promise.then((response) => {
            console.log("response", response);
        });
    }

    public render() {
        const { home } = this.props;

        return (
            <div>
                <h1 className={styles.title}>
                    Webpack - React - Redux - Router
                </h1>
                <img src={img}/>
                <h2>Value: {home}</h2>
                <button onClick={this.doDecrease}>DECREASE</button>
                <button onClick={this.doIncrease}>INCREASE</button>
            </div>
        );
    }

    private doDecrease() {
        this.props.dispatch(decrease());
    }

    private doIncrease() {
        this.props.dispatch(increase());
    }
}

const mapStateToProps = (store: any) => {
    return { home: store.home };
};

export default connect(mapStateToProps)(Home);
