import { defineComponent, h } from 'vue';
import { ElRow, ElCol } from 'element-plus';

export default defineComponent({
  name: 'TgContainer',
  components: {
    ElRow,
    ElCol,
  },
  props: {
    // 栅格间隔
    gutter: {
      type: Number,
      default: 0,
    },
    // 布局模式，可选 flex，现代浏览器下有效
    type: {
      type: String,
      default: '',
    },
    // flex 布局下的水平排列方式，start/end/center/space-around/space-between
    justify: {
      type: String,
      default: 'start',
    },
    // flex 布局下的垂直排列方式，top/middle/bottom
    align: {
      type: String,
      default: 'top',
    },
    // 自定义元素标签
    tag: {
      type: String,
      default: 'div',
    },
    // 栅格占据的列数
    span: {
      type: Number,
      default: 24,
    },
  },
  render() {
    const rowProps = {
      props: this.gutter,
      type: this.type,
      justify: this.justify,
      align: this.align,
      tag: this.tag,
    };
    const children = h(ElCol, { span: this.span }, {
      default: () => this.$slots.default?.(),
    });
    return h(ElRow, { ...rowProps }, children);
  },
});
