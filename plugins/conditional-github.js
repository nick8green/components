const githubPlugin = require("@semantic-release/github");

module.exports = {
  verifyConditions: async (pluginConfig, context) => {
    if (process.env.GITHUB_ACTIONS !== "true") {
      context.logger.info(
        "Skipping GitHub plugin: not running in GitHub Actions",
      );
      return;
    }
    return githubPlugin.verifyConditions(pluginConfig, context);
  },
  publish: async (pluginConfig, context) => {
    if (process.env.GITHUB_ACTIONS !== "true") {
      context.logger.info(
        "Skipping GitHub publish: not running in GitHub Actions",
      );
      return;
    }
    return githubPlugin.publish(pluginConfig, context);
  },
  addChannel: async (pluginConfig, context) => {
    if (process.env.GITHUB_ACTIONS !== "true") {
      context.logger.info(
        "Skipping GitHub channel: not running in GitHub Actions",
      );
      return;
    }
    return githubPlugin.addChannel(pluginConfig, context);
  },
  success: async (pluginConfig, context) => {
    if (process.env.GITHUB_ACTIONS !== "true") {
      context.logger.info(
        "Skipping GitHub success: not running in GitHub Actions",
      );
      return;
    }
    return githubPlugin.success(pluginConfig, context);
  },
  fail: async (pluginConfig, context) => {
    if (process.env.GITHUB_ACTIONS !== "true") {
      context.logger.info(
        "Skipping GitHub fail: not running in GitHub Actions",
      );
      return;
    }
    return githubPlugin.fail(pluginConfig, context);
  },
};
