const withTM = require('next-transpile-modules')(['react-markdown']);

module.exports = withTM({
    webpack5: false,
    async redirects() {
      return [
        {
            source: '/twitch',
            destination: 'https://twitch.tv/roxkstar74',
            permanent: true,
        },
        {
          source: '/github',
          destination: 'https://github.com/roxkstar74',
          permanent: true,
        },
        {
          source: '/merch',
          destination: 'https://merch.streamelements.com/roxkstar74',
          permanent: true,
        },
        {
          source: '/ideas',
          destination: 'https://vintage-smile-604.notion.site/Goal-Actually-making-20k-in-December-249dee93d7974e5389f8f3e25e70802c',
          permanent: true,
        },
        {
          source: '/today',
          destination: 'https://trello.com/b/oMD8XORk/daily',
          permanent: true,
        },
        {
          source: '/goals',
          destination: 'https://www.youtube.com/watch?v=oaIWDUsxx6Y',
          permanent: true,
        },
        {
          source: '/tiktok',
          destination: 'https://tiktok.com/@roxkstar74',
          permanent: true,
        },
        {
            source: '/twitter',
            destination: 'https://twitter.com/roxkstar74',
            permanent: true,
        },
        {
            source: '/instagram',
            destination: 'https://instagram.com/roxkstar74',
            permanent: true,
        },
        {
            source: '/ig',
            destination: 'https://instagram.com/roxkstar74',
            permanent: true,
        },
        {
            source: '/youtube',
            destination: 'https://youtube.com/roxkstar74',
            permanent: true,
        },
        {
            source: '/yt',
            destination: 'https://youtube.com/roxkstar74',
            permanent: true,
        },
        {
            source: '/future',
            destination: 'https://www.youtube.com/watch?v=CIsrhoVSc4',
            permanent: true,
        },
        {
            source: '/leaving',
            destination: 'https://youtu.be/xP3m27Pl5eU',
            permanent: true,
        }
      ]
    },
  })