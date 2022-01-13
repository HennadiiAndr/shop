import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {Category, CategoryWithRelations} from './category.model';
import {ProductFeatures} from './product-features.model';
import {ProductProperties} from './product-properties.model';

@model()
export class Product extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'string',
  })
  mainImageUrl?: string;

  @property({
    type: 'number',
  })
  price?: number;

  @property({
    type: 'number',
  })
  discount?: number;

  @belongsTo(() => Category)
  categoryId?: number;

  @hasMany(() => ProductFeatures)
  productFeatures: ProductFeatures[];

  @hasMany(() => ProductProperties)
  productProperties: ProductProperties[];

  constructor(data?: Partial<Product>) {
    super(data);
  }
}

export interface ProductRelations {
  categories?: CategoryWithRelations;
}

export type ProductWithRelations = Product & ProductRelations;
