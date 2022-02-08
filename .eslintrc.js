module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'react-native/no-inline-styles': 2,
    'react-native/no-unused-styles': 1,
    'react/jsx-pascal-case': 2,
    'react/react-in-jsx-scope': 2,
    'react-hooks/rules-of-hooks': 2,
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
  },
};
