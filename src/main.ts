import 'highlight.js/styles/github-dark.css';

import hljsVuePlugin from '@highlightjs/vue-plugin';
import hljs from 'highlight.js/lib/core';
import json from 'highlight.js/lib/languages/json';
import { createApp } from 'vue'

import App from './App.vue'

hljs.registerLanguage('json', json);

const app = createApp(App);

app.use(hljsVuePlugin);
app.mount('#app');
