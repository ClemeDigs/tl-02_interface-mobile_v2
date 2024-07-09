import { resolve } from 'path'

const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist')

export default {
    root: root,
    build: {
        outDir: outDir,
        emptyOutDir:true,
        rollupOptions:{
            input: {
                main: resolve(root, 'index.html'),
                produits: resolve(root, 'produits.html'),
                apropos: resolve(root, 'apropos.html'),
                contact: resolve(root, 'contact.html')
            }
        },
    },
    server: {
        port: 8080
    }
}