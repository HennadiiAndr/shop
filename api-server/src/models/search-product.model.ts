import {Model, model, property} from '@loopback/repository';

@model()
export class SearchProductFeature extends Model {
  @property({
    type: 'number',
  })
  id: number;

  @property({
    type: 'number',
  })
  featureId?: number;

  @property({
    type: 'string',
  })
  featureName: string;

  constructor(data?: Partial<SearchProductFeature>) {
    super(data);
  }
}

@model()
export class SearchProductProperty extends Model {
  @property({
    type: 'number',
  })
  id: number;

  @property({
    type: 'number',
  })
  propertyId?: number;

  @property({
    type: 'string',
  })
  propertyName: string;

  @property({
    type: 'number',
  })
  propertyValueId?: number;

  @property({
    type: 'string',
  })
  propertyValueValue: string;

  constructor(data?: Partial<SearchProductProperty>) {
    super(data);
  }
}

@model()
export class SearchProduct extends Model {
  @property({
    type: 'number',
  })
  id: number;

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
    type: 'number',
  })
  categoryId?: number;

  @property.array(SearchProductFeature)
  features: SearchProductFeature[];

  @property.array(SearchProductProperty)
  properties: SearchProductProperty[];

  constructor(data?: Partial<SearchProduct>) {
    super(data);
  }
}

export type SearchProductWithRelations = SearchProduct;
