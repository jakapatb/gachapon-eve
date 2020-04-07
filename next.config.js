const path = require('path')
const withImages = require('next-images')
module.exports = withImages({
  webpack(config, options) {
    config.resolve.alias['components'] = path.join(__dirname, './components')
    config.resolve.alias['containers'] = path.join(__dirname, './containers')
    config.resolve.alias['gql'] = path.join(__dirname, './gql')
    config.resolve.alias['assets'] = path.join(__dirname, './assets')
    return config
  }
})
