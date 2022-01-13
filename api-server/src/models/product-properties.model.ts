import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Product} from './product.model';
import {PropertyValues} from './property-values.model';

@model()
export class ProductProperties extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @belongsTo(() => Product)
  productId: number;

  @belongsTo(() => PropertyValues)
  propertyValueId: number;

  constructor(data?: Partial<ProductProperties>) {
    super(data);
  }
}

export interface ProductPropertiesRelations {
  // describe navigational properties here
}

export type ProductPropertiesWithRelations = ProductProperties & ProductPropertiesRelations;
