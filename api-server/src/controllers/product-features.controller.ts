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
import {ProductFeatures} from '../models';
import {ProductFeaturesRepository} from '../repositories';
import {authenticate} from "@loopback/authentication";
import {authorize, PermissionKey} from "../authorization";
import {OPERATION_SECURITY_SPEC} from "../utils/security-spec";

export class ProductFeaturesController {
  constructor(
    @repository(ProductFeaturesRepository)
    public productFeaturesRepository : ProductFeaturesRepository,
  ) {}

  @authenticate('jwt')
  @authorize([PermissionKey.ManageProducts])
  @post('/product-features', {
    security: OPERATION_SECURITY_SPEC,
    responses: {
      '200': {
        description: 'ProductFeatures model instance',
        content: {'application/json': {schema: getModelSchemaRef(ProductFeatures)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProductFeatures, {
            title: 'NewProductFeatures',
            exclude: ['id'],
          }),
        },
      },
    })
    productFeatures: Omit<ProductFeatures, 'id'>,
  ): Promise<ProductFeatures> {
    return this.productFeaturesRepository.create(productFeatures);
  }

  @authorize(['*'])
  @get('/product-features/count', {
    responses: {
      '200': {
        description: 'ProductFeatures model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(ProductFeatures)) where?: Where<ProductFeatures>,
  ): Promise<Count> {
    return this.productFeaturesRepository.count(where);
  }

  @authorize(['*'])
  @get('/product-features', {
    responses: {
      '200': {
        description: 'Array of ProductFeatures model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(ProductFeatures)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(ProductFeatures)) filter?: Filter<ProductFeatures>,
  ): Promise<ProductFeatures[]> {
    return this.productFeaturesRepository.find(filter);
  }

  @authenticate('jwt')
  @authorize([PermissionKey.ManageProducts])
  @patch('/product-features', {
    security: OPERATION_SECURITY_SPEC,
    responses: {
      '200': {
        description: 'ProductFeatures PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProductFeatures, {partial: true}),
        },
      },
    })
    productFeatures: ProductFeatures,
    @param.query.object('where', getWhereSchemaFor(ProductFeatures)) where?: Where<ProductFeatures>,
  ): Promise<Count> {
    return this.productFeaturesRepository.updateAll(productFeatures, where);
  }

  @authorize(['*'])
  @get('/product-features/{id}', {
    responses: {
      '200': {
        description: 'ProductFeatures model instance',
        content: {'application/json': {schema: getModelSchemaRef(ProductFeatures)}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<ProductFeatures> {
    return this.productFeaturesRepository.findById(id);
  }

  @authenticate('jwt')
  @authorize([PermissionKey.ManageProducts])
  @patch('/product-features/{id}', {
    security: OPERATION_SECURITY_SPEC,
    responses: {
      '204': {
        description: 'ProductFeatures PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProductFeatures, {partial: true}),
        },
      },
    })
    productFeatures: ProductFeatures,
  ): Promise<void> {
    await this.productFeaturesRepository.updateById(id, productFeatures);
  }

  @authenticate('jwt')
  @authorize([PermissionKey.ManageProducts])
  @put('/product-features/{id}', {
    security: OPERATION_SECURITY_SPEC,
    responses: {
      '204': {
        description: 'ProductFeatures PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() productFeatures: ProductFeatures,
  ): Promise<void> {
    await this.productFeaturesRepository.replaceById(id, productFeatures);
  }

  @authenticate('jwt')
  @authorize([PermissionKey.ManageProducts])
  @del('/product-features/{id}', {
    security: OPERATION_SECURITY_SPEC,
    responses: {
      '204': {
        description: 'ProductFeatures DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.productFeaturesRepository.deleteById(id);
  }
}
