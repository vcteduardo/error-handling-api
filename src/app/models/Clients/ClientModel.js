const Mongoose = require('mongoose');

const ClientModel = new Mongoose.Schema(
  {
    name: {
      type: String,
    },
    address: new Mongoose.Schema({
      zip_code: String,
      street: String,
      number: String,
      complement: String,
      neighborhood: String,
      state: String,
      city: String,
      country: String,
    }),
    deleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
);

module.exports = Mongoose.model('Client', ClientModel);
