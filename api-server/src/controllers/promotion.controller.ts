import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Promotion} from '../models';
import {PromotionRepository} from '../repositories';
import {authenticate} from "@loopback/authentication";
import {authorize, PermissionKey} from "../authorization";

export class PromotionController {
  constructor(
    @repository(PromotionRepository)
    public promotionRepository : PromotionRepository,
  ) {}

  @authenticate('jwt')
  @authorize([PermissionKey.ManageProducts])
  @post('/promotions', {
    responses: {
      '200': {
        description: 'Promotion model instance',
        content: {'application/json': {schema: getModelSchemaRef(Promotion)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Promotion, {
            title: 'NewPromotion',
            exclude: ['id'],
          }),
        },
      },
    })
    promotion: Omit<Promotion, 'id'>,
  ): Promise<Promotion> {
    return this.promotionRepository.create(promotion);
  }

  @authorize(['*'])
  @get('/promotions/count', {
    responses: {
      '200': {
        description: 'Promotion model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Promotion) where?: Where<Promotion>,
  ): Promise<Count> {
    return this.promotionRepository.count(where);
  }

  @authorize(['*'])
  @get('/promotions', {
    responses: {
      '200': {
        description: 'Array of Promotion model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Promotion, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Promotion) filter?: Filter<Promotion>,
  ): Promise<Promotion[]> {
    return this.promotionRepository.find(filter);
  }

  @authenticate('jwt')
  @authorize([PermissionKey.ManageProducts])
  @patch('/promotions', {
    responses: {
      '200': {
        description: 'Promotion PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Promotion, {partial: true}),
        },
      },
    })
    promotion: Promotion,
    @param.where(Promotion) where?: Where<Promotion>,
  ): Promise<Count> {
    return this.promotionRepository.updateAll(promotion, where);
  }

  @authorize(['*'])
  @get('/promotions/{id}', {
    responses: {
      '200': {
        description: 'Promotion model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Promotion, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Promotion, {exclude: 'where'}) filter?: FilterExcludingWhere<Promotion>
  ): Promise<Promotion> {
    return this.promotionRepository.findById(id, filter);
  }

  @authenticate('jwt')
  @authorize([PermissionKey.ManageProducts])
  @patch('/promotions/{id}', {
    responses: {
      '204': {
        description: 'Promotion PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Promotion, {partial: true}),
        },
      },
    })
    promotion: Promotion,
  ): Promise<void> {
    await this.promotionRepository.updateById(id, promotion);
  }

  @authenticate('jwt')
  @authorize([PermissionKey.ManageProducts])
  @put('/promotions/{id}', {
    responses: {
      '204': {
        description: 'Promotion PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() promotion: Promotion,
  ): Promise<void> {
    await this.promotionRepository.replaceById(id, promotion);
  }

  @authenticate('jwt')
  @authorize([PermissionKey.ManageProducts])
  @del('/promotions/{id}', {
    responses: {
      '204': {
        description: 'Promotion DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.promotionRepository.deleteById(id);
  }
}
