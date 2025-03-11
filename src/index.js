import * as components from './components';

const SemanticUIVue = Vue => {
  Object.values(components).forEach(Comp => Vue.component(Comp.name, Comp));
};

export default SemanticUIVue;
export * from './components';