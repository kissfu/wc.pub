// .vitepress/theme/index.ts
import DefaultTheme from "vitepress/theme"
import googleAnalytics from 'vitepress-plugin-google-analytics'

export default {
  extends: DefaultTheme,
  enhanceApp({app}) {
    googleAnalytics({
      id: 'G-R0528T9ZQW', //跟踪ID，在analytics.google.com注册即可
    })
  }
}