// TODO: Toast plugin
// import { createApp, h } from 'vue'
// import type { App } from 'vue'
// import WToast from '../components/WToast.vue'
//
// export default {
//   install(app: App) {
//     const toastApp = createApp({
//       render() {
//         return h(WToast, {
//           position: 'top-right',
//           size: 'md',
//           newestOnTop: true,
//         })
//       },
//     })
//
//     const mountNode = document.createElement('div')
//     document.body.appendChild(mountNode)
//     toastApp.mount(mountNode)
//
//     app.config.globalProperties.$toast = (message: string, color: string = 'default') => {
//       const toastComponent = toastApp._instance?.exposed
//       if (toastComponent) {
//         toastComponent.addToast({ message, color })
//       }
//     }
//   },
// }
