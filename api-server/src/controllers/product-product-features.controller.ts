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
  ProductFeatures,
} from '../models';
import {ProductRepository} from '../repositories';
import {authorize} from "../authorization";
import {OPERATION_SECURITY_SPEC} from "../utils/security-spec";

export class ProductProductFeaturesController {
  constructor(
    @repository(ProductRepository) protected productRepository: ProductRepository,
  ) { }

  @authorize(['*'])
  @get('/products/{id}/product-features', {
    responses: {
      '200': {
        description: 'Array of ProductFeatures\'s belonging to Product',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(ProductFeatures)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<ProductFeatures>,
  ): Promise<ProductFeatures[]> {
    return this.productRepository.productFeatures(id).find(filter);
  }

  @post('/products/{id}/product-features', {
    security: OPERATION_SECURITY_SPEC,
    responses: {
      '200': {
        description: 'Product model instance',
        content: {'application/json': {schema: getModelSchemaRef(ProductFeatures)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Product.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProductFeatures, {
            title: 'NewProductFeaturesInProduct',
            exclude: ['id'],
            optional: ['productId']
          }),
        },
      },
    }) productFeatures: Omit<ProductFeatures, 'id'>,
  ): Promise<ProductFeatures> {
    return this.productRepository.productFeatures(id).create(productFeatures);
  }

  @patch('/products/{id}/product-features', {
    security: OPERATION_SECURITY_SPEC,
    responses: {
      '200': {
        description: 'Product.ProductFeatures PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProductFeatures, {partial: true}),
        },
      },
    })
    productFeatures: Partial<ProductFeatures>,
    @param.query.object('where', getWhereSchemaFor(ProductFeatures)) where?: Where<ProductFeatures>,
  ): Promise<Count> {
    return this.productRepository.productFeatures(id).patch(productFeatures, where);
  }

  @del('/products/{id}/product-features', {
    security: OPERATION_SECURITY_SPEC,
    responses: {
      '200': {
        description: 'Product.ProductFeatures DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(ProductFeatures)) where?: Where<ProductFeatures>,
  ): Promise<Count> {
    return this.productRepository.productFeatures(id).delete(where);
  }
}
