module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    semi: "off",
    'jsx-quotes': ['warn', 'prefer-single'],
    curly: 'off',
  },
}
