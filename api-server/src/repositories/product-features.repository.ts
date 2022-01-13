import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {ProductFeatures, ProductFeaturesRelations, Feature} from '../models';
import {DbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {FeatureRepository} from './feature.repository';

export class ProductFeaturesRepository extends DefaultCrudRepository<
  ProductFeatures,
  typeof ProductFeatures.prototype.id,
  ProductFeaturesRelations
> {

  public readonly feature: BelongsToAccessor<Feature, typeof ProductFeatures.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('FeatureRepository') protected featureRepositoryGetter: Getter<FeatureRepository>,
  ) {
    super(ProductFeatures, dataSource);
    this.feature = this.createBelongsToAccessorFor('feature', featureRepositoryGetter,);
    this.registerInclusionResolver('feature', this.feature.inclusionResolver);
  }
}
