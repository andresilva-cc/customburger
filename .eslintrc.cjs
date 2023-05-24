module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    '@nuxtjs/eslint-config-typescript'
  ],
  parserOptions: {
    project: ['./tsconfig.json'],
    extraFileExtensions: ['.vue']
  },
  overrides: [
    {
      files: ['**/*.js', '**/*.cjs'],
      parserOptions: {
        project: null
      }
    }
  ]
}
