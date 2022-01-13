import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Feature} from './feature.model';

@model()
export class ProductFeatures extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
  })
  productId?: number;

  @belongsTo(() => Feature)
  featureId: number;

  constructor(data?: Partial<ProductFeatures>) {
    super(data);
  }
}

export interface ProductFeaturesRelations {
  // describe navigational properties here
}

export type ProductFeaturesWithRelations = ProductFeatures & ProductFeaturesRelations;
