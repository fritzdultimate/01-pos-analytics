module.exports = {
    extends: [
        '@nuxtjs/eslint-config-typescript',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ],
    rules: {
        'prettier/prettier': ['error', {}, { usePrettierrc: true }],
      },
  }
