// controllers/skills.js

// Convention is to name the model in uppercase and singular
const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    create,
    delete: deleteSkill
  };

  function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
  }

function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll()
    });
  }

function show(req, res) {
  res.render('skills/show', { 
    skill: Skill.getOne(req.params.id)
  })
}

function create(req, res) {
  Skill.create(req.body);
  res.redirect('/skills');
}
