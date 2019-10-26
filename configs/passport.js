 
var JwtStrategy = require('passport-jwt').Strategy,
ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../server/models/User');
module.exports =(passport)=>{
    const jwtOptions = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
        secretOrKey: '12345'
    }
    
    const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
       // console.log(payload);
        User.findById(payload._id, function(err, _user) {
          if (err) return done(err, false);
          if (_user) {
            done(null, _user);
          } else {
            done(null, false);
          }
        });
    });
    passport.use(jwtLogin);
}
