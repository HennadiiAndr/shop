import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Property} from '../models';
import {PropertyRepository} from '../repositories';
import {authenticate} from "@loopback/authentication";
import {authorize, PermissionKey} from "../authorization";
import {OPERATION_SECURITY_SPEC} from "../utils/security-spec";

export class PropertyController {
  constructor(
    @repository(PropertyRepository)
    public propertyRepository : PropertyRepository,
  ) {}

  @authenticate('jwt')
  @authorize([PermissionKey.ManageProducts])
  @post('/properties', {
    security: OPERATION_SECURITY_SPEC,
    responses: {
      '200': {
        description: 'Property model instance',
        content: {'application/json': {schema: getModelSchemaRef(Property)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Property, {
            title: 'NewProperty',
            exclude: ['id'],
          }),
        },
      },
    })
    property: Omit<Property, 'id'>,
  ): Promise<Property> {
    return this.propertyRepository.create(property);
  }

  @authorize(['*'])
  @get('/properties/count', {
    responses: {
      '200': {
        description: 'Property model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Property)) where?: Where<Property>,
  ): Promise<Count> {
    return this.propertyRepository.count(where);
  }

  @authorize(['*'])
  @get('/properties', {
    responses: {
      '200': {
        description: 'Array of Property model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Property)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Property)) filter?: Filter<Property>,
  ): Promise<Property[]> {
    return this.propertyRepository.find(filter);
  }

  @authenticate('jwt')
  @authorize([PermissionKey.ManageProducts])
  @patch('/properties', {
    security: OPERATION_SECURITY_SPEC,
    responses: {
      '200': {
        description: 'Property PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Property, {partial: true}),
        },
      },
    })
    property: Property,
    @param.query.object('where', getWhereSchemaFor(Property)) where?: Where<Property>,
  ): Promise<Count> {
    return this.propertyRepository.updateAll(property, where);
  }

  @authorize(['*'])
  @get('/properties/{id}', {
    responses: {
      '200': {
        description: 'Property model instance',
        content: {'application/json': {schema: getModelSchemaRef(Property)}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Property> {
    return this.propertyRepository.findById(id);
  }

  @authenticate('jwt')
  @authorize([PermissionKey.ManageProducts])
  @patch('/properties/{id}', {
    security: OPERATION_SECURITY_SPEC,
    responses: {
      '204': {
        description: 'Property PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Property, {partial: true}),
        },
      },
    })
    property: Property,
  ): Promise<void> {
    await this.propertyRepository.updateById(id, property);
  }

  @authenticate('jwt')
  @authorize([PermissionKey.ManageProducts])
  @put('/properties/{id}', {
    security: OPERATION_SECURITY_SPEC,
    responses: {
      '204': {
        description: 'Property PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() property: Property,
  ): Promise<void> {
    await this.propertyRepository.replaceById(id, property);
  }

  @authenticate('jwt')
  @authorize([PermissionKey.ManageProducts])
  @del('/properties/{id}', {
    security: OPERATION_SECURITY_SPEC,
    responses: {
      '204': {
        description: 'Property DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.propertyRepository.deleteById(id);
  }
}
