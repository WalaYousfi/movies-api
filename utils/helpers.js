import jwt from "jsonwebtoken";

export function generateToken(id) {
  return jwt.sign({ id }, process.env.SECRET_KEY);
}

export function asyncHandler(fn) {
  return (req, res, next) => {
    return Promise.resolve(fn(req, res, next).catch(next));
  };
}

// app.get("/users", async (req, res) => {
//   const users = await User.find();
//   res.json(users);
// });

// app.get(
//   "/users",
//   asyncHandler(async (req, res) => {
//     const users = await User.find();
//     res.json(users);
//   })
// );

// app.use((err, req, res,next) => {
// res.status(500).json( {message: err.message})
// });
