import React, { Component } from 'react';
import './home.css';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      selectedId : props.location.state.selectedId ? props.location.state.selectedId :'00000'
    };
  }
  
  componentDidMount() {
    fetch('https://api.johnlewis.com/mobile-apps/api/v1/products/'+this.state.selectedId)
    .then(res => res.json())
    .then((data) => { console.log('Res ---> ',data);
      this.setState({ product: data })
    })
    .catch(console.log)
  }

  render() {  //console.log('PROD this>>>>>>>>>>>> ---> ',this);
    let product= this.state.product;
    
    return (
      
    <div>

    <div className="App-header" style={{ flex: 2, alignItems: 'left' }}>              
      <div className="mdl-layout__header-row" style={{ paddingLeft: '2%'}}>
          <button className="mdl-button" style={{borderWidth:'0px', float:'left'}} onClick={() => this.props.history.goBack()}>
            <i className="fa fa-angle-left" style={{fontSize:'30px',color:'grey'}}></i>
            </button>
            <span className="mdl-layout-title" style={{width:'95%',textAlign:'center',  marginLeft: '2%', display:'block'}}>Product- {product.title}</span>
      </div>
    </div>

      <div className="container">
        <div className="cards1">
          {product.title ? (
            <div className="card1 column is-half">
               <div className="media-left">
                    <img className="prodItemsImg"
                      src={product.media.images.urls}
                      alt={product.title}
                    />
                    <img className="prodItemsImg" src={product.media.images.urls}></img>
                </div>
      
                <div className="media-content">
                  
                  <div>{product.title}</div>
                  <b style={{ textTransform: "capitalize" }}>
                    {product.name}{" "}
                    <span className="tag is-primary">£{product.price.now}</span>
                  </b>
                  
                  <div className="is-clearfix" style={{color:'red'}}> {product.displaySpecialOffer}.</div>
                  <div className="is-clearfix"> {product.additionalServices.includedServices}</div>
                  
                </div>
              

               <br/><br/>
              <div className="it-clearfix" style={{fontSize:'20px'}}> Product Information:</div>
              <br /><br/>
                  <div className="it" dangerouslySetInnerHTML={{ __html: product.details.productInformation}} ></div>
                  <br/><div className="it">Product code: {product.code} </div>
                  <br/><hr />

              <div className="it-clearfix" style={{fontSize:'20px'}}> Product specification:</div>
              <br /><br/>
             
              <div className="mdl-layout__header-row" style={{ paddingLeft: '2%'}}>
                  <span className="mdl-button" style={{borderWidth:'0px', float:'left'}} >Standing</span>
                    <span className="mdl-layout-title" style={{width:'95%',textAlign:'right',  marginLeft: '2%', display:'block'}}>Product- yes</span>
              </div>
              <br/><br/>    
                 
          </div>
            

          ) : (
            <div className="column">
              <span className="title has-text-grey-light">
                No product found!
              </span>
            </div>
          )}
        </div>
      </div>
    
        </div>
    );
  }
}

export default Product;