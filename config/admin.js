module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c29855c5a7b05d8baece68c1cfcce638'),
  },
});
