const TodoEntitie = {
  title: {
    type: String,
    required: true,
    unique: true,
    maxlength: 25,
    minlength: 3,
    trim: true,
  },
  desc: { type: String, required: true },
};

module.exports = TodoEntitie;
