module.exports = {
  "stories": [
    "../documentation/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx|mdx)",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/preset-scss'
  ]
}