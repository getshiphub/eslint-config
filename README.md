# @shiphub/eslint-config

Shiphub's ESLint configuration. This config assumes TypeScript.

## Usage

Install with yarn:

```sh
yarn add @shiphub/eslint-config @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-import-resolver-typescript eslint-plugin-import eslint-plugin-prettier --dev
```

Then add it to your eslint config's `extends`:

```json
{
    "extends": ["@shiphub"]
}
```
