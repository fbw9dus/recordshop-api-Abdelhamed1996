const {check} = require('express-validator')

exports.userValidationRules = [
    //check email
    check('email').isEmail().normalizeEmail().withMessage('bitte prüfen Sie Email Adresse'),
    //check first name
    check('firstName').exists().withMessage('Vorname ist pflicht'),

    check('password').isLength({min:10}).trim().withMessage('Die passwort muss mindesten 10 stellen haben')


]