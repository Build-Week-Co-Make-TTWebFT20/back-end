const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../../config/secret');
const User = require('../users/user-model');
const {isValid} = require('../users/user-service');

router.post('/register', (req, res) => {
    const credentials = req.body;

    if (isValid(credentials)) {
        const rounds = process.env.BCRYPT_ROUNDS || 8;
        const hash = bcrypt.hashSync(credentials.password, rounds);
        credentials.password = hash;

        User.add(credentials)
            .then(user => {
                res.status(201).json({ data: `Successfully registered a new user, ${user.username}`})
            })
            .catch(err => {
                console.log(err.message)
                res.status(500).json({ errorMessage: "Internal server error"})
            })
    } else {
        res.status(400).json({
            message: "Please provide both a username and a password. The pasword should be alphanumeric"
        });
    };
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;

    if(isValid(req.body)){
        User.findBy({ username: username})
            .then(user => {
                if(user && bcrypt.compareSync(password, user.password)) {
                    const token = generateToken(user);
                    res.status(200).json({ message: "You have been successfully logged in", token, userId: user.id })
                } else {
                    res.status(401).json({ message: "Invalid credentials" })
                }
            })
            .catch(err => {
                console.log(err.message);
                res.status(500).json({ message: "Internal server error"})
            })
    } else {
        res.status(400).json({
            message: "Please provide a username and password. The password should be alphanumeric"
        });
    };
});

function generateToken(user){
    const payload = {
        subject: user.id,
        username: user.username,
        role: user.role,
    }
    const options = {
        expiresIn: '2h'
    }
    return jwt.sign(payload, jwtSecret, options);
}

module.exports = router;