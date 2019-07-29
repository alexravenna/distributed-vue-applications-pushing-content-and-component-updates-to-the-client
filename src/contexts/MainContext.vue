<template>
  <context-frame
    v-slot="{ entities: mainContext }"
    endpoint="http://localhost:8200/main-context"
  >
    <ul class="o-vertical-spacing--xl">
      <li
        v-for="contextComponent in mainContext"
        :key="contextComponent.data.id"
      >
        <external-component-wrapper
          :component="contextComponent.component"
          :props="contextComponent.data"
        />
      </li>
    </ul>
  </context-frame>
</template>

<script>
import ExternalComponentWrapper from '@/components/ExternalComponentWrapper.vue';
import ContextFrame from '@/frames/ContextFrame.vue';

export default {
  name: `MainContext`,
  components: {
    ExternalComponentWrapper,
    ContextFrame,
  },
};
</script>
