import { defineConfig } from 'vitepress'
import { en } from './en'
import { zh, search as zhSearch } from './zh'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "wc.pub",
  description: "wechat collections",
  themeConfig: {
    // // https://vitepress.dev/reference/default-theme-config
    // nav: [
      // { text: 'Home', link: '/' },
      // { text: '导航', link: '/navigation/' },
      // { text: '实践', link: '/practice/' }
    // ],

    // sidebar: {
    //   '/navigation/': [
    //     {
    //       text: '编程',
    //       // collapsed: true,
    //       items: [
    //         { text: 'Runtime API Examples', link: '/practice/api-examples' }

    //       ]
    //     }
    //   ],
    //   '/practice/': [
    //     {
    //       text: '火火兔',
    //       collapsed: true,
    //       items: [
    //         { text: 'Runtime API Examples', link: '/practice/api-examples' }
    //       ]
    //     }
    //   ]
    // },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kissfu/wc.pub' }
    ],

    search: {
      provider: 'algolia',
      options: {
        appId: '8J64VVRP8K',
        apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
        indexName: 'vitepress',
        locales: { ...zhSearch }
      }
    },
    // search: {
    //   provider: 'local'
    // }
  },

  locales: {
    root: { label: 'English', ...en },
    zh: { label: '简体中文', ...zh }
  }
})
