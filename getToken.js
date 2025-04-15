const getToken = (req) => {
    if(!req.headers.authorization){
      return;
    } else {
      return req.headers.authorization.split(" ")[1];
    }
}

exports.getToken = getToken;