import React, { Component } from "react";
import "./RoundPicture.scss";

export default class RoundPicture extends Component {
    render() {
        const { imgSrc, width, height } = this.props;
        return (
            <img
                className="pic-round"
                width={width}
                height={height}
                src={imgSrc}
                alt="me"
            />
        );
    }
}
