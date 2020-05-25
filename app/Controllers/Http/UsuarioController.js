'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const UsuarioModel= use("App/Models/User")

/**
 * Resourceful controller for interacting with usuarios
 */
class UsuarioController {
  /**
   * Show a list of all usuarios.
   * GET usuarios
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const Usuarios=await UsuarioModel.all();
    response.send(Usuarios)
  }

  /**
   * Render a form to be used for creating a new usuario.
   * GET usuarios/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new usuario.
   * POST usuarios
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
     const data=request.all()
     const User=await UsuarioModel.create(data)
     response.send(User)
  }

  /**
   * Display a single usuario.
   * GET usuarios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const User=await UsuarioModel.find(params.id)
    response.send(User)

  }

  async postagensusuarios({ params, request, response, view }) {
    const Userpostagens=await UsuarioModel.find(params.id)
    Userpostagens.postagens=await Userpostagens.postagens().fetch()
    return Userpostagens
  }

   

  /**
   * Render a form to update an existing usuario.
   * GET usuarios/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update usuario details.
   * PUT or PATCH usuarios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const data=request.all()
    const User=await UsuarioModel.find(params.id)
    User.merge(data)
    User.save()
    response.send(User)


  }

  /**
   * Delete a usuario with id.
   * DELETE usuarios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    
    const User=await UsuarioModel.find(params.id)
    User.delete()
    response.send({mensagem:"Deletado com sucesso"})
  }

   async gettoken({request,response,auth})
   {
      const {email,password}=request.all()
      const autenticacao=await auth.attempt(email,password)
      response.send(autenticacao)
   }



}

module.exports = UsuarioController
