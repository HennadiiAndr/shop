import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Property,
  PropertyValues,
} from '../models';
import {PropertyRepository} from '../repositories';
import {authenticate} from "@loopback/authentication";
import {authorize, PermissionKey} from "../authorization";
import {OPERATION_SECURITY_SPEC} from "../utils/security-spec";

export class PropertyPropertyValuesController {
  constructor(
    @repository(PropertyRepository) protected propertyRepository: PropertyRepository,
  ) { }

  @authorize(['*'])
  @get('/properties/{id}/property-values', {
    responses: {
      '200': {
        description: 'Array of PropertyValues\'s belonging to Property',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(PropertyValues)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<PropertyValues>,
  ): Promise<PropertyValues[]> {
    return this.propertyRepository.propertyValues(id).find(filter);
  }

  @authenticate('jwt')
  @authorize([PermissionKey.ManageProducts])
  @post('/properties/{id}/property-values', {
    security: OPERATION_SECURITY_SPEC,
    responses: {
      '200': {
        description: 'Property model instance',
        content: {'application/json': {schema: getModelSchemaRef(PropertyValues)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Property.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PropertyValues, {
            title: 'NewPropertyValuesInProperty',
            exclude: ['id'],
            optional: ['propertyId']
          }),
        },
      },
    }) propertyValues: Omit<PropertyValues, 'id'>,
  ): Promise<PropertyValues> {
    return this.propertyRepository.propertyValues(id).create(propertyValues);
  }

  @authenticate('jwt')
  @authorize([PermissionKey.ManageProducts])
  @patch('/properties/{id}/property-values', {
    security: OPERATION_SECURITY_SPEC,
    responses: {
      '200': {
        description: 'Property.PropertyValues PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PropertyValues, {partial: true}),
        },
      },
    })
    propertyValues: Partial<PropertyValues>,
    @param.query.object('where', getWhereSchemaFor(PropertyValues)) where?: Where<PropertyValues>,
  ): Promise<Count> {
    return this.propertyRepository.propertyValues(id).patch(propertyValues, where);
  }

  @authenticate('jwt')
  @authorize([PermissionKey.ManageProducts])
  @del('/properties/{id}/property-values', {
    security: OPERATION_SECURITY_SPEC,
    responses: {
      '200': {
        description: 'Property.PropertyValues DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(PropertyValues)) where?: Where<PropertyValues>,
  ): Promise<Count> {
    return this.propertyRepository.propertyValues(id).delete(where);
  }
}
