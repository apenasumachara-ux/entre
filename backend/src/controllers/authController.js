// backend/src/controllers/authController.js
const passport = require("passport");
const authService = require("../services/authService");

exports.discordLoginStart = passport.authenticate("discord", {
  scope: ["identify", "email"],
});

exports.discordCallback = [
  passport.authenticate("discord", {
    failureRedirect: "/login?error=discord_auth_failed",
    session: true,
  }),
  async (req, res, next) => {
    try {
      const userData = req.user;

      if (!userData) {
        return res.redirect("/login?error=discord_no_user");
      }

      const accessToken = userData.accessToken || null;

      await authService.storeUserData(accessToken, userData);

      req.session.user = {
        id: userData.id,
        provider: "discord",
      };

      return res.redirect("/dashboard");
    } catch (error) {
      return next(error);
    }
  },
];

exports.githubLoginStart = passport.authenticate("github", {
  scope: ["user:email"],
});

exports.githubCallback = [
  passport.authenticate("github", {
    failureRedirect: "/login?error=github_auth_failed",
    session: true,
  }),
  async (req, res, next) => {
    try {
      const userData = req.user;

      if (!userData) {
        return res.redirect("/login?error=github_no_user");
      }

      const accessToken = userData.accessToken || null;

      await authService.storeUserData(accessToken, userData);

      req.session.user = {
        id: userData.id,
        provider: "github",
      };

      return res.redirect("/dashboard");
    } catch (error) {
      return next(error);
    }
  },
];