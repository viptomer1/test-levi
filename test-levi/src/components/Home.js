import React, { Component } from 'react';
import ProductItem from "./ProductItem";
import './home.css';
import constants from '../res/constants.js';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [], currentProducts: [], currentPage: null ,slideIndex:0, totalPages: null, pageLimit : constants.PAGE_LIMIT
    };
  }
  
  componentDidMount() {
    fetch( constants.URL_PRODUCT_LIST )
    .then(res => res.json())
    .then((data) => { console.log('Res ---> ',data);
      this.setState({ products: data.products, totalPages: Math.ceil(data.products.length/ this.state.pageLimit), 
        currentPage:1})
    })
    .catch( console.log)
    //mock data 
    this.setState({ products: constants.allMockProducts, totalPages: Math.ceil(constants.allMockProducts.length/ this.state.pageLimit), currentPage:1})
  }

  //method for change page
  onPageChanged(n) {
    const pageLimit = this.state.pageLimit;
    let slideIndex= this.state.slideIndex;
    if (n > this.state.totalPages) {slideIndex = 1}
    if (n < 1) {slideIndex  = this.state.totalPages}
    const offset = (slideIndex - 1) * pageLimit;
    const currentProducts = this.state.products.slice(offset, offset + pageLimit);  
    console.log('<<<<<<  Home page number >>>> ---> ', slideIndex );

    let pageItems = currentProducts.map((product, index) => (
      <ProductItem
        context = {this.props}
        product={product}
        key={index}
      />
    ));
    this.setState({ pageItems, slideIndex});
  }

  //Method for sliding pages right/left
  movePages(n) { 
    this.onPageChanged(this.state.slideIndex  += n);
  }
  //Method to render first time element for 0th index
  renderFirst(){
    let slideIndex= this.state.slideIndex;
    slideIndex = slideIndex+1;
    let currentProducts = this.state.products.slice(0,  this.state.pageLimit);  
    console.log('<<<<<<  Home page first==== >>>> ---> ', slideIndex );
    let pageItems = currentProducts.map((product, index) => (
        <ProductItem
          context = {this.props}
          product={product}
          key={index}
        />
      ));
    this.setState({ pageItems, slideIndex});
  }

  render() {
    //let products = this.state.products;
    const { products, pageItems,  currentPage, totalPages ,slideIndex} = this.state;
    //let products = constants.allMockProducts;

    //rendering
    return (
      
    <div>

          
    <div className="App-header" style={{ flex: 1, alignItems: 'center' }}
      >Dishwashers ({products.length})</div>
      <br />

      <div className="container">
        { currentPage && (
                <span className="current-page d-inline-block h-100 pl-4 text-secondary">
                  Page <span className="font-weight-bold">{ slideIndex }</span> / <span className="font-weight-bold">{ totalPages }</span>
                </span>
              ) }
        <div className="cards">
       
          {products && products.length ? (
            pageItems ? pageItems: this.renderFirst()
          ) : (
            <div className="column">
              <span className="title has-text-grey-light">
                No products found!
              </span>
            </div>
          )}
        </div>

        <button className="prev1 mdl-button" style={{borderWidth:'0px', float:'left'}} onClick={() => this.movePages(-1)}>
          <i className="fa fa-angle-left" style={{fontSize:'30px',color:'grey'}}></i>
        </button>
        <button className="next1 mdl-button" style={{borderWidth:'0px', float:'right'}} onClick={() => this.movePages(1)}>
          <i className="fa fa-angle-right" style={{fontSize:'30px',color:'grey'}}></i>
        </button>

      </div>
    
      </div>
    );
  }
}

export default Home;