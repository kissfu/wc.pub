import { defineConfig } from 'vitepress'
import { en } from './en'
import { zh, search as zhSearch } from './zh'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "wc.pub",
  description: "wechat collections",
  themeConfig: {

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kissfu/wc.pub' }
    ],

    // search: {
    //   provider: 'algolia',
    //   options: {
    //     appId: '8J64VVRP8K',
    //     apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
    //     indexName: 'vitepress',
    //     locales: { ...zhSearch }
    //   }
    // },
    search: {
      provider: 'local'
    }
  },

  locales: {
    root: { label: 'English', ...en },
    zh: { label: '简体中文', ...zh }
  }
})
