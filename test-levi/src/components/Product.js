import React, { Component } from 'react';
import './home.css';
import constants from '../res/constants.js';
import productMockData from '../test/product.json';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      slideIndex :1,
      selectedId : props.location.state.selectedId ? props.location.state.selectedId :'00000'
    };
  }
  
  componentDidMount() {
    fetch( constants.URL_PRODUCT_DESC +this.state.selectedId)
      .then(res => res.json())
      .then((data) => { console.log('Response product---> ',data);
        this.setState({ product: data })
      })
      .catch((error) =>{
        //If fails then show MOCK dummy data just for flow
        this.setState({ product: productMockData});
      }
    ) 
  }
  
  //Method for showing image slide with numbers
  showSlides(n) {
    let slideIndex = this.state.slideIndex;
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex  = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    if(slides[slideIndex -1]){
      slides[slideIndex -1].style.display = "block";
    }

    this.state.slideIndex =slideIndex;

  }

  //method for moving slide of image
  moveSlides(n) { console.log('<<<<<<   back ./next >>>> ---> ', n);
      this.showSlides(this.state.slideIndex  += n);
  }
 
  // Mehtod render
  render() {  
    let product= this.state.product;
    let slideIndex = 1;
    //first time show the first image on slider
    if(product.media){
      this.showSlides(1 );
    }

    //rending the component
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
          <div className="ca">
            {product.title ? (
              <div className="column is-half">
                
                <div className="cardsP">
                 <div className="card swipe-container2" style={{ width: `95%`, height: `500px`}}>
                   {/* THIS BELOE {code} should BE PLACED IN ANOTHER FUNCTION TO LOAD FIRST TIME ON API SUCCESS LIKE PRODUCT LIST component
                        And there would be a function will call which loads these nested component -{getProductDetails}
                    */} 
                
                    {product.media.images.urls.map((url, index) => ( 
                        <div className="mySlides"  style={{ display:  index === 0 ? 'block':'none' }}>
                          <img alt="" src={url} style={{width:"90%", height:"500px"}}/>
                        </div>
                        )) }
                      
                      <button className="prev mdl-button" style={{borderWidth:'0px', float:'left'}} onClick={() => this.moveSlides(-1)}>
                        <i className="fa fa-angle-left" style={{fontSize:'30px',color:'grey'}}></i>
                      </button>
                      <button className="next mdl-button" style={{borderWidth:'0px', float:'left'}} onClick={() => this.moveSlides(1)}>
                        <i className="fa fa-angle-right" style={{fontSize:'30px',color:'grey'}}></i>
                      </button>
                </div>
                  <div className="card media-content">          
                    {/* <div>{product.title}</div> */}
                    <b style={{ textTransform: "capitalize" }}>
                      {product.name}{" "}
                      <span className="tag is-primary">£{product.price.now}</span>
                    </b>
                    
                    <div className="is-c" style={{color:'red'}}> {product.displaySpecialOffer}.</div>
                    <div className="is-c"> {product.additionalServices.includedServices}</div>
                    
                  </div>
                </div>

                <br/>
                <div className="it-c" style={{fontSize:'20px'}}> Product Information:</div>
                <br />
                    <div className="it" dangerouslySetInnerHTML={{ __html: product.details.productInformation}} ></div>
                    <br/><div className="it">Product code: {product.code} </div>
                    <br/><hr />

                <div className="it-c" style={{fontSize:'20px'}}> Product specification:</div>
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