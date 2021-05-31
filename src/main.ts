import Vue from 'vue';
import App from './App.vue';
import uView from 'uview-ui';

Vue.config.productionTip = false;

Vue.prototype.$toast = (
  title: string,
  icon: 'success' | 'loading' | 'none' = 'none',
  otherOptions?: Object
) => {
  uni.showToast({ title, icon, ...otherOptions });
};

Vue.use(uView);
new App().$mount();
