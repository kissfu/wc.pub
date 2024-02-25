import { defineConfig, type DefaultTheme } from 'vitepress'

export const en = defineConfig({
  lang: 'en-US',
  description: 'Vite & Vue powered static site generator.',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/navigation/': { base: '/navigation/', items: sidebarNavigation() },
      '/practice/': { base: '/practice/', items: sidebarPractice() }
    },

    editLink: {
      pattern: 'https://github.com/kissfu/wc.pub/tree/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Xiao Wang'
    }
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Home',
      link: '/'
    },
    {
      text: 'Navigation',
      link: '/navigation/index',
      activeMatch: '/navigation/'
    },
    {
      text: 'Practice',
      link: '/practice/index',
      activeMatch: '/practice/'
    }
  ]
}

function sidebarNavigation(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Navigation',
      collapsed: false,
      items: [
        { text: 'What is Navigation', link: 'index' }
      ]
    },
    {
      text: 'Web',
      collapsed: false,
      items: [
        { text: 'Globe Explorer', link: 'web/globe-explorer' },
        { text: 'PicX', link: 'web/picx' }
      ]
    }
  ]
}

function sidebarPractice(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Practice',
      collapsed: false,
      items: [
        { text: 'What is Practice', link: 'index' }
      ]
    }
  ]
}
