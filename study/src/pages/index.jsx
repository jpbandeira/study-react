import React, { Component } from "react";
import api from "../Services/api";
import { Link } from 'react-router-dom';

import './style-pages.css'

export default class Main extends Component {

    state = {
        products: [],
        productInfo: {},
        page: 1,
    };

    // É executado assim que o componente é mostrado em tela
    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);
        
        const { docs, ...productInfo } = response.data;
        
        this.setState({ products: docs, productInfo, page });
    };

    prevPage = () => {
        const { page, productInfo } = this.state;
        if(page === 1) return;
        //alert(productInfo.pages);
        const pageNumber = page - 1;
        this.loadProducts(pageNumber);
    }

    nextPage = () => {
        const { page, productInfo } = this.state;
        if(page === productInfo.pages) return;
        //alert(productInfo.pages);
        const pageNumber = page + 1;
        this.loadProducts(pageNumber);
    };

    render() {

        const { products, page, productInfo } = this.state;

        return (
            <div className="listaDeProdutos">
                {products.map(product => (
                    <article key={product._id}>
                
                    <strong>{product.title}</strong>
                    <p>{product.description}</p>

                    <Link to={`/products/${product._id}`}>Acessar detalhes</Link>
                    
                    </article>
                    
                ))}

                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page === productInfo.pages} onClick={this.nextPage}>Posterior</button>
                </div>
            </div>
        );
    }
}