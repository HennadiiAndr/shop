import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {Property, PropertyRelations, PropertyValues} from '../models';
import {DbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {PropertyValuesRepository} from './property-values.repository';

export class PropertyRepository extends DefaultCrudRepository<
  Property,
  typeof Property.prototype.id,
  PropertyRelations
> {

  public readonly propertyValues: HasManyRepositoryFactory<PropertyValues, typeof Property.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('PropertyValuesRepository') protected propertyValuesRepositoryGetter: Getter<PropertyValuesRepository>,
  ) {
    super(Property, dataSource);
    this.propertyValues = this.createHasManyRepositoryFactoryFor('propertyValues', propertyValuesRepositoryGetter,);
    this.registerInclusionResolver('propertyValues', this.propertyValues.inclusionResolver);
  }
}
