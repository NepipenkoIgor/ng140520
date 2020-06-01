import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './data';

@Pipe({
  name: 'productsFilter',
  pure: false
})
export class ProductsFilterPipe implements PipeTransform {

  public transform(
    products: IProduct[],
    searchText: string,
    onlyFavorites: boolean = false
  ): IProduct[] {
    let result: IProduct[] = products;
    if (onlyFavorites) {
      result = result.filter((product: IProduct) => product.isFavorite);
    }
    if (!searchText) {
      return result;
    }
    return result.filter((product: IProduct) => {
      return `${product.title} ${product.price}`.toLowerCase().includes(searchText.toLowerCase());
    });
  }

}
