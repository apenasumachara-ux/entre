const passport = require("passport");
const DiscordStrategy =
  require("passport-discord").Strategy;

const userModel =
  require("../models/userModel");

passport.serializeUser(
  (user, done) => {
    done(null, user.id);
  }
);

passport.deserializeUser(
  async (id, done) => {
    try {
      const user =
        await userModel.findById(id);

      done(null, user);
    } catch (err) {
      done(err, null);
    }
  }
);

passport.use(
  new DiscordStrategy(
    {
      clientID:
        process.env.DISCORD_CLIENT_ID,

      clientSecret:
        process.env.DISCORD_CLIENT_SECRET,

      callbackURL:
        "http://localhost:3001/auth/discord/callback",

      scope: ["identify", "email"]
    },

    async (
      accessToken,
      refreshToken,
      profile,
      done
    ) => {
      try {
        let user =
          await userModel.findByDiscordId(
            profile.id
          );

        if (!user) {
          user = await userModel.create({
            username:
              profile.username,

            email:
              profile.email,

            avatar:
              profile.avatar,

            discord_id:
              profile.id,

            github_id: null
          });
        }

        return done(null, user);

      } catch (err) {
        return done(err, null);
      }
    }
  )
);

module.exports = passport;