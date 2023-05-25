const Student = require("../models/Student.model");

module.exports.studentsController = {
  getStudents: (req, res) => {
    Student.find({}).then((data) => res.json(data));
  },
  createStudents: (req, res) => {
    Student.create({
      name: req.body.name,
      phone: req.body.phone,
      age: req.body.age,
    }).then(() => {
      res.json("Студент добавлен");
    });
  },
  deleteStudent:  async (req, res) => {
    const data = await Student.findByIdAndRemove(req.params.id)
    res.json("студент удален")
  },
  patchStudent: async (req, res) => {
    const dasa = await  Student.findByIdAndUpdate(req.body.id, { name: `${req.body.name}` })
    res.json(dasa)
  },
   
};
