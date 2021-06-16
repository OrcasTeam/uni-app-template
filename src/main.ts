import Vue from 'vue';
import uView from 'uview-ui';
import { debounce } from 'lodash';
import { PiniaPlugin, createPinia } from 'pinia';
import VueCompositionAPI from '@vue/composition-api';
import App from './App.vue';

Vue.use(VueCompositionAPI);
Vue.use(PiniaPlugin);
Vue.use(uView);

Vue.config.productionTip = false;

Vue.prototype.$toast = (
  title: string,
  icon: 'success' | 'loading' | 'none' = 'none',
  otherOptions?: Object
) => {
  uni.showToast({ title, icon, ...otherOptions });
};


const pinia = createPinia();
pinia.use(({ options, store }) => {
  if (options.debounce) {
    return Object.keys(options.debounce).reduce((debouncedActions, action) => {
      //@ts-ignore
      debouncedActions[action] = debounce(store[action],  options.debounce[action]);
      return debouncedActions;
    }, {});
  }
});
  

const app = new Vue({
  render: h => h(App),
  pinia: pinia,
});
app.$mount();
