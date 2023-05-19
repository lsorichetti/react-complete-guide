import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  { 
    id: 'p1',
    price: 100.2,
    title: 'my First Book',
    description: 'some first book',
  },
  { 
    id: 'p2',
    price: 200.2,
    title: 'my second Book',
    description: 'some second book',
  }
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map( item =>{
          
          return  <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        })}
      </ul>
    </section>
  );
};

export default Products;
