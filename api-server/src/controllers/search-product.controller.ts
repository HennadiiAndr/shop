import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
} from '@loopback/rest';
import {SearchProduct} from '../models';
import {SearchProductRepository} from '../repositories';
import {authorize} from "../authorization";

export class SearchProductController {
  constructor(
    @repository(SearchProductRepository)
    public searchProductRepository : SearchProductRepository,
  ) {}

  @authorize(['*'])
  @get('/search-products/count', {
    responses: {
      '200': {
        description: 'SearchProduct model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(SearchProduct)) where?: Where<SearchProduct>,
  ): Promise<Count> {
    return this.searchProductRepository.count(where);
  }

  @authorize(['*'])
  @get('/search-products', {
    responses: {
      '200': {
        description: 'Array of SearchProduct model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(SearchProduct)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(SearchProduct)) filter?: Filter<SearchProduct>,
  ): Promise<SearchProduct[]> {
    return this.searchProductRepository.find(filter);
  }
}
