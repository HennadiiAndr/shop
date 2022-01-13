import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Promotion,
  Product,
} from '../models';
import {PromotionRepository} from '../repositories';

export class PromotionProductController {
  constructor(
    @repository(PromotionRepository)
    public promotionRepository: PromotionRepository,
  ) { }

  @get('/promotions/{id}/product', {
    responses: {
      '200': {
        description: 'Product belonging to Promotion',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Product)},
          },
        },
      },
    },
  })
  async getProduct(
    @param.path.number('id') id: typeof Promotion.prototype.id,
  ): Promise<Product> {
    return this.promotionRepository.product(id);
  }
}
