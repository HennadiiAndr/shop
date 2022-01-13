import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  ProductFeatures,
  Feature,
} from '../models';
import {ProductFeaturesRepository} from '../repositories';
import {authorize} from "../authorization";

export class ProductFeaturesFeatureController {
  constructor(
    @repository(ProductFeaturesRepository)
    public productFeaturesRepository: ProductFeaturesRepository,
  ) { }

  @authorize(['*'])
  @get('/product-features/{id}/feature', {
    responses: {
      '200': {
        description: 'Feature belonging to ProductFeatures',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Feature)},
          },
        },
      },
    },
  })
  async getFeature(
    @param.path.number('id') id: typeof ProductFeatures.prototype.id,
  ): Promise<Feature> {
    return this.productFeaturesRepository.feature(id);
  }
}
