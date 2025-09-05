module.exports = {
  branches: [
    "release",
    {
      channel: "canary",
      name: "^(?!develop|main|release).*$",
      prerelease: "${name}.rc",
    },
  ],
  ci: true,
  debug: true,
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "./plugins/conditional-changelog.js",
      {
        changelogFile: "CHANGELOG.md",
        assets: ["package.json", "CHANGELOG.md"],
        message:
          "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],
    "@semantic-release/npm",
    ["./plugins/conditional-github.js"],
  ],
};
