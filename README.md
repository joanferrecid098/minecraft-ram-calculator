# Minecraft RAM Calculator

[![NPM Version](https://img.shields.io/npm/v/minecraft-ram-calculator.svg)](https://www.npmjs.com/package/minecraft-ram-calculator)
[![License](https://img.shields.io/github/license/joanferrecid098/minecraft-ram-calculator)](https://github.com/joanferrecid098/minecraft-ram-calculator/blob/main/LICENSE)

The Minecraft RAM Calculator is an npm package that simplifies the process of determining how much RAM is required for your Minecraft server, based on various server and player-related factors. This tool helps server administrators optimize their server's performance by ensuring they allocate the appropriate amount of memory.

## Features

- Easy-to-use JavaScript library for calculating required RAM.
- Supports various Minecraft server configurations and player counts.
- Provides recommendations for optimal RAM allocation.
- Helps prevent server lag and crashes due to insufficient memory.

## Installation

You can install the Minecraft RAM Calculator package via npm:

```bash
npm install minecraft-ram-calculator
```

## Usage

```javascript
const mrc = require('minecraft-ram-calculator');

// Example usage:
const maxPlayersPerInstance = 8; // Set the maximum players on the instance
const maxInstances = 7; // Set your maximum instances here.

const numPlayers = 100; // The number of players on your server
const ramNeeded = mrc(numPlayers, maxPlayersPerInstance, maxInstances);
console.log(`For ${numPlayers} players, you need ${ramNeeded.ramNeeded} GB RAM.`);
console.log(`This will use ${ramNeeded.instances} instances, leaving ${ramNeeded.playersLeftOut} players left out.`);
```

### Instances

You will have to define the max players you want in every instance. For example, as bedwars solos have the limit of 8 players, this value will be 8.
If you don't want to have a limit, set this to a very high number like 1000000.

The max instances is to limit the amount of instances to save computing power. You can do the same if you don't want a limit.

## Configuration

You can customize the `serverProperties` object to match your server's specific settings. The `calculateRAM` function will take these properties into account when making its recommendation.

## License

This project is licensed under the [MIT License](LICENSE).

## Contributing

We welcome contributions from the community! To contribute to the Minecraft RAM Calculator project, follow these steps:

1. Fork this repository.

2. Clone your forked repository to your local machine.

3. Create a new branch for your contribution:

```bash
   git checkout -b feature/my-contribution
```

Replace `feature/my-contribution` with a descriptive branch name.

4. Make your changes and commit them with clear and concise commit messages.

5. Push your changes to your forked repository:

```bash
   git push origin feature/my-contribution
```

6. Create a pull request (PR) from your forked repository to this main repository.

7. Describe your changes and the rationale behind them in the PR description.

8. Our team will review your PR, provide feedback if needed, and merge it when it's ready.

Thank you for contributing to the Minecraft RAM Calculator project!

## Support

If you have any questions, issues, or feature requests, please open an issue on our [GitHub repository](https://github.com/joanferrecid098/minecraft-ram-calculator).

Happy gaming!
