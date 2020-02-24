const sources = {
  Spotify: {
    regex: /(((http|https):\/\/)?(open\.spotify\.com\/.*|play\.spotify\.com\/.*))(album|track)\/([a-zA-Z0-9]+)/i,
    icon: '../../res/svg/spotify.svg',
  },
  Bandcamp: {
    regex: /((http:\/\/(.*\.bandcamp\.com\/|.*\.bandcamp\.com\/track\/.*|.*\.bandcamp\.com\/album\/.*))|(https:\/\/(.*\.bandcamp\.com\/|.*\.bandcamp\.com\/track\/.*|.*\.bandcamp\.com\/album\/.*)))/i,
    icon: '../../res/svg/bandcamp.svg',
  },
  SoundCloud: {
    regex: /((http:\/\/(soundcloud\.com\/.*|soundcloud\.com\/.*\/.*|soundcloud\.com\/.*\/sets\/.*|soundcloud\.com\/groups\/.*|snd\.sc\/.*))|(https:\/\/(soundcloud\.com\/.*|soundcloud\.com\/.*\/.*|soundcloud\.com\/.*\/sets\/.*|soundcloud\.com\/groups\/.*)))/i,
    icon: '../../res/svg/soundcloud.svg',
  },
  YouTube: {
    regex: /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/i,
    icon: '../../res/svg/youtube.svg',
  },
  Discogs: {
    regex: /((http|https):\/\/)?(.*\.)?(discogs\.com)?\/(.+)\/(release|master)\/(\d+)/i,
    icon: '../../res/svg/discogs.svg',
  },
}

export default sources
