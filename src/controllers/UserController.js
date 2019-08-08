import { User } from '../models';

class UserController {
  async index(req, res) {
    const { id } = req.params;
    if (id) {
      const user = await User.findByPk(id);
      return res.status(200).send(user);
    } else {
      const users = await User.findAll();
      return res.status(200).send(users);
    }
  }

  async store(req, res) {
    const _user = req.body;
    const user = await User.create(_user);
    return res.status(200).send(user);
  }

  async remove(req, res) {
    const { id } = req.params;
    if (id) {
      await User.destroy({
        where: {
          id
        }
      });
      return res.status(204).send();
    } else {
      return res.status(400).send();
    }
  }
}

export default new UserController();