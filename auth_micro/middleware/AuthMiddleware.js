import jwt from "jsonwebtoken";

//Verify Authorization for each API Request
const authMiddleware = (req, res, next) => {
  
  const authHeader = req.headers.authorization;
  if (authHeader === null || authHeader === undefined) {
    return res.status(401).json({ status: 401, message: "UnAuthorized" });
  }

  const token = authHeader.split(" ")[1];

  // * Verify token
  jwt.verify(token, process.env.JWT_SECRET, { algorithms: ['HS256'] }, (err, payload) => {
    if (err)
      return res.status(401).json({ status: 401, message: "UnAuthorized" });

    req.user = payload;
    next();
  });
};

export default authMiddleware;
