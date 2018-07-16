import React, { Component } from "react";

export default class ZoomContainer extends Component {
    render() {
        return (
            <div className="zoomBox">
                <div>
                    <button
                        onClick={function() {
                            emitter.emit("zoomIn");
                        }}
                        className="btn zoomIn"
                    >
                        <span className="fa fa-plus" />
                    </button>
                </div>
                <div>
                    <button
                        onClick={function() {
                            emitter.emit("resetZoom");
                        }}
                        className="btn"
                    >
                        <span className="fa fa-ban" style={{ width: 11 }} />
                    </button>
                </div>
                <div>
                    <button
                        onClick={function() {
                            emitter.emit("zoomOut");
                        }}
                        className="btn zoomOut"
                    >
                        <span className="fa fa-minus" />
                    </button>
                </div>
            </div>
        );
    }
}
