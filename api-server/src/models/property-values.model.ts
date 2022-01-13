import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Property} from './property.model';

@model()
export class PropertyValues extends Entity {
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
  value: string;

  @belongsTo(() => Property)
  propertyId: number;

  constructor(data?: Partial<PropertyValues>) {
    super(data);
  }
}

export interface PropertyValuesRelations {
  // describe navigational properties here
}

export type PropertyValuesWithRelations = PropertyValues & PropertyValuesRelations;
