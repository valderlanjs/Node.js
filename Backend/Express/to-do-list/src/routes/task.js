const express = require('express');

const checklistDependentRoute = express.Router();

const Checklist = require('../models/checklist');
const Task = require("../models/task");
const checklist = require('../models/checklist');

checklistDependentRoute.get('/:id/tasks/new', async (req, res) => {
    try {
        let task = Task();
        res.status(200).render('tasks/new', { checklistId: req.params.id, task: task})
    } catch {
        res.status(422).render('pages/error', { error: 'Erro ao carregar formulário' })
    }
})

checklistDependentRoute.post('/:id/tasks', async (req, res) => {
    let { name } = req.body.task;
    let task = new Task({ name, checklist: req.params.id })
    try {
       await task.save();
       let checklist = await Checklist.findById(req.params.id);
       checklist.tasks.push(task);
       await checklist.save(); 
       res.redirect(`/checklists/${req.params.id}`);
    } catch (error) {
        let errors = error.errors;
        res.status(422).render('tasks/new', { task: { ...task, errors}, checklistId: req.params.id})
    }
})

module.exports = { checklistDependent: checklistDependentRoute}