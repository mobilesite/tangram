import {
  defineComponent,
  onMounted,
  onBeforeUnmount,
  ref,
  getCurrentInstance,
} from 'vue';
import './index.less';
import useStyle from './useCalculateStyle';
import useInitEditor from './useInitEditor';
import { Theme } from './types';

declare global {
  interface Window {
    monacoEditor: any
  }
}

const noop = () => {
  console.log('do nothing');
};
const containerClass = '__monaco-editor__';

export default defineComponent({
  name: 'MonacoEditor',
  props: {
    width: {
      type: [Number, String],
    },
    height: {
      type: [Number, String],
      default: 500,
      required: true,
    },
    className: {
      type: String,
      default: '',
    },
    language: {
      type: String,
      default: 'javascript',
    },
    // Initial code to show
    code: {
      type: String,
      default: '// code goes here \n',
    },
    theme: {
      type: String,
      default: Theme.vs,
    },
    tabSize: {
      type: Number,
      default: 2,
    },
    fontSize: {
      type: Number,
      default: 14,
    },
    onInitialized: {
      type: Function,
      default: noop,
    },
    onCodeChanged: {
      type: Function,
      default: noop,
    },
  },
  setup(props) {
    const container: any = ref(null);
    const { width, height } = useStyle(props);
    let editor: any;

    onMounted(() => {
      const instance = getCurrentInstance();
      container.value = instance?.refs.container;
      editor = useInitEditor(props, container);
      // 编辑器创建完成
      props.onInitialized(editor);
    });

    onBeforeUnmount(() => {
      editor.dispose();
    });

    return {
      styleWidth: width,
      styleHeight: height,
    };
  },
  render() {
    const { styleWidth, styleHeight, className } = this;
    return <div
      ref="container"
      class={`${containerClass} ${className}`}
      style={{ width: styleWidth, height: styleHeight } }></div>;
  },
});
