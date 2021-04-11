import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import registerElement from './registerElement';

const app = createApp(App);

registerElement(app);
app.use(store).use(router).mount('#app');
