import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {PropertyValues, PropertyValuesRelations, Property} from '../models';
import {DbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {PropertyRepository} from './property.repository';

export class PropertyValuesRepository extends DefaultCrudRepository<
  PropertyValues,
  typeof PropertyValues.prototype.id,
  PropertyValuesRelations
> {

  public readonly property: BelongsToAccessor<Property, typeof PropertyValues.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('PropertyRepository') protected propertyRepositoryGetter: Getter<PropertyRepository>,
  ) {
    super(PropertyValues, dataSource);
    this.property = this.createBelongsToAccessorFor('property', propertyRepositoryGetter,);
    this.registerInclusionResolver('property', this.property.inclusionResolver);
  }
}
