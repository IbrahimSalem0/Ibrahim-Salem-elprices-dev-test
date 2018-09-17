import React from 'react';
import { ListItem } from './Item';
import axios from 'axios';
import fetchByName from '../api/main'
export default class SearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Products: [],
        };
        this.onChange = this.onChange.bind(this);
    }
    onChange (i) {
        this.props.fetchByName(i).then(products => {

            this.setState({ productsList: products.payload.data });
          });
    }


    render() {
        return (
            <div>
                <div >
                    <input
                        type="text"
                        placeholder="search for products"
                        ref={input => this.keyword = input}
                        onChange={event => this.onChange(event.target.value)}
                        style={{
                            borderWidth: 1,
                            height: '15%',
                            boxShadow: 'none',
                            width: '90%',
                            display: 'block',
                            padding: '1%',
                            margin: 'auto'
                        }}
                    />
                </div>
                <div>
                    {this.state.Products.length ? this.state.Products.map(this.eachItem) : this.state.message}
                </div>
            </div>
        );
    }
}
