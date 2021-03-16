import { render, screen } from '@testing-library/react';
import { createRenderer } from 'react-dom/test-utils';
//import renderer from 'react-test-renderer';
import App from './App';
import Home from './components/Home';
import Product from './components/Product';
import ProductItem from './components/ProductItem';

// TESTS for components and screen wise
describe('TESTs App: =>', () => {
  const commonDataprops = {"product":{ state : {}
    }
  }

  test('renders -react app simple', () => {
    render(<App />);
    const linkElement = screen.getByText(/Dishwashers/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders Home product screen', () => {
    render(<Home />);
    let productItem = screen.getByText(/Dishwashers/i);
    expect(productItem).toBeInTheDocument();
  });


  test('Test: renders Product item', () => {
    const props = {"product":{
      title: "washer1",
      image: "//johnlewis.scene7.com/is/image/JohnLewis/238008957?",
      "price":{"now":"120"
      }
    }};

    let item=   render(<ProductItem {...props}/>);
    //console.log('DIrect >>>--> ', item);
    let productItem = screen.getByText(/washer1/i);
    expect(productItem).toBeInTheDocument();
  });

  //Test for no items found
  test('renders Product No item found', () => {
    const props = {"product":{
      },
      location:{ state : { product:{}}

      }
    };

    render(<Product {...props}/>);
    let product = screen.getByText(/Product/i);
    expect(product).toBeInTheDocument();
  });

  //Test for no product list found
  test('renders Home No item found', () => {
    const props = {"product":[]
    };

    render(<Home {...props}/>);
    let product = screen.getByText(/Dishwashers \(0/i);
    expect(product).toBeInTheDocument();
  });

  // test('check product item displayed- >', () => {  
  //   const props = {
  //         title: "item",
  //         image: "//johnlewis.scene7.com/is/image/JohnLewis/238008957?"
  //       };
  //   //let item = createRenderer.create(<ProductItem {...props} />);
  //   //SpinnerComponent = mount(<Spinner {...props} />);
  //     //expect(SpinnerComponent.find('p').text()).toBeString();
  //   const item = renderer.create(<ProductItem {...props} />).toJSON();
  //   expect(item.hasClass('prodItemsImg')).toEqual(true);
  // });

  // test('Loaded Diswasher Home product list', () => {
  //   render(<App />);
  //   const linkElement = screen.getByText(/Dishwashers/i);
  //   expect(linkElement).toBeInTheDocument();
  // });

  // test('Loaded Diswasher description', () => {
  //   render(<App />);
  //   const linkElement = screen.getByText(/Dishwashers/i);
  //   expect(linkElement).toBeInTheDocument();
  // });
});
