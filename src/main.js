import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';

let app = createApp(App)
// for store
app.config.globalProperties.$PATH_BASE = '/api/';
const globals = app.config.globalProperties
export { globals }

// for components
//app.provide('PATH_BASE', app.config.globalProperties.$PATH_BASE)

//console.log(app);

app.use(store).use(router).mount('#app')
