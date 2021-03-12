import React, { Component } from 'react';
import ProductItem from "./ProductItem";
import './home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
  
  componentDidMount() {
    fetch('https://api.johnlewis.com/search/api/rest/v2/catalog/products/search/keyword?q=dishwasher&key=AIzaSyDD_6O5gUgC4tRW5f9kxC0_76XRC8W7_mI')
    .then(res => res.json())
    .then((data) => { console.log('Res ---> ',data);
      this.setState({ products: data.products })
    })
    .catch(console.log)
  }


  render() {
    let products = this.state.products;
    // [
    //   {
    //     "id": "hdmdu0t80yjkfqselfc",
    //     "name": "shoes",
    //     "img": "https://johnlewis.scene7.com/is/image/JohnLewis/238008957?", 
    //     "stock": 10,
    //     "price": 399.99,
    //     "shortDesc": "Nulla facilisi. Curabitur at lacus ac velit ornare lobortis.",
    //     "description": "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam."
    //   },
    //   {
    //     "id": "3dc7fiyzlfmkfqseqam",
    //     "name": "bags",
    //     "stock": 20,
    //     "img": "https://johnlewis.scene7.com/is/image/JohnLewis/238008957?", 
        
    //     "price": 299.99,
    //     "shortDesc": "Nulla facilisi. Curabitur at lacus ac velit ornare lobortis.",
    //     "description": "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam."
    //   },
    //   {
    //     "id": "aoe8wvdxvrkfqsew67",
    //     "name": "shirts",
    //     "stock": 15,
    //     "img": "https://johnlewis.scene7.com/is/image/JohnLewis/238008957?", 
        
    //     "price": 149.99,
    //     "shortDesc": "Nulla facilisi. Curabitur at lacus ac velit ornare lobortis.",
    //     "description": "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam."
    //   },
    //   {
    //     "id": "bmfrurdkswtkfqsf15j",
    //     "name": "shorts",
    //     "stock": 0,
    //     "img": "https://johnlewis.scene7.com/is/image/JohnLewis/238008957?", 
        
    //     "price": 109.99,
    //     "shortDesc": "Nulla facilisi. Curabitur at lacus ac velit ornare lobortis.",
    //     "description": "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam."
    //   }
    // ]; 



    return (
      
    <div>

          
    <div className="App-header" style={{ flex: 1, alignItems: 'center' }}
      >Dishwashers ({products.length})</div>
      <br />

      <div className="container">
        <div className="cards">
          {products && products.length ? (
            products.map((product, index) => (
              <ProductItem
                context = {this.props}
                product={product}
                key={index}
              />
            ))
          ) : (
            <div className="column">
              <span className="title has-text-grey-light">
                No products found!
              </span>
            </div>
          )}
        </div>

        <div className="is-clearfix">
              <button
                className="button is-small is-outlined is-primary   is-pulled-right"
                onClick={() =>
                    //selectProduct(product.productId)}
                this.props.history.push({
                    pathname: '/product',
                    state: {
                        selectedId: '1000000'
                    }
                  })}
              >
                Next
              </button>
            </div>

      </div>
    
      </div>
    );
  }
}

export default Home;