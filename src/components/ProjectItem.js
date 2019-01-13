import React, { Component } from "react";
import "./ProjectItem.scss";

export default class ProjectItem extends Component {
    render() {
        const { product, backend, frontend, database, children } = this.props;
        return (
            <div className="project-item">
                {product && (
                    <p>
                        <b>Product: </b>
                        {product}
                    </p>
                )}
                {backend && (
                    <p>
                        <b>Backend: </b>
                        {backend}
                    </p>
                )}
                {frontend && (
                    <p>
                        <b>Frontend: </b>
                        {frontend}
                    </p>
                )}
                {database && (
                    <p>
                        <b>Database: </b>
                        {database}
                    </p>
                )}
                <p className="project-detail">{children}</p>
            </div>
        );
    }
}
