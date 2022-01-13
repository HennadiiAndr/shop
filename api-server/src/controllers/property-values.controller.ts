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
import {PropertyValues} from '../models';
import {PropertyValuesRepository} from '../repositories';
import {authenticate} from "@loopback/authentication";
import {authorize, PermissionKey} from "../authorization";
import {OPERATION_SECURITY_SPEC} from "../utils/security-spec";

export class PropertyValuesController {
  constructor(
    @repository(PropertyValuesRepository)
    public propertyValuesRepository : PropertyValuesRepository,
  ) {}

  @authenticate('jwt')
  @authorize([PermissionKey.ManageProducts])
  @post('/property-values', {
    security: OPERATION_SECURITY_SPEC,
    responses: {
      '200': {
        description: 'PropertyValues model instance',
        content: {'application/json': {schema: getModelSchemaRef(PropertyValues)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PropertyValues, {
            title: 'NewPropertyValues',
            exclude: ['id'],
          }),
        },
      },
    })
    propertyValues: Omit<PropertyValues, 'id'>,
  ): Promise<PropertyValues> {
    return this.propertyValuesRepository.create(propertyValues);
  }

  @authorize(['*'])
  @get('/property-values/count', {
    responses: {
      '200': {
        description: 'PropertyValues model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(PropertyValues)) where?: Where<PropertyValues>,
  ): Promise<Count> {
    return this.propertyValuesRepository.count(where);
  }

  @authorize(['*'])
  @get('/property-values', {
    responses: {
      '200': {
        description: 'Array of PropertyValues model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(PropertyValues)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(PropertyValues)) filter?: Filter<PropertyValues>,
  ): Promise<PropertyValues[]> {
    return this.propertyValuesRepository.find(filter);
  }

  @authenticate('jwt')
  @authorize([PermissionKey.ManageProducts])
  @patch('/property-values', {
    security: OPERATION_SECURITY_SPEC,
    responses: {
      '200': {
        description: 'PropertyValues PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PropertyValues, {partial: true}),
        },
      },
    })
    propertyValues: PropertyValues,
    @param.query.object('where', getWhereSchemaFor(PropertyValues)) where?: Where<PropertyValues>,
  ): Promise<Count> {
    return this.propertyValuesRepository.updateAll(propertyValues, where);
  }

  @authorize(['*'])
  @get('/property-values/{id}', {
    responses: {
      '200': {
        description: 'PropertyValues model instance',
        content: {'application/json': {schema: getModelSchemaRef(PropertyValues)}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<PropertyValues> {
    return this.propertyValuesRepository.findById(id);
  }

  @authenticate('jwt')
  @authorize([PermissionKey.ManageProducts])
  @patch('/property-values/{id}', {
    security: OPERATION_SECURITY_SPEC,
    responses: {
      '204': {
        description: 'PropertyValues PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PropertyValues, {partial: true}),
        },
      },
    })
    propertyValues: PropertyValues,
  ): Promise<void> {
    await this.propertyValuesRepository.updateById(id, propertyValues);
  }

  @authenticate('jwt')
  @authorize([PermissionKey.ManageProducts])
  @put('/property-values/{id}', {
    security: OPERATION_SECURITY_SPEC,
    responses: {
      '204': {
        description: 'PropertyValues PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() propertyValues: PropertyValues,
  ): Promise<void> {
    await this.propertyValuesRepository.replaceById(id, propertyValues);
  }

  @authenticate('jwt')
  @authorize([PermissionKey.ManageProducts])
  @del('/property-values/{id}', {
    security: OPERATION_SECURITY_SPEC,
    responses: {
      '204': {
        description: 'PropertyValues DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.propertyValuesRepository.deleteById(id);
  }
}
