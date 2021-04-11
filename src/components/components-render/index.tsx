import { defineComponent, resolveComponent, h } from 'vue';
import './index.less';
import TgContainer from '../../plugins/tg-container';
import TgButton from '../../plugins/tg-button';

declare global {
  interface Window {
    Babel: any
  }
}

export default defineComponent({
  name: 'ComponentsRender',
  components: {
    TgContainer,
    TgButton,
  },
  props: {
    components: {
      type: Object,
      required: true,
    },
  },
  render() {
    return this.renderComponents(this.components);
  },
  methods: {
    renderComponents(components: any): any {
      return (components || []).map((component: any) => h(
        resolveComponent(component.name),
        { ...component.props },
        this.renderComponents(component.children),
      ));
    },
  },
});
