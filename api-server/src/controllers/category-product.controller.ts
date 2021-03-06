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
  Category,
  Product,
} from '../models';
import {CategoryRepository} from '../repositories';
import {authenticate} from "@loopback/authentication";
import {authorize, PermissionKey} from "../authorization";
import {OPERATION_SECURITY_SPEC} from "../utils/security-spec";

export class CategoryProductController {
  constructor(
    @repository(CategoryRepository) protected categoryRepository: CategoryRepository,
  ) { }

  @authorize(['*'])
  @get('/categories/{id}/products', {
    responses: {
      '200': {
        description: 'Array of Product\'s belonging to Category',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Product)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Product>,
  ): Promise<Product[]> {
    return this.categoryRepository.products(id).find(filter);
  }

  @authenticate('jwt')
  @authorize([PermissionKey.ManageProducts])
  @post('/categories/{id}/products', {
    security: OPERATION_SECURITY_SPEC,
    responses: {
      '200': {
        description: 'Category model instance',
        content: {'application/json': {schema: getModelSchemaRef(Product)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Category.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Product, {
            title: 'NewProductInCategory',
            exclude: ['id'],
            optional: ['categoryId']
          }),
        },
      },
    }) product: Omit<Product, 'id'>,
  ): Promise<Product> {
    return this.categoryRepository.products(id).create(product);
  }

  @authenticate('jwt')
  @authorize([PermissionKey.ManageProducts])
  @patch('/categories/{id}/products', {
    security: OPERATION_SECURITY_SPEC,
    responses: {
      '200': {
        description: 'Category.Product PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Product, {partial: true}),
        },
      },
    })
    product: Partial<Product>,
    @param.query.object('where', getWhereSchemaFor(Product)) where?: Where<Product>,
  ): Promise<Count> {
    return this.categoryRepository.products(id).patch(product, where);
  }

  @authenticate('jwt')
  @authorize([PermissionKey.ManageProducts])
  @del('/categories/{id}/products', {
    security: OPERATION_SECURITY_SPEC,
    responses: {
      '200': {
        description: 'Category.Product DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Product)) where?: Where<Product>,
  ): Promise<Count> {
    return this.categoryRepository.products(id).delete(where);
  }
}
