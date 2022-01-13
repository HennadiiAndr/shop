import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {ProductProperties, ProductPropertiesRelations, Product, PropertyValues} from '../models';
import {DbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {ProductRepository} from './product.repository';
import {PropertyValuesRepository} from './property-values.repository';

export class ProductPropertiesRepository extends DefaultCrudRepository<
  ProductProperties,
  typeof ProductProperties.prototype.id,
  ProductPropertiesRelations
> {

  public readonly product: BelongsToAccessor<Product, typeof ProductProperties.prototype.id>;

  public readonly propertyValue: BelongsToAccessor<PropertyValues, typeof ProductProperties.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
    @repository.getter('ProductRepository') protected productRepositoryGetter: Getter<ProductRepository>,
    @repository.getter('PropertyValuesRepository') protected propertyValuesRepositoryGetter: Getter<PropertyValuesRepository>,
  ) {
    super(ProductProperties, dataSource);
    this.propertyValue = this.createBelongsToAccessorFor('propertyValue', propertyValuesRepositoryGetter,);
    this.registerInclusionResolver('propertyValue', this.propertyValue.inclusionResolver);
    this.product = this.createBelongsToAccessorFor('product', productRepositoryGetter,);
    this.registerInclusionResolver('product', this.product.inclusionResolver);
  }
}
