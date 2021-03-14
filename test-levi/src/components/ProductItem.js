import React from "react";
import { useHistory } from "react-router-dom";

const ProductItem = props => { //console.log('Item>>>>>>',props);
  const { product } = props;
  const { context } = props;
  const history = useHistory();

  //TODO Method for selected id 
  function selectProduct(selId) {
    context.selectProductId = selId;
    history.push("/product" , context);
  }
  return (
    <div className="card column is-half">
      <div className="box">
        <div className="media">
          <div className="media-left">
              <img className="prodItemsImg"
                src={product.image}
                alt={product.title}
                onClick={() =>
                    context.history.push({
                        pathname: '/product',
                        state: {selectedId: product.productId}
                    })}
              />
          </div>

          <div className="media-content">
            
            <div>{product.title}</div>
            <b style={{ textTransform: "capitalize" }}>
              {product.name}{" "}
              <span className="tag is-primary">£{product.price.now}</span>
            </b>
            
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductItem;