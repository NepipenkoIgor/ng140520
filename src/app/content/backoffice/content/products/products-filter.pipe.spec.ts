import { ProductsFilterPipe } from './products-filter.pipe';

export const products = [
  {
    '_id': '5e7cef4eed3d55e9ccc62885',
    'title': 'Product 111',
    'img': 'assets/img/product-4.jpg',
    'price': 2345,
    'author': 'Igor',
    'isFavorite': false
  },
  {
    '_id': '5e7cef4eed3d55e9ccc62886',
    'title': 'Product 231',
    'img': 'assets/img/product-5.jpg',
    'price': 23,
    'author': 'Vlad',
    'isFavorite': true
  },
  {
    '_id': '5e7cef4eed3d55e9ccc62887',
    'title': 'Product 234',
    'img': 'assets/img/product-3.jpg',
    'price': 333,
    'author': 'Igor',
    'isFavorite': true
  },
];


describe('Products filter ', () => {
  let productsFilterPipe: ProductsFilterPipe;
  beforeEach(() => {
    productsFilterPipe = new ProductsFilterPipe();
  });
  it('Should work in right way', () => {
    expect(productsFilterPipe.transform(products, '')).toEqual(products);
    expect(productsFilterPipe.transform(products, '111')).toEqual([products[0]]);
    expect(productsFilterPipe.transform(products, '', true)).toEqual([products[1], products[2]]);
  });
});
