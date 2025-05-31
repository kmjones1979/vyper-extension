# 🐍 Scaffold-ETH 2 Vyper Extension

A Scaffold-ETH 2 extension that replaces Solidity with Vyper for smart contract development. This extension provides a complete setup for developing, testing, and deploying smart contracts using the Vyper programming language.

## 🌟 Features

- **Vyper v0.4.0 Support**: Latest stable Vyper compiler with modern syntax
- **Hardhat Integration**: Seamless integration with Hardhat using `@nomiclabs/hardhat-vyper`
- **Sample Contract**: Equivalent Vyper implementation of the default YourContract
- **Modern Vyper Syntax**: Uses `@deploy`, `@external`, `@payable`, and other standard Vyper features
- **Full Compatibility**: Works with all existing Scaffold-ETH 2 features and hooks
- **Automatic Setup**: Post-install script automatically configures Vyper

## 🚀 Quick Start

Create a new Scaffold-ETH 2 project with Vyper support:

```bash
npx create-eth@latest -e kmjones1979/vyper-extension
```

```bash
cd <your_project_name>
```

The extension automatically configures:

- ✅ Vyper plugin import
- ✅ Vyper v0.4.0 compiler configuration
- ✅ Sample Vyper contract (YourContract.vy)
- ✅ Deployment scripts

**Start your development environment**:

```bash
yarn chain        # In terminal 1
yarn start        # In terminal 2
yarn deploy       # In terminal 3
```

That's it! Your Vyper dApp is ready to go! 🎉

## 📋 What's Included

### Smart Contracts

- **YourContract.vy**: A Vyper implementation of the default contract featuring:
  - State variables with proper typing
  - Events with indexed parameters
  - Constructor function
  - Payable functions
  - Owner-only functions with assertions
  - ETH withdrawal functionality

### Key Differences from Solidity

| Feature     | Solidity             | Vyper                          |
| ----------- | -------------------- | ------------------------------ |
| Constructor | `constructor()`      | `@deploy def __init__():`      |
| Modifiers   | `modifier isOwner()` | Direct assertions in functions |
| Events      | `emit EventName()`   | `log EventName()`              |
| Immutable   | `immutable`          | `immutable(type)`              |
| Fallback    | `receive()`          | `@payable def __default__():`  |

## 🛠️ Troubleshooting

### "cannot find artifact YourContract" Error

This error occurs when the Vyper plugin isn't properly configured. The extension should handle this automatically, but if you encounter issues:

1. **Verify the setup ran correctly**:

```bash
cd packages/hardhat
yarn setup-vyper
```

2. **Check the imports** in `hardhat.config.ts`:

```typescript
import "@nomiclabs/hardhat-vyper"; // Should be present
```

3. **Check the vyper configuration**:

```typescript
vyper: {
  version: "0.4.0",
},
```

4. **Clean and recompile**:

```bash
yarn clean && yarn compile
```

### TypeScript Errors

If you see TypeScript errors about unknown properties, ensure the Vyper import is properly placed in `hardhat.config.ts`. The setup script handles this automatically.

### Version Compatibility Issues

If you encounter version pragma mismatches:

- Ensure contract uses `# @version ^0.4.0`
- Ensure config uses `version: "0.4.0"`
- Both must match exactly

## 🔧 Development

### Compiling Contracts

```bash
yarn compile
```

### Deploying Contracts

```bash
yarn deploy
```

### Running Tests

```bash
yarn test
```

## ⚙️ How It Works

The extension uses a combination of:

1. **Template Args**: Adds the Vyper plugin import via `hardhat.config.ts.args.mjs`
2. **Setup Script**: Automatically adds Vyper configuration section after install
3. **Post-install Hook**: Runs setup script automatically via `package.json`

This ensures seamless integration with Scaffold-ETH 2's build system.

## 🚀 Publishing Your Extension

To share this extension with others:

1. **Push to GitHub**: Upload the extension directory to a GitHub repository
2. **Share the command**: Others can use your extension with:

```bash
npx create-eth@latest -e {your-github-username}/{vyper-extension-repo}
```

The extension is now fully compatible with Scaffold-ETH 2's extension system and provides a complete Vyper development environment out of the box!

## �� Vyper Resources

- [Vyper Documentation](https://docs.vyperlang.org/)
- [Vyper by Example](https://vyper-by-example.org/)
- [Hardhat Vyper Plugin](https://hardhat.org/hardhat-runner/plugins/nomiclabs-hardhat-vyper)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.
