# BetterRYM

Enhancements for [RateYourMusic](https://rateyourmusic.com/) 🎧

## Features

- Add missing streaming links to Release pages
- Auto-fill the Add Release form
- Download hi-res cover art
- Filter your collection by release type
- Convert stream links to embed codes

## Workflows

Prerequisites:

1. Install [yarn](https://yarnpkg.com)
2. Create a Spotify client ID and secret by following these [instructions](https://developer.spotify.com/documentation/general/guides/app-settings/#register-your-app). Enter them in the `.env` file at the root of this repo.
3. Create a YouTube API key by following these [instructions](https://developers.google.com/youtube/v3/getting-started#before-you-start). Enter it in the `.env` file as well.

### Development

```sh
# Install dependencies
yarn

# Start dev server
yarn dev
```

Load the unpacked extension from `./output` into your browser ([Chrome](https://developer.chrome.com/docs/extensions/mv3/getstarted/#manifest), [Firefox](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/), [Edge](https://docs.microsoft.com/en-us/microsoft-edge/extensions-chromium/getting-started/extension-sideloading))

### Production

```sh
# Install dependencies
yarn

# Build for all browsers
yarn prod

# Build for individual browsers
yarn prod:chrome
yarn prod:firefox
yarn prod:edge
```

## License

[GPL-3.0](https://github.com/jgchk/betterRYM/blob/main/LICENSE)
