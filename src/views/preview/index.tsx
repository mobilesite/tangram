import { defineComponent, resolveComponent, h } from 'vue';
import './index.less';
import ComponentsRender from '../../components/components-render';

declare global {
  interface Window {
    Babel: any
  }
}

export default defineComponent({
  name: 'Preview',
  components: {
    ComponentsRender,
  },
  data() {
    return {
      components: [{
        name: 'TgContainer',
        id: 'TgContainer_da936b5a1fbe0211',
        props: {
          span: 6,
          type: 'flex',
        },
        children: [
          {
            name: 'TgButton',
            id: 'TgButton_da936b5a1fbe0216',
            props: {
              loading: true,
              innerText: '提交',
            },
          },
          {
            name: 'TgButton',
            id: 'TgButton_da936b5a1fbe0217',
            props: {
              loading: false,
              innerText: '取消',
            },
          },
        ],
      }],
    };
  },
  render() {
    return h(ComponentsRender, { components: this.components });
  },
});
