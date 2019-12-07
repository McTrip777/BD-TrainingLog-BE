const jwt = require('jsonwebtoken');
const secret = require('../secret').jwtSecret

module.exports = {
    authorization
}

function authorization(req, res, next){
    const token = req.get('Authorization');

    if(token){
        jwt.verify(token, secret, (err, decoded) => {
            if(err) {
                return res.status(401).send("authorization failed");
            }

            req.decoded = decoded;

            next();
        });
    } else {
        res.status(401).json({
            error: 'No token provided'
        })
    }
    // const bearerHeader = req.header['authorization']

    // if(typeof bearerHeader !== 'undefined'){
    //     const bearer = bearerHeader.split(' ')
    //     const bearerToken = bearer[1]

    //     req.token = bearerToken

    //     next()
    // }else{
    //     res.status(403).json('You are not authorized for this.')
    // }
}