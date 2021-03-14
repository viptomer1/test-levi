import { render, screen } from '@testing-library/react';
import { createRenderer } from 'react-dom/test-utils';
//import renderer from 'react-test-renderer';
import App from './App';
import Home from './components/Home';
import Product from './components/Product';
import ProductItem from './components/ProductItem';

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

//Test for no items found
// test('renders Home No item found', () => {
//   render(<Product />);
//   let product = screen.getByText(/Dishwashers/i);
//   expect(product).toBeInTheDocument();
// });

// test('Test: renders Product list item', () => {
//   const defaultProps = {  
//     title: "item",
//     image: "//johnlewis.scene7.com/is/image/JohnLewis/238008957?"
//   }
//   const item = (props) =>  
//     <ProductItem
//         {...defaultProps}
//         //{...props}
//     />;
//   //render(<ProductItem />);
//   console.log('>>>>>>>>>> =====> ',item);
//   render(item);
//   let productItem = screen.getByText(/div/i);
//   expect(productItem).toBeInTheDocument();
// });

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
