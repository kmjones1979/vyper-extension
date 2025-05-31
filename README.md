# 🐍 Scaffold-ETH 2 Vyper Extension

A Scaffold-ETH 2 extension that replaces Solidity with Vyper for smart contract development. This extension provides a complete setup for developing, testing, and deploying smart contracts using the Vyper programming language.

## 🌟 Features

- **Vyper v0.4.0 Support**: Latest Vyper compiler with modern syntax features
- **Hardhat Integration**: Seamless integration with Hardhat using `@nomiclabs/hardhat-vyper`
- **Sample Contract**: Equivalent Vyper implementation of the default YourContract
- **Modern Vyper Syntax**: Uses `@deploy` decorator, `immutable` variables, and other v0.4.0 features
- **Full Compatibility**: Works with all existing Scaffold-ETH 2 features and hooks

## 🚀 Quick Start

Create a new Scaffold-ETH 2 project with Vyper support:

```bash
npx create-eth@latest -e scaffold-eth/vyper-extension
```

## 📋 What's Included

### Smart Contracts

- **YourContract.vy**: A Vyper implementation of the default contract featuring:
  - State variables with proper typing
  - Events with indexed parameters
  - Constructor with `@deploy` decorator
  - Payable functions
  - Owner-only functions with assertions
  - ETH withdrawal functionality

### Configuration

- **Hardhat Config**: Pre-configured with Vyper v0.4.0 compiler
- **Dependencies**: Includes `@nomiclabs/hardhat-vyper` plugin
- **Deployment Scripts**: Updated to deploy Vyper contracts

### Key Differences from Solidity

| Feature     | Solidity             | Vyper                          |
| ----------- | -------------------- | ------------------------------ |
| Constructor | `constructor()`      | `@deploy def __init__():`      |
| Modifiers   | `modifier isOwner()` | Direct assertions in functions |
| Events      | `emit EventName()`   | `log EventName()`              |
| Immutable   | `immutable`          | `immutable(type)`              |
| Fallback    | `receive()`          | `@payable def __default__():`  |

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

## 📖 Vyper Resources

- [Vyper Documentation](https://docs.vyperlang.org/)
- [Vyper by Example](https://vyper-by-example.org/)
- [Hardhat Vyper Plugin](https://hardhat.org/hardhat-runner/plugins/nomiclabs-hardhat-vyper)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

