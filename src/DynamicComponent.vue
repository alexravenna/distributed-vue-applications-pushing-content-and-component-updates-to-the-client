<template>
  <Component
    :is="computedComponent"
    v-bind="componentProps"
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
    componentProps: {
      default: () => ({}),
      type: Object,
    },
  },
  data() {
    return {
      computedComponent: null,
    };
  },
  watch: {
    component: {
      immediate: true,
      handler(newComponent, prevComponent = ``) {
        if (newComponent.url === prevComponent.url) return;

        const self = this;
        externalComponent(this.component.url).then((component) => {
          self.computedComponent = {
            ...component,
            store: self.$store,
          };
        });
      },
    },
  },
};
</script>
