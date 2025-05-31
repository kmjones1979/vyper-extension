#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const configPath = path.join(__dirname, "..", "hardhat.config.ts");

console.log("🐍 Setting up Vyper configuration...");

try {
  // Read the current hardhat config
  let configContent = fs.readFileSync(configPath, "utf8");

  // Check if Vyper is already fully configured (both import and config section)
  if (configContent.includes("@nomiclabs/hardhat-vyper") && configContent.includes("vyper:")) {
    console.log("✅ Vyper is already configured!");
    return;
  }

  // Add Vyper import if not present
  if (!configContent.includes("@nomiclabs/hardhat-vyper")) {
    const vyperImport = 'import "@nomiclabs/hardhat-vyper";';
    configContent = configContent.replace(
      'import "hardhat-deploy-ethers";',
      `import "hardhat-deploy-ethers";\n${vyperImport}`,
    );
  }

  // Add Vyper configuration after solidity configuration if not present
  if (!configContent.includes("vyper:")) {
    const vyperConfig = `  vyper: {
    version: "0.4.0",
  },`;

    // More robust regex to find the solidity config end
    configContent = configContent.replace(
      /(solidity:\s*{[\s\S]*?}\s*,)\s*(\n\s*defaultNetwork:)/,
      `$1\n${vyperConfig}$2`,
    );
  }

  // Write the updated config
  fs.writeFileSync(configPath, configContent);

  console.log("✅ Vyper configuration added successfully!");
  console.log("📝 Your hardhat.config.ts now includes:");
  console.log("   - @nomiclabs/hardhat-vyper plugin import");
  console.log("   - Vyper v0.4.0 compiler configuration");
  console.log("");
  console.log("🚀 Now run 'yarn compile' to test Vyper compilation!");
} catch (error) {
  console.error("❌ Error setting up Vyper configuration:", error.message);
  console.log("");
  console.log("📖 Manual setup required:");
  console.log('1. Add this import after hardhat-deploy-ethers: import "@nomiclabs/hardhat-vyper";');
  console.log("2. Add this config section after solidity config:");
  console.log("   vyper: {");
  console.log('     version: "0.4.0",');
  console.log("   },");
}
