// declare module "*.vue" {
//   import type { DefineComponent } from "vue";
//   const component: DefineComponent<{}, {}, any>;
//   export default component;
// }
import Vue from 'vue';
declare module 'vue/types/vue' {
  interface Vue {
    $toast: (
      title: string,
      icon: 'success' | 'loading' | 'none' = 'none',
      otherOptions?: Object
    ) => void;
  }
}
