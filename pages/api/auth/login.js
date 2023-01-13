import jwt from "jsonwebtoken";

export default function loginHandler(req, res) {
  const { email, password } = req.body;

  if (email === "ashketchum@pokedex.com" && password === "123456789") {
    const token = jwt.sign(
      {
        exp: 60 * 60 * 24 * 30,
        email: email,
        password: password,
      },
      process.env.JWT_SECRET
    );

    return res.json({ token: token, success: "login succesfully!" });
  }

  return res.json({ error: "invalid password or email" });
}
