let time = function(){
  let t = new Date().toString();
  
  return { "time": t }
}

let logger = function(req, res){
  
    let string = `${req.method} ${req.path} - ${req.ip}`;

    if(string === undefined){
      console.log('Logger: ', string);
    }
    else{
      console.log(string);
      //res.json({ 'Status' : 'OK' });
    }
}

module.exports.time = time;
module.exports.logger = logger;