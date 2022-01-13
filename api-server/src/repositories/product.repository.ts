import {
  DefaultCrudRepository,
  repository,
  BelongsToAccessor,
  HasManyRepositoryFactory,
} from '@loopback/repository';
import {
  Product,
  ProductRelations,
  Category,
  ProductFeatures,
  ProductProperties
} from '../models';
import {DbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {CategoryRepository} from './category.repository';
import {ProductFeaturesRepository} from './product-features.repository';
import {ProductPropertiesRepository} from './product-properties.repository';

export class ProductRepository extends DefaultCrudRepository<
  Product,
  typeof Product.prototype.id,
  ProductRelations
> {

  public readonly category: BelongsToAccessor<Category, typeof Product.prototype.id>;
  public readonly productFeatures: HasManyRepositoryFactory<ProductFeatures, typeof Product.prototype.id>;

  public readonly productProperties: HasManyRepositoryFactory<ProductProperties, typeof Product.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
    @repository.getter('CategoryRepository') protected categoryRepositoryGetter: Getter<CategoryRepository>,
    @repository.getter('ProductFeaturesRepository') protected productFeaturesRepositoryGetter: Getter<ProductFeaturesRepository>,
    @repository.getter('ProductPropertiesRepository') protected productPropertiesRepositoryGetter: Getter<ProductPropertiesRepository>,
  ) {
    super(Product, dataSource);
    this.productProperties = this.createHasManyRepositoryFactoryFor('productProperties', productPropertiesRepositoryGetter,);
    this.registerInclusionResolver('productProperties', this.productProperties.inclusionResolver);

    this.productFeatures = this.createHasManyRepositoryFactoryFor('productFeatures', productFeaturesRepositoryGetter,);
    this.registerInclusionResolver('productFeatures', this.productFeatures.inclusionResolver);

    this.category = this.createBelongsToAccessorFor('category', categoryRepositoryGetter,);
    this.registerInclusionResolver('category', this.category.inclusionResolver);
  }
}
