const {check} = require('express-validator')

exports.userValidationRules = [
    //check email
    check('email').isEmail().withMessage('bitte überbruf deine Email Adresse'),
    //check first name
    check('firstName').exists().withMessage('Vorname ist pflicht'),

    check('password').isLength({min:10}).withMessage('Die passwort muss mindesten 10 stellen haben')


]