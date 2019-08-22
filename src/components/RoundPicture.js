import React, { Component } from "react";
import "./RoundPicture.scss";

export default class RoundPicture extends Component {
    render() {
        const { imgSrc } = this.props;
        return (
            <img
                className="pic-round"
                src={imgSrc}
                alt="me"
            />
        );
    }
}
