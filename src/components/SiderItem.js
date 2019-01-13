import React, { Component } from "react";
import "./SiderItem.scss";

export default class SiderItem extends Component {
    render() {
        const { heading, children } = this.props;
        return (
            <div className="sider-item">
                <h3>{heading}</h3>
                {children}
            </div>
        );
    }
}
