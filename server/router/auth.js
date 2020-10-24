const router = require('express').Router();
const User = require('../model/User');
const bcrypt = require('bcrypt');

router.post('/users/register',async (req,res) => {
    const {name,phone} = req.body;
    const newUser = new User({
        name,phone
    });
    newUser.save();
    res.status(201).json(newUser);
})

router.post('/users/login', async (req,res) => {
    const {indentifier,password} = req.body;
    await User.find({$or:{phone:indentifier,email:indentifier,username:indentifier}},(err,user) => {
        if(user){
          bcrypt.compare(password,user.password).then(isMatch => {
              if(isMatch){
                jwt.sign({ id: user._id }, process.env.SECRET, { expiresIn: '1d' }, function (err, token) {
                    return res.json({
                        success: true,
                        token
                    })
                })
              } else{
                 res.status(404).json('Passwords doen not match');
              }
          })
        }else{
            res.status(404).json('User not found');
        }
    })
})

module.exports = router;