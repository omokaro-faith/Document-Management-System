import db from '../models';

const Roles = {
  /**
   * Create a new Role
   * @param {Object} req - Request object
   * @param {Object} res - Response object
   * @return {void}
   */
  createRole(req, res) {
    db.Roles.findOne({ where: { title: req.body.title } })
    .then((roleExist) => {
      if (roleExist) {
        return res.status(400).send({
          message: 'Role Title Already Exist',
        });
      }
      db.Roles.create({
        title: req.body.title,
      })
      .then(role => res.status(201).send(role))
      .catch(err => res.status(400).send({
        message: err,
      }));
    });
  },
/**
   * List all Roles
   * @param {Object} req - Request object
   * @param {Object} res - Response object
   * @return {void}
   */
  getRoles(req, res) {
    db.Roles.findAll()
    .then((roles) => {
      res.status(200)
      .send(roles);
    });
  },
/**
   * Retrieve a Role based on id with all users on that role
   * @param {Object} req - Request object
   * @param {Object} res - Response object
   * @return {void}
   */
  getRolesById(req, res) {
    db.Roles
      .findById(req.params.id)
      .then((role) => {
        if (!role) {
          return res.status(404).send({
            message: 'Role Does Not Exist',
          });
        }
        res.status(200).send(role);
      })
      .catch(() => res.status(400).send({
        message: 'An error occured',
      }));
  },

/**
   * Delete a Role based on id
   * @param {Object} req - Request object
   * @param {Object} res - Response object
   * @return {void}
   */
  deleteRole(req, res) {
    db.Roles
      .findById(req.params.id)
      .then((role) => {
        if (!role) {
          return res.status(404).send({
            message: 'Role Does Not Exist',
          });
        }
        if (role.title === 'regular' || role.title === 'admin') {
          return res.status(400).send({
            message: 'Cannot Delete Default Roles',
          });
        }
        role
          .destroy()
          .then(() => res.status(200).send({
            message: 'Role deleted',
          }));
      })
      .catch(() => res.status(400).send({
        message: 'An error occured',
      }));
  },

   /**
   * Update a Role based on id
   * @param {Object} req - Request object
   * @param {Object} res - Response object
   * @return {void}
   */
  updateRole(req, res) {
    db.Roles.findOne({ where: { title: req.body.title } })
    .then((roleExist) => {
      if (roleExist) {
        return res.status(400).send({
          message: 'Cannot Edit Default Roles',
        });
      }
      db.Roles.findById(req.params.id)
      .then((role) => {
        if (!role) {
          return res.status(404).send({
            message: 'Role Does Not Exist',
          });
        }
        if (role.title === 'regular' || role.title === 'admin') {
          return res.status(400).send({
            message: 'An error occured',
          });
        }
        role
          .update(req.body, {
            fields: Object.keys(req.body),
          })
          .then(updatedRole => res.status(200).send({
            message: 'Update Successful', updatedRole,
          }));
      })
      .catch(() => res.status(400).send({
        message: 'An error occured',
      }));
    });
  },
};
export default Roles;
