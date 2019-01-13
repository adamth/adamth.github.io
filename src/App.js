import React, { Component } from "react";
import "./App.scss";
import Sider from "./views/Sider";
import Content from "./views/Content";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Sider />
                <Content />
            </div>
        );
    }
}

export default App;
