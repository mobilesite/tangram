import { defineComponent, reactive } from 'vue';
import MonacoEditor from '../../components/monaco-editor';
import './index.less';

export default defineComponent({
  name: 'Designer',
  props: {},
  render() {
    return <div class="designer">
      <MonacoEditor
        height={300}
        code="function test() {\n  console.log(1111);\n}"
      ></MonacoEditor>
    </div>;
  },
});
