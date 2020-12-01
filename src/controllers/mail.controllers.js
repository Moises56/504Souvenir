var nodemailer = require('nodemailer');
var passport =require('passport');
const app = require('../server');
const User = require('../models/User');

// email sender function

exports.sendEmail = async function(req, res){
    const {email} = req.body;

const emailUser = await User.findOne({ email: email });
    if(emailUser){

        //---------------------------------------

        function generateToken() {
          var buf = new Buffer.alloc(16);
          for (var i = 0; i < buf.length; i++) {
              buf[i] = Math.floor(Math.random() * 256);
          }
          var id = buf.toString('base64');
          return id
     }
     var token = generateToken();
     guardarToken(token); 

     function guardarToken(token) {
        User.findOne({ email: req.body.email }, function(err, user) {
           
  
          user.resetPasswordToken = token;
          user.resetPasswordExpires = Date.now() + 3600000; // 1 hora
  
          user.save();
          
        });
    }


    
     
        // Definimos el transporter
        var transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'souvenirs504@gmail.com',
                pass: 'Correo123.'
            }
        });
    // Definimos el email
    var mailOptions = {
        from: '504venir <souvenirs504@gmail.com>',
        to: req.body.email,
        subject: 'Recuperar Contraseña',
        html: '<body text="#528cc3"><tablestyle="max-width: 600px; padding: 10px; margin:0 auto; border-collapse: collapse;><center><img src="https://i.ibb.co/SmWTtGL/logo1.png"><br><b>Reiniciar Contraseña:<br>Hola<br> <strong>Está recibiendo esto porque ha solicitado el restablecimiento de la contraseña de su cuenta.</strong><br> Copie el siguente token y en la ventana de restablecer su contraseña peguelo en la casilla Codigo:<br></b></p><center/><table/><body>'+token+'<br><br><center><b>Souvernis 504</b></center>'
        // 'Está recibiendo esto porque usted (u otra persona) ha solicitado el restablecimiento de la contraseña de su cuenta.\n\n' +
        //      '                Copie el siguente token y peguelo en ventana de restablecer su contraseña:                            \n' +
        //      '                                     '+ token+'\n ' +
        //      '     Si no solicitó esto, ignore este correo electrónico y su contraseña permanecerá sin cambios.\n',
    };
    // Enviamos el email
    transporter.sendMail(mailOptions, function(error, info){
        if (error){
            console.log(error);
            res.send(500, error.message);
        } else {
            console.log("Email Enviado");
            req.flash('success_msg', 'Comprueba la bandeja de entrada de tu email');
            res.redirect('/users/newPass');
        }
    });
    
    /*transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            res.status(500).send(error.message);
        }else{
            console.log("Email Enviado");
            req.flash('success_msg', 'Correo Enviado.');
            res.redirect('/users/recuperar');
        }
    });*/
    }else{
        req.flash('error_msg', `El correo ${req.body.email} no pertenece a ninguna cuenta.`);
        res.redirect('/users/recuperar');
    }
    
    };

    /*var express = require('express');
    var logger = require('morgan');
    var cookieParser = require('cookie-parser');
    var bodyParser = require('body-parser');
    var session = require('express-session')
    var mongoose = require('mongoose');
    var nodemailer = require('nodemailer');
    var passport = require('passport');
    var LocalStrategy = require('passport-local').Strategy;
    var bcrypt = require('bcrypt-nodejs');
    var async = require('async');
    var crypto = require('crypto');
    var path = require('path');
const router = require('../routes/users.routes');
    
    const app = express();

    router.post('/recuperar', function(req, res, next) {
        async.waterfall([
          function(done) {
            crypto.randomBytes(20, function(err, buf) {
              var token = buf.toString('hex');
              done(err, token);
            });
          },
          function(token, done) {
            User.findOne({ email: req.body.email }, function(err, user) {
              if (!user) {
                req.flash('error', 'No account with that email address exists.');
                return res.redirect('/recuperar');
              }
      
              user.resetPasswordToken = token;
              user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
      
              user.save(function(err) {
                done(err, token, user);
              });
            });
          },
          function(token, user, done) {
            var smtpTransport = nodemailer.createTransport('SMTP', {
              service: 'Gmail',
              auth: {
                user: 'souvenirs504@gmail.com',
                pass: 'souvenirs123'
              }
            });
            var mailOptions = {
              to: user.email,
              from: 'passwordreset@demo.com',
              subject: 'Node.js Password Reset',
              text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
                'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
                'http://' + req.headers.host + '/reset/' + token + '\n\n' +
                'If you did not request this, please ignore this email and your password will remain unchanged.\n'
            };
            smtpTransport.sendMail(mailOptions, function(err) {
              req.flash('info', 'An e-mail has been sent to ' + user.email + ' with further instructions.');
              done(err, 'done');
            });
          }
        ], function(err) {
          if (err) return next(err);
          res.redirect('/recuperar');
        });
      });*/


    