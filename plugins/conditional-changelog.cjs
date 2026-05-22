const changelogPlugin = require("@semantic-release/changelog");
const gitPlugin = require("@semantic-release/git");

module.exports = {
  prepare: async (pluginConfig, context) => {
    const { branch, logger } = context;

    if (branch.prerelease) {
      logger.info(
        `Skipping changelog and git commit for prerelease branch: ${branch.name}`,
      );
      return;
    }

    logger.info(
      `Running changelog and git commit for release branch: ${branch.name}`,
    );

    await changelogPlugin.prepare(
      { changelogFile: pluginConfig.changelogFile },
      context,
    );
    await gitPlugin.prepare(
      {
        assets: pluginConfig.assets,
        message: pluginConfig.message,
      },
      context,
    );
  },
};
