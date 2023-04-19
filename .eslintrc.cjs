module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
	  "standard",
    "plugin:react/recommended",
  ],
  overrides: [
  ],
	parser: "@typescript-eslint/parser",
  parserOptions: {
		project: "./tsconfig.json",
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: [
    "react"
  ],
  rules: {
	  "semi": ["warn", "always"],
	  "quotes": ["warn", "double"]
  },
	settings: {
		react: {
			version: "detect"
		}
	}
}
