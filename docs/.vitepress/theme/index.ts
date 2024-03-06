// https://vitepress.dev/guide/custom-theme
import DefaultTheme from "vitepress/theme"
import './style/index.css' 
import { h, onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'
import mediumZoom from 'medium-zoom'
import googleAnalytics from 'vitepress-plugin-google-analytics'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({app, router, siteData}) {
    googleAnalytics({
      id: 'G-R0528T9ZQW', //跟踪ID，在analytics.google.com注册即可
    })
  },
  setup() {
    const route = useRoute()
    const initZoom = () => {
      // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' }); // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
  }
}