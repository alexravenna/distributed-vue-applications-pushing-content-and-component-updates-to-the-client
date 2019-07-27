<template>
  <Component
    :is="computedComponent"
    v-bind="props"
  />
</template>

<script>
import externalComponent from './utils/external-component';

export default {
  name: `DynamicComponent`,
  props: {
    component: {
      required: true,
      type: Object,
    },
    props: {
      default: () => ({}),
      type: Object,
    },
  },
  data() {
    return {
      computedComponent: null,
    };
  },
  mounted() {
    
    
    // console.log('Trying to add module store to global store');
    // if ('store' in this.computedComponent){
    //   this.$store.registerModule(this.computedComponent.name, this.computedComponent.store);
    //   console.log(this.computedComponent.store);
    // }
  },
  watch: {
    component: {
      immediate: true,
      handler(newComponent, prevComponent = ``) {
        if (newComponent.url === prevComponent.url) return;

        this.computedComponent = () => externalComponent(this.component.url);
      },
    },
  },
};
</script>
