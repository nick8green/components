const changelog = require("@semantic-release/changelog");
const git = require("@semantic-release/git");
const github = require("@semantic-release/github");

module.exports = {
  prepare: async (pluginConfig, context) => {
    const { branch, logger } = context;

    if (process.env.CI) {
      await github({}, context);
    }

    if (branch.prerelease) {
      logger.info(
        `Skipping changelog and git commit for prerelease branch: ${branch.name}`,
      );
      return;
    }

    logger.info(
      `Running changelog and git commit for release branch: ${branch.name}`,
    );

    await changelog({ changelogFile: pluginConfig.changelogFile }, context);
    await git(
      {
        assets: pluginConfig.assets,
        message: pluginConfig.message,
      },
      context,
    );
  },
};
