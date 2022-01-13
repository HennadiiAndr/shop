import {inject} from "@loopback/context";
import {post, Request, requestBody, RestBindings} from "@loopback/rest";
import {authorize} from "../authorization";
import fetch from "node-fetch";
import * as crypto from "crypto";

const USER = "FOP_BabychIY";
const PASSWORD = "Zmv*CDy$";

const getSHA256ofJSON = (input: string) => {
  return crypto.createHash('sha1').update(input).digest('hex')
}

/**
 * Opaque JUSTIN Controller
 */
export class JustinController {
  constructor(@inject(RestBindings.Http.REQUEST) private req: Request) {}

  @authorize(['*'])
  @post('/runRequest')
  async runRequest(
    @requestBody({
      content: {
        'application/json': {},
      },
    })
    payload: object
  ) {
    const currentDate = new Date().toISOString().split('T')[0];

    const resBody = await fetch('https://api.justin.ua/justin_pms/hs/v2/runRequest', {
      method: 'POST',
      body:    JSON.stringify({
        ...payload,
        keyAccount: USER,
        sign: getSHA256ofJSON(`${PASSWORD}:${currentDate}`)
      }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(result => result.json())
      .catch(err => console.log(err));

    return resBody;
  }
}