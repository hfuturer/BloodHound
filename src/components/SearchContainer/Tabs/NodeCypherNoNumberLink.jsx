import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

export default class NodeCypherNoNumberLink extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let c = function() {
            emitter.emit(
                "query",
                this.props.query,
                { name: this.props.target },
                this.props.start,
                this.props.end
            );
        }.bind(this);

        return (
            <Fragment>
                <dt>
                    <a href="#" onClick={c}>
                        {this.props.property}
                    </a>
                </dt>
                <dd />
            </Fragment>
        );
    }
}

NodeCypherNoNumberLink.propTypes = {
    target: PropTypes.string.isRequired,
    property: PropTypes.string.isRequired,
    query: PropTypes.string.isRequired,
    start: PropTypes.string,
    end: PropTypes.string
};
