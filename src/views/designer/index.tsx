import { defineComponent } from 'vue';
import MonacoEditor from '../../components/monaco-editor';
import './index.less';

export default defineComponent({
  name: 'Designer',
  props: {},
  render() {
    const onCodeChanged = (newCode: string) => {
      console.log('newCode', newCode);
    };

    const onInitialized = (editor: any) => {
      console.log('editor', editor);
    };

    return <div class="designer">
      <MonacoEditor
        width="100%"
        height={200}
        code="function test() {\n  console.log(1111);\n}"
        onInitialized={onInitialized}
        onCodeChanged={onCodeChanged}
      ></MonacoEditor>
    </div>;
  },
});
