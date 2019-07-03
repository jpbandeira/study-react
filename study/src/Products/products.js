import React, { Component } from "react";
import api from "../Services/api";
import './style-products.css';

export default class Product extends Component{
    state = {
        product: {},
    };

    async componentDidMount(){
        const { id } = this.props.match.params;

        const response = await api.get(`/products/${id}`);

        this.setState({ product: response.data });
    }
    
    render(){
        const { product } = this.state;
        console.log(product.title)
        return(
            <div className="product-info">
                <h1>{product.title}</h1>
                <p>{product.description}</p>

                <a href={product.url}>URL: {product.url}</a>
            </div>            
        );
    }
};