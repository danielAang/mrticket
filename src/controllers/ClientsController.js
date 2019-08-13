import { Client } from '../models';

class ClientsController {
  async index(req, res) {
    const { id } = req.params;
    const body = id ? await Client.findByPk(id) : await Client.findAll();
    return res.status(200).send(body);
  }

  async store(req, res) {
    const client = await Client.create(req.body);
    return res.status(200).send(client);
  }

  async update(req, res) {
    const { id } = req.params;
    const client = await Client.findByPk(id);
    const _client = await client.update({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      cpf: req.body.cpf,
      cnpj: req.body.cnpj,
      address: req.body.address,
    });
    return res.status(200).send(_client);
  }

  async remove(req, res) {
    const { id } = req.params;
    if (id) {
      const affectedRows = await Client.destroy({
        where: {
          id
        }
      });
      console.log(affectedRows);
      affectedRows > 0 ? res.status(204) : res.status(400);
      return res.send();
    }
  }
}

export default new ClientsController();