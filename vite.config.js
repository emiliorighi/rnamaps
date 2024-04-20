import { defineConfig } from 'vite'
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'
import rollupNodePolyFill from 'rollup-plugin-node-polyfills'
import vue from '@vitejs/plugin-vue'
// import react from '@vitejs/plugin-react'
import pluginRewriteAll from 'vite-plugin-rewrite-all';

export default defineConfig(({ command, mode }) => {

  return {
    base: command === 'deploy' ? '/rnamaps/' : '/',
    server: {
      proxy: {
        "/files": {
          target: 'https://public-docs.crg.es/rguigo/Data',
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/files/, "")
        },
        "/ucsc": {
          target: 'https://hgdownload.soe.ucsc.edu/goldenPath',
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/ucsc/, "")
        }
      }
    },
    resolve: {
      alias: {
        stream: 'stream-browserify',
      },
    },
    optimizeDeps: {
      esbuildOptions: {
        // Node.js global to browser globalThis
        define: {
          global: 'globalThis',
        },
        // Enable esbuild polyfill plugins
        plugins: [
          NodeGlobalsPolyfillPlugin({
            process: true,
            buffer: true,
          }),
          NodeModulesPolyfillPlugin(),
        ],
      },
    },
    build: {
      rollupOptions: {
        plugins: [
          // Enable rollup polyfills plugin
          // used during production bundling
          rollupNodePolyFill(),
        ],
      },
    },
    plugins: [
      vue({
        template: {
          compilerOptions: {
            isCustomElement: tag => tag.startsWith('fe') || tag.startsWith('sodipodi')
          }
        }
      }),
      pluginRewriteAll()]
  }
})
