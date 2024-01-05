// controllers/skills.js

// Convention is to name the model in uppercase and singular
const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create
  };

  

  function newSkill(req, res) {
    res.render('skills/new', { title: 'New Skill' });
  }

function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll()
    });
  }

function show(req, res) {
    const skill = Skill.getOne(req.params.id)
    res.render('skills/show', { skill });
}

function create(req, res) {
  console.log(req.body);
  // The model is responsible for creating data
  Skill.create(req.body);
  // Do a redirect anytime data is changed
  res.redirect('/skills');
}