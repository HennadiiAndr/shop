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
  Product,
  ProductProperties,
} from '../models';
import {ProductRepository} from '../repositories';
import {authenticate} from "@loopback/authentication";
import {authorize, PermissionKey} from "../authorization";
import {OPERATION_SECURITY_SPEC} from "../utils/security-spec";

export class ProductProductPropertiesController {
  constructor(
    @repository(ProductRepository) protected productRepository: ProductRepository,
  ) { }

  @authorize(['*'])
  @get('/products/{id}/product-properties', {
    responses: {
      '200': {
        description: 'Array of ProductProperties\'s belonging to Product',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(ProductProperties)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<ProductProperties>,
  ): Promise<ProductProperties[]> {
    return this.productRepository.productProperties(id).find(filter);
  }

  @authenticate('jwt')
  @authorize([PermissionKey.ManageProducts])
  @post('/products/{id}/product-properties', {
    security: OPERATION_SECURITY_SPEC,
    responses: {
      '200': {
        description: 'Product model instance',
        content: {'application/json': {schema: getModelSchemaRef(ProductProperties)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Product.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProductProperties, {
            title: 'NewProductPropertiesInProduct',
            exclude: ['id'],
            optional: ['productId']
          }),
        },
      },
    }) productProperties: Omit<ProductProperties, 'id'>,
  ): Promise<ProductProperties> {
    return this.productRepository.productProperties(id).create(productProperties);
  }

  @authenticate('jwt')
  @authorize([PermissionKey.ManageProducts])
  @patch('/products/{id}/product-properties', {
    security: OPERATION_SECURITY_SPEC,
    responses: {
      '200': {
        description: 'Product.ProductProperties PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProductProperties, {partial: true}),
        },
      },
    })
    productProperties: Partial<ProductProperties>,
    @param.query.object('where', getWhereSchemaFor(ProductProperties)) where?: Where<ProductProperties>,
  ): Promise<Count> {
    return this.productRepository.productProperties(id).patch(productProperties, where);
  }

  @authenticate('jwt')
  @authorize([PermissionKey.ManageProducts])
  @del('/products/{id}/product-properties', {
    security: OPERATION_SECURITY_SPEC,
    responses: {
      '200': {
        description: 'Product.ProductProperties DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(ProductProperties)) where?: Where<ProductProperties>,
  ): Promise<Count> {
    return this.productRepository.productProperties(id).delete(where);
  }
}
