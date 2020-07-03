// https://github.com/vitejs/vite#config-file
import path from 'path'

const config = {
    // proxy: {
    //     // string shorthand
    //     '/foo': 'http://localhost:4567/foo',
    //     // with options
    //     '/api': {
    //         target: 'http://jsonplaceholder.typicode.com',
    //         changeOrigin: true,
    //         rewrite: path => path.replace(/^\/api/, '')
    //     }
    // }
    alias: {
        '/@/': path.resolve(__dirname, './src')
    },
}
  
export default config