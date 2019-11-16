const parseCookies = (req, res, next) => {
  console.log(req.headers);
  if (req.headers.cookie) {
    var cookiesArr = req.headers.cookie.split('; ');
    cookiesArr.forEach((cookie) => {
      var equalSign = cookie.indexOf('=');
      var key = cookie.substring(0, equalSign);
      var value = cookie.substring(equalSign + 1);
      req.cookies[key] = value;
    });
  } else {
    req.cookies = {};
  }

  next();
};

module.exports = parseCookies;