import { defineComponent } from 'vue';
import MonacoEditor from '../../components/monaco-editor';
import './index.less';

declare global {
  interface Window {
    Babel: any
  }
}

export default defineComponent({
  name: 'Designer',
  props: {},
  render() {
    const onCodeChanged = (newCode: string) => {
      const compiledCode = window.Babel.transform(newCode, { presets: ['env'] }).code;
      console.log('newCode', compiledCode);
    };

    const onInitialized = (editor: any) => {
      console.log('editor', editor);
    };

    return <div class="designer">
      <MonacoEditor
        width="100%"
        height={200}
        code="function test() {\n  const a = 123;\n  console.log(1111);\n}"
        onInitialized={onInitialized}
        onCodeChanged={onCodeChanged}
      ></MonacoEditor>
    </div>;
  },
});
