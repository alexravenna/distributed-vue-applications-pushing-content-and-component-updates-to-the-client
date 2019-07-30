<template>
  <component
    :is="computedComponent"
    v-bind="componentProps"
  />
</template>

<script>
import externalComponent from '@/utils/external-component';

export default {
  name: `ExternalComponentWrapper`,
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

        // get component from external URL
        const self = this;
        externalComponent(this.component.url).then((component) => {
          // add store to component that was return
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
