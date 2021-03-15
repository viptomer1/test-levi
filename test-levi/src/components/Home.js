import React, { Component } from 'react';
import ProductItem from "./ProductItem";
import './home.css';
import constants from '../res/constants.js';
import productsMockData from '../test/products.json';

//HOme class for showing product list
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [], apiInProgress: "init", 
      currentProducts: [], currentPage: null,
      slideIndex: null, 
      totalPages: null,
      pageLimit : constants.PAGE_LIMIT
    };
  }
  
  componentDidMount() {
    fetch( constants.URL_PRODUCT_LIST )
    .then(res => res.json())
    .then((data) => { console.log('Res ---> ',data);
      this.setState({ products: data.products, 
        totalPages: Math.ceil(data.products.length/ this.state.pageLimit), 
        currentPage:1, 
        apiInProgress : 'complete'})
    })
    .catch((error) =>{
        //If fails then show MOCK dummy data just for flow
        console.log('Error in API products');
        let products = productsMockData.products; //constants.allMockProducts;//
        this.setState({ products: products, totalPages: Math.ceil(products.length/ this.state.pageLimit), currentPage:1, apiInProgress : 'complete' });
      }
    )

  }

  //method for change page on prev/next button
  onPageChanged(n) { 
    const pageLimit = this.state.pageLimit;
    let slideIndex= this.state.slideIndex;
    if (n > this.state.totalPages) {slideIndex = 1}
    if (n < 1) {slideIndex  = this.state.totalPages}
    const offset = (slideIndex - 1) * pageLimit;
    const currentProducts = this.state.products.slice(offset, offset + pageLimit);  
    console.log('<<<<<<  Home page number >>>> ---> '+slideIndex, currentProducts );
    let pageItems=  this.createPageItems(currentProducts); this.setState({ pageItems, slideIndex});
  }

  //Method for sliding pages right/left
  movePages(n) { 
    this.onPageChanged(this.state.slideIndex  += n);
  }
  
  //Method to render first time products for first page
  renderFirst(){
    let slideIndex= this.state.slideIndex;
    slideIndex = slideIndex+1;
    let currentProducts = this.state.products.slice(0,  this.state.pageLimit);  
    //console.log('<<<<<<  Home page first==== >>>> ---> ', slideIndex );
    let pageItems=  this.createPageItems(currentProducts);
    this.state.slideIndex = slideIndex;
    return pageItems;
  }

  createPageItems(items){
    if(items && items.length){
      let list= items.map((product, index) => (
        <ProductItem
          context = {this.props}
          product={product}
          key={index}
        />
      ));
      return list;
    } else {
      return <div className="column">
        <span className="title has-text-grey-light">
          No products found!
        </span>
      </div>
    }
  }

  getProductDetails(){
    if(this.state.apiInProgress === 'init'){
        return "loading ...";
    }
    else if(this.state.products.length >0){
      //first time showing page at 0 index
      if(this.state.slideIndex) return this.state.pageItems;
         return this.renderFirst();
    }else{
      //If nothing comes back then- No page items
      return this.createPageItems(); 
    }
  }

  render() {
    const { products, pageItems,  currentPage, totalPages ,slideIndex} = this.state;

    //rendering
    return (   
      <div>
            
      <div className="App-header" style={{ flex: 1, alignItems: 'center' }}
        >Dishwashers ({products.length})</div>
        <br />
        <div className="container">
            {/* THIS BELOE {code} should BE PLACED IN ANOTHER FUNCTION TO LOAD FIRST TIME ON API SUCCESS*/}
            { this.state.apiInProgress === 'complete' && currentPage && (
                  <span className="current-page d-inline-block h-100 pl-4 text-secondary">
                    Page <span className="font-weight-bold">{ slideIndex ? slideIndex : '1'}</span> / <span className="font-weight-bold">{ totalPages }</span>
                  </span>
            )}
          <div className="cards">
            
            {this.getProductDetails()}      
            
          </div>
          {/* THIS BELOE {code} should BE PLACED IN ANOTHER(above) FUNCTION TO LOAD FIRST TIME ON API SUCCESS . Then here would be only one method call*/}
          { this.state.apiInProgress === 'complete' && (
            <div>
              <button className="prev1 mdl-button" style={{borderWidth:'0px', float:'left'}} onClick={() => this.movePages(-1)}>
                <i className="fa fa-angle-left" style={{fontSize:'30px',color:'grey'}}></i>
              </button>
              <button className="next1 mdl-button" style={{borderWidth:'0px', float:'right'}} onClick={() => this.movePages(1)}>
                <i className="fa fa-angle-right" style={{fontSize:'30px',color:'grey'}}></i>
              </button>
           </div>
          )}

        </div>
      
        </div>
    );
  }
}

export default Home;