import jwt from "jsonwebtoken";

export function authenticateAdmin(req, res, next) {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: "unauthorized" });
  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) return res.status(403).json({ message: "forbidden" });
    next();
  });
}
