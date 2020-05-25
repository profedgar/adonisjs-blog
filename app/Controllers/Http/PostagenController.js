'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const PostagenModel= use("App/Models/Postagen")

/**
 * Resourceful controller for interacting with postagens
 */
class PostagenController {
  /**
   * Show a list of all postagens.
   * GET postagens
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const Postagens=await PostagenModel.all();
    response.send(Postagens)
  }

  /**
   * Render a form to be used for creating a new postagen.
   * GET postagens/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new postagen.
   * POST postagens
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data=request.all()
    const Postagen=await PostagenModel.create(data)
    response.send(Postagen)
  }

  /**
   * Display a single postagen.
   * GET postagens/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const Postagen=await PostagenModel.find(params.id)
    response.send(Postagen)
  }

  /**
   * Render a form to update an existing postagen.
   * GET postagens/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update postagen details.
   * PUT or PATCH postagens/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const data=request.all()
    const Postagen=await PostagenModel.find(params.id)
    Postagen.merge(data)
    Postagen.save()
    response.send(Postagen)
  }


  async usuariosdapostagen({ params, request, response, view }) {
    const Postagen=await PostagenModel.find(params.id)
    Postagen.usuario=await Postagen.usuario().fetch()
    return Postagen
  }


  /**
   * Delete a postagen with id.
   * DELETE postagens/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const Postagen=await PostagenModel.find(params.id)
     Postagen.delete()
    response.send({mensagem:"Deletado com sucesso"})
  }
}

module.exports = PostagenController
