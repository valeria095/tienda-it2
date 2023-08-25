import { resolve } from "node:path"




export default {
    server: {
        port: "2222",
    },
    css: {
        devSourcemap: true,
    }
}
build:{
    
        emptyOutdir: true

        rollupOptions:{
            input:{
                carri:resolve('pages/carri.html')
                contacto:resolve('pages/contacto.html')
                nosotros:resolve('pages/nosotros.html')
                index:resolve('index.html')
            }

        }

}

