import { createApp } from 'vue'

import App from './App.vue'
import { createI18n } from 'vue-i18n'
import { Vue } from 'vue-facing-decorator';

const i18n = createI18n({});
const app = createApp(App).use(i18n)

app.config.globalProperties.$test = () => "Hello world"
// Vue.prototype.$test = app.config.globalProperties.$test


app.mount('#app')
