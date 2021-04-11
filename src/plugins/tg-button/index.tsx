import { defineComponent } from 'vue';
import { ElButton } from 'element-plus';

export default defineComponent({
  name: 'TgButton',
  components: {
    ElButton,
  },
  props: {
    innerText: {
      type: String,
      default: '按钮',
    },
    size: {
      type: String,
      default: 'medium',
    },
    type: {
      type: String,
      default: 'primary',
    },
    plain: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
    circle: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: '',
    },
    autofocus: {
      type: Boolean,
      default: false,
    },
    nativeType: {
      type: String,
      default: 'button',
    },
  },
  render() {
    const buttonProps = {
      size: this.size,
      type: this.type,
      plain: this.plain,
      round: this.round,
      circle: this.circle,
      loading: this.loading,
      disabled: this.disabled,
      icon: this.icon,
      autofocus: this.autofocus,
      nativeType: this.nativeType,
    };
    return (
      <ElButton
        { ...buttonProps }>
        { this.innerText }
      </ElButton>
    );
  },
});
