# Node.js 22 TypeScript Lambda Template

This is a template repository for AWS Lambda functions using Node.js 22 and TypeScript. It provides a modern, type-safe foundation for building serverless applications.

## Features

- Node.js 22 runtime
- TypeScript support with strict type checking
- Vitest for testing
- ESLint and Prettier for code quality
- API Gateway integration
- Example Lambda function with error handling
- Comprehensive test suite
- Conventional commits with commitlint
- Pre-commit hooks with husky
- Automated testing and linting

## Prerequisites

- Node.js 22 or later (use `nvm use` to automatically switch to the correct version)
- AWS CLI configured with appropriate credentials
- Docker (for local testing)

## Getting Started

1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/node-22-typescript-lambda-template.git
   cd node-22-typescript-lambda-template
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Build the project:

   ```bash
   npm run build
   ```

4. Run tests:
   ```bash
   npm test
   ```

## Development

The project structure is organized as follows:

```
.
├── src/                    # Source code
│   ├── index.ts           # Main Lambda handler
│   └── index.test.ts      # Tests
├── dist/                   # Compiled JavaScript (generated)
├── package.json           # Project configuration
├── tsconfig.json          # TypeScript configuration
├── vitest.config.ts       # Vitest configuration
└── README.md             # This file
```

### Available Scripts

- `npm run build` - Compile TypeScript to JavaScript
- `npm test` - Run tests once
- `npm run test:watch` - Run tests in watch mode (great for development)
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run clean` - Remove compiled files
- `npm run commit` - Create a conventional commit using commitizen

### Commit Standards

This project follows the [Conventional Commits](https://www.conventionalcommits.org/) specification. Commit messages should be structured as follows:

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

Types include:

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code changes that neither fix bugs nor add features
- `perf`: Performance improvements
- `test`: Adding or modifying tests
- `chore`: Changes to the build process or auxiliary tools
- `ci`: Changes to CI configuration files and scripts
- `build`: Changes that affect the build system or external dependencies
- `revert`: Reverts a previous commit

To create a commit, use:

```bash
npm run commit
```

This will guide you through creating a conventional commit message.

### Pre-commit Hooks

The following checks are run automatically before each commit:

- Code formatting with Prettier
- Linting with ESLint
- Running tests
- Validating commit message format

### Testing

This project uses Vitest for testing, which provides:

- Fast test execution
- Native ESM support
- Excellent TypeScript integration
- Jest-compatible syntax
- Built-in watch mode

To write tests:

1. Create a new test file with `.test.ts` extension
2. Import test utilities from Vitest:
   ```typescript
   import { describe, it, expect } from "vitest";
   ```
3. Write tests using the familiar Jest-like syntax:
   ```typescript
   describe("MyFunction", () => {
     it("should do something", () => {
       expect(result).toBe(expected);
     });
   });
   ```

Run tests with:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch
```

## Local Testing

To test the Lambda function locally:

```bash
npm run test
```

## Deployment

1. Build the project:

   ```bash
   npm run build
   ```

2. Deploy using AWS CLI:
   ```bash
   aws lambda update-function-code --function-name your-function-name --zip-file fileb://dist/index.zip
   ```

Follow the prompts to complete the deployment. The output will include the API endpoint URL.

## Customization

1. Modify `src/index.ts` to implement your Lambda function logic
2. Add new dependencies in `package.json`
3. Extend the test suite in `src/index.test.ts`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request
