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
import {ProductProperties} from '../models';
import {ProductPropertiesRepository} from '../repositories';
import {authenticate} from "@loopback/authentication";
import {authorize, PermissionKey} from "../authorization";
import {OPERATION_SECURITY_SPEC} from "../utils/security-spec";

export class ProductPropertiesController {
  constructor(
    @repository(ProductPropertiesRepository)
    public productPropertiesRepository : ProductPropertiesRepository,
  ) {}

  @authenticate('jwt')
  @authorize([PermissionKey.ManageProducts])
  @post('/product-properties', {
    security: OPERATION_SECURITY_SPEC,
    responses: {
      '200': {
        description: 'ProductProperties model instance',
        content: {'application/json': {schema: getModelSchemaRef(ProductProperties)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProductProperties, {
            title: 'NewProductProperties',
            exclude: ['id'],
          }),
        },
      },
    })
    productProperties: Omit<ProductProperties, 'id'>,
  ): Promise<ProductProperties> {
    return this.productPropertiesRepository.create(productProperties);
  }

  @authorize(['*'])
  @get('/product-properties/count', {
    responses: {
      '200': {
        description: 'ProductProperties model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(ProductProperties)) where?: Where<ProductProperties>,
  ): Promise<Count> {
    return this.productPropertiesRepository.count(where);
  }

  @authorize(['*'])
  @get('/product-properties', {
    responses: {
      '200': {
        description: 'Array of ProductProperties model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(ProductProperties)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(ProductProperties)) filter?: Filter<ProductProperties>,
  ): Promise<ProductProperties[]> {
    return this.productPropertiesRepository.find(filter);
  }

  @authenticate('jwt')
  @authorize([PermissionKey.ManageProducts])
  @patch('/product-properties', {
    security: OPERATION_SECURITY_SPEC,
    responses: {
      '200': {
        description: 'ProductProperties PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProductProperties, {partial: true}),
        },
      },
    })
    productProperties: ProductProperties,
    @param.query.object('where', getWhereSchemaFor(ProductProperties)) where?: Where<ProductProperties>,
  ): Promise<Count> {
    return this.productPropertiesRepository.updateAll(productProperties, where);
  }

  @authorize(['*'])
  @get('/product-properties/{id}', {
    responses: {
      '200': {
        description: 'ProductProperties model instance',
        content: {'application/json': {schema: getModelSchemaRef(ProductProperties)}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<ProductProperties> {
    return this.productPropertiesRepository.findById(id);
  }

  @authenticate('jwt')
  @authorize([PermissionKey.ManageProducts])
  @patch('/product-properties/{id}', {
    security: OPERATION_SECURITY_SPEC,
    responses: {
      '204': {
        description: 'ProductProperties PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProductProperties, {partial: true}),
        },
      },
    })
    productProperties: ProductProperties,
  ): Promise<void> {
    await this.productPropertiesRepository.updateById(id, productProperties);
  }

  @authenticate('jwt')
  @authorize([PermissionKey.ManageProducts])
  @put('/product-properties/{id}', {
    security: OPERATION_SECURITY_SPEC,
    responses: {
      '204': {
        description: 'ProductProperties PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() productProperties: ProductProperties,
  ): Promise<void> {
    await this.productPropertiesRepository.replaceById(id, productProperties);
  }

  @authenticate('jwt')
  @authorize([PermissionKey.ManageProducts])
  @del('/product-properties/{id}', {
    security: OPERATION_SECURITY_SPEC,
    responses: {
      '204': {
        description: 'ProductProperties DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.productPropertiesRepository.deleteById(id);
  }
}
