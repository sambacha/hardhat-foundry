module.exports = {
  extends: [`${__dirname}/../.eslintrc.js`],
  rules: {
    'import/no-extraneous-dependencies': [
      'warn',
      {
        devDependencies: true,
      },
    ],
  },
};
