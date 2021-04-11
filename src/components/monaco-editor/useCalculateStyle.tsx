import { computed, ref, Ref } from 'vue';

interface Style {
  width: Ref,
  height: Ref,
}

export default function (props: any): Style {
  let width: Ref = ref('100%');
  let height: Ref = ref(0);

  if (typeof props.width === 'number') {
    width = computed(() => `${props.width}px`);
  } else if (typeof props.width === 'string') {
    width = computed(() => props.width);
  }

  if (typeof props.height === 'number') {
    height = computed(() => `${props.height}px`);
  } else if (typeof props.height === 'string') {
    height = computed(() => props.height);
  }

  return {
    width,
    height,
  };
}
