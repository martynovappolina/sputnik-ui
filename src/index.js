import * as components from './components';

const SputnikUIVue = Vue => {
  Object.values(components).forEach(Comp => Vue.component(Comp.name, Comp));
};

export default SputnikUIVue;
export * from './components';