import {Filter, Where, Repository, Count} from '@loopback/repository';
import {SearchProduct, SearchProductFeature, SearchProductProperty} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class SearchProductRepository implements Repository<SearchProduct> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {}

  async find(filter?: Filter<SearchProduct>, options?: {}): Promise<SearchProduct[]> {
    console.log(filter);
    console.log(options);
    const item: SearchProduct = new SearchProduct({
      id: 1,
      name: 'Test res',
      description: 'Super description 123',
      categoryId: 1,
      features: [
          new SearchProductFeature({
            id: 1,
            featureId: 1,
            featureName: 'Big screen',
          })
      ],
      properties: [
          new SearchProductProperty({
            id: 1,
            propertyId: 1,
            propertyName: 'Processor',
            propertyValueId: 1,
            propertyValueValue: 'Core i5',
          })
      ],
    });
    const res = Promise.resolve([item]);
    return res;
  }

  async count(where?: Where<SearchProduct>, options?: {}): Promise<Count> {
    console.log(where);
    console.log(options);
    const res = Promise.resolve({count: 2});
    return res;
  }
}
