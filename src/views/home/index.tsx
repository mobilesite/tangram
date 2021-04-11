import { defineComponent } from 'vue';
import Project from '@/components/project/index'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    Project,
  },
  render() {
    return <div class="home">
      <Project/>
    </div>;
  },
});
