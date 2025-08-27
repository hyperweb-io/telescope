# Troubleshooting

This document provides solutions for common issues encountered when using Telescope and Telescope-generated code.

## Common Issues

### Webpack Configuration in Create React App

When using Telescope-generated code with Create React App (CRA), you might encounter issues with polyfills and certain modules not being properly resolved due to CRA's webpack configuration restrictions.

#### Solution

You need to customize the webpack configuration. Since CRA doesn't allow direct webpack configuration modifications, you can use `react-app-rewired` to override the default configuration:

1. Install required packages:

```sh
npm install --save-dev react-app-rewired customize-cra
```

2. Create a `config-overrides.js` file in the root of your project:

```js
const { override, addWebpackAlias, addWebpackPlugin } = require('customize-cra');
const webpack = require('webpack');

module.exports = override(
  // Add polyfills and resolve issues
  addWebpackPlugin(
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
      process: 'process/browser',
    })
  ),
  addWebpackAlias({
    'stream': 'stream-browserify',
    'path': 'path-browserify',
    'crypto': 'crypto-browserify',
    'http': 'stream-http',
    'https': 'https-browserify',
    'os': 'os-browserify/browser',
  })
);
```

3. Modify your `package.json` scripts to use `react-app-rewired`:

```json
"scripts": {
  "start": "react-app-rewired start",
  "build": "react-app-rewired build",
  "test": "react-app-rewired test",
  "eject": "react-scripts eject"
}
```

4. Install the necessary polyfill packages:

```sh
npm install --save-dev buffer process stream-browserify path-browserify crypto-browserify stream-http https-browserify os-browserify
```

### Babel Configuration

If you're using a custom Babel setup, you might encounter syntax errors with features like numeric separators or optional chaining that are used in Telescope-generated code.

#### Solution

Make sure your Babel configuration includes the necessary plugins:

```sh
npm install --save-dev @babel/plugin-proposal-numeric-separator @babel/plugin-proposal-optional-chaining @babel/plugin-proposal-nullish-coalescing-operator
```

Add these plugins to your `.babelrc` or `babel.config.js`:

```json
{
  "plugins": [
    "@babel/plugin-proposal-numeric-separator",
    "@babel/plugin-proposal-optional-chaining",
    "@babel/plugin-proposal-nullish-coalescing-operator"
  ]
}
```

Or if you're using a preset:

```json
{
  "presets": [
    ["@babel/preset-env", {
      "targets": {
        "browsers": ["last 2 versions", "not dead"]
      }
    }]
  ]
}
```

### Long Type Errors

When using Telescope-generated code, you might see extremely long and complex TypeScript errors that are difficult to understand.

#### Solution

1. Use a specific TypeScript version that works well with CosmJS (4.7.x or later recommended)
2. Simplify your types with type assertions in places where TypeScript is having trouble
3. Add `//@ts-ignore` comments for problematic lines as a last resort
4. Enable the `useDeepPartial` option in your Telescope configuration to simplify partial types

### Module Resolution Issues

You might encounter "Cannot find module" errors when importing from Telescope-generated code.

#### Solution

Check your `tsconfig.json` to ensure it has the correct module resolution settings:

```json
{
  "compilerOptions": {
    "target": "es2020",
    "module": "esnext",
    "moduleResolution": "node",
    "esModuleInterop": true,
    "resolveJsonModule": true,
    "baseUrl": "."
  }
}
```

### Browser Compatibility Issues

Telescope-generated code uses modern JavaScript features that might not be compatible with older browsers.

#### Solution

1. Ensure you have proper polyfills added to your project
2. Configure Babel to target the browsers you need to support
3. Consider using a tool like `core-js` for comprehensive polyfills:

```sh
npm install core-js
```

Then import it at the top of your entry file:

```js
import 'core-js/stable';
```

### WebAssembly Support

Some CosmJS dependencies use WebAssembly, which might cause issues in certain environments.

#### Solution

Make sure your bundler is configured to handle WebAssembly files (.wasm). For webpack:

```js
module.exports = {
  // ...
  experiments: {
    asyncWebAssembly: true,
  },
};
```

### Specific Blockchain Issues

#### Transaction Broadcasting Fails

If transactions are being rejected by the network:

1. Ensure account sequence is correct
2. Verify gas settings are appropriate
3. Check that the chain ID matches the network you're connecting to
4. Verify that the RPC endpoint is functioning correctly

#### Query Errors

If queries are failing:

1. Check the RPC or API endpoint URL
2. Ensure the blockchain node is synchronized
3. Verify query parameters are correctly formatted
4. Check for rate limiting issues

## Debugging Tips

### Enable Console Logging

Add more verbose logging to help identify issues:

```typescript
const client = await SigningStargateClient.connectWithSigner(
  rpcEndpoint,
  signer,
  { 
    logger: new ConsoleLogger("debug") 
  }
);
```

### Capture Error Details

Ensure you're capturing and logging full error details:

```typescript
try {
  // Your code
} catch (error) {
  console.error("Detailed error:", {
    message: error.message,
    name: error.name,
    stack: error.stack,
    details: error.details || "no details",
    data: error.data || "no data",
    code: error.code || "no code"
  });
}
```

### Network Monitoring

Use browser developer tools to monitor network requests:

1. Open your browser's developer tools (F12)
2. Go to the Network tab
3. Filter for XHR/Fetch requests
4. Look for requests to RPC endpoints
5. Examine request payloads and response data

## Getting Help

If you encounter issues not covered in this document:

1. Check the [GitHub Issues](https://github.com/hyperweb-io/telescope/issues) for similar problems
2. Ask on the [Cosmos Developer Discord](https://discord.gg/cosmosnetwork) in the #developers channel
3. For Telescope-specific help, reach out in the #telescope channel on Discord
4. [Submit an issue](https://github.com/hyperweb-io/telescope/issues/new) with a complete description, including:
   - Error messages
   - Telescope version
   - Node.js version
   - Operating system
   - Steps to reproduce the issue 