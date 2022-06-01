import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import rollupNodePolyFill from 'rollup-plugin-polyfill-node'
// import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
// import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'
// import {nextTick} from 'process'

export default defineConfig({
  server:{
    proxy:{
      "/files":{
        target:'https://public-docs.crg.es/rguigo/Data',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/files/, "")
      }
    }
  },
  // resolve:{
  // //   alias:{
  // //     stream: 'rollup-plugin-node-polyfills/polyfills/stream',
  // //     buffer: 'rollup-plugin-node-polyfills/polyfills/buffer-es6',
  // //     util: 'rollup-plugin-node-polyfills/polyfills/util',
  // // //     './runtimeConfig': './runtimeConfig.browser',
  // //   }
  // },
  // build:{
  //   rollupOptions: {
  //       plugins: [
  //         NodeGlobalsPolyfillPlugin({
  //           process: true,
  //           buffer: true
  //         }),
  //         NodeModulesPolyfillPlugin(),
  //           // Enable rollup polyfills plugin
  //           // used during production bundling
  //           rollupNodePolyFill()
  //       ]
  //   }
  // },
//   optimizeDeps: {
//     esbuildOptions: {
//         // Node.js global to browser globalThis
//         define: {
//             global: 'globalThis'
//         },
//         // Enable esbuild polyfill plugins
//         plugins: [
//             NodeGlobalsPolyfillPlugin({
//                 process: true,
//                 buffer: true,
//                 // define:{'process.NODE_ENV' : 'production'}
//             }),
//             NodeModulesPolyfillPlugin()
//         ]
//     }
// },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => tag.startsWith('fe') || tag.startsWith('sodipodi')
        }
      }
    })]
})
