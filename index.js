/* eslint-disable @typescript-eslint/naming-convention */
module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    souceType: "module",
    project: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/strict-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "prettier",
    "plugin:import/typescript",
  ],
  plugins: ["@typescript-eslint", "import"],
  settings: {
    "import/resolver": {
      typescript: {},
    },
    "import/ignore": ["node_modules", "\\.json$"],
  },
  env: { node: true, jest: true, es6: true },
  rules: {
    //
    // Import plugin
    //
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: ["**/test/**", "**/__tests__/**", "**/scripts/**"],
      },
    ],
    "import/named": ["off"],
    "import/extensions": ["error", { js: "never", json: "always" }],
    "import/prefer-default-export": ["off"],
    "import/no-default-export": ["error"],

    //
    // TypeScript
    //
    camelcase: ["off"],
    "consistent-return": ["off"],
    "import/no-unresolved": ["off"],
    "@typescript-eslint/ban-ts-comment": ["error", { "ts-expect-error": "allow-with-description" }],
    "@typescript-eslint/explicit-function-return-type": ["error"],
    "@typescript-eslint/naming-convention": ["error"],
    "@typescript-eslint/no-explicit-any": ["error"],
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "no-use-before-define": ["off"],
    "@typescript-eslint/no-use-before-define": ["error"],
    "@typescript-eslint/no-non-null-assertion": ["error"],
    "no-useless-constructor": ["off"],
    "@typescript-eslint/no-useless-constructor": ["error"],
    "no-dupe-class-members": "off",
    "@typescript-eslint/no-dupe-class-members": ["error"],
    "no-shadow": ["off"],
    "@typescript-eslint/no-shadow": ["error"],
    "@typescript-eslint/strict-boolean-expressions": [
      "error",
      {
        allowString: false,
        allowNumber: false,
        allowNullableObject: false,
        allowNullableBoolean: true,
        allowNullableString: false,
        allowNullableNumber: false,
        allowAny: false,
        allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
      },
    ],

    //
    // Best Practices
    //
    "class-methods-use-this": ["off"],
    curly: ["error"],
    "lines-around-directive": ["off"],
    "lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }],
    "max-classes-per-file": ["off"],
    "no-console": ["off"],
    "no-constant-condition": ["off"],
    "no-continue": ["off"],
    "no-else-return": ["off"],
    "no-nested-ternary": ["off"],
    "no-param-reassign": ["error", { props: false }],
    "no-plusplus": ["off"],
    "no-restricted-syntax": [
      "error",
      {
        selector: "ThrowStatement",
        message:
          "`throw` leads to convoluted code that is hard to follow. Consider returning an error value instead. If the situation is truly exceptional, use `panic`.",
      },
      {
        selector: "TryStatement",
        message:
          "`try` leads to convoluted code and treats common errors as exceptional. Use Result.of instead.",
      },
    ],
    "no-ternary": ["error"],
    "no-underscore-dangle": ["off"],
    "prefer-destructuring": ["error", { object: true, array: false }],
    "spaced-comment": ["error", "always", { markers: ["/"] }],
  },
};
