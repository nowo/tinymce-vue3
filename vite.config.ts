
import { ConfigEnv, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig((mode: ConfigEnv) => {
    // console.log(mode);

    return {
        plugins: [vue()],
        resolve: {
            alias: {
                '@': resolve(__dirname, "src"),     //配置src的别名
            }
        },
        //项目部署在主域名的子文件使用,例如http://localhost:3000/myvite/。不填默认就是/ 
        base: mode.mode = 'production' ? "/tinymce-vue3/" : "/",    // github项目地址
        server: {
            host: '0.0.0.0',
            proxy: {
                '/api': {
                    target: 'http://127.0.0.1',
                    ws: true,    // 并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
                    changeOrigin: true,     //是否允许跨域,在本地会创建一个虚拟服务端，然后发送请求的数据
                    rewrite: (path) => path.replace(/^\/api/, ''),
                },
            },
        },
    }
})
