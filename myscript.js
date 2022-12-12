const {createApp} = Vue

createApp({
    data() {
        return{
            message: 'Che bello. oggi si inizia Vue!!!',
            myImage:  "https://images.everyeye.it/img-notizie/the-batman-nuovo-grosso-importante-update-futuro-saga-robert-pattinson-v3-623393-1280x960.webp"
        }

    }
}) .mount('#app')
