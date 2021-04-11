import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Project',
  render() {
    return <div>
      <h2>Project List</h2>
      <el-button type="primary">主要按钮</el-button>
    </div>;
  },
});
