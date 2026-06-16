const express = require("express");
const passport = require("passport");

const router = express.Router();

router.get(
  "/discord",
  passport.authenticate("discord")
);

router.get(
  "/discord/callback",
  passport.authenticate("discord", {
    failureRedirect: "/auth/failure"
  }),
  (req, res) => {
    res.json(req.user);
  }
);

router.get("/me", (req, res) => {
  if (!req.user) {
    return res.status(401).json({
      error: "Não autenticado"
    });
  }

  res.json(req.user);
});

router.get("/failure", (req, res) => {
  res.status(401).json({
    error: "Falha na autenticação"
  });
});

router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }

    req.session.destroy(() => {
      res.json({
        message: "Logout realizado"
      });
    });
  });
});

module.exports = router;