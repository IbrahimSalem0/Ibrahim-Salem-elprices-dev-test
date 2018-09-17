import React, { Component } from 'react';
import './App.css';
import SearchInput from './searchComponent/SearchInput'
class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="header">
                    <h1 className="title">Welcome to ElPrice</h1>
                </header>
                <div className="intro">
                    <SearchInput />
                </div>
            </div>
        );
    }
}

export default App;
