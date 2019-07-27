<template>
  <div
    class="o-container o-container--m o-vertical-spacing o-vertical-spacing--xxl"
    :class="$style.main"
  >
    <h1>Super big header!</h1>
    <p>The core app contains a store. Value: {{ testItem }}</p>
    <div id="login">
      <button id="login-button" @click="logUserIn()">Log in</button>
      <p>Logged in? {{ userLoggedIn }} </p>
    </div>
    <NewsFeed/>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import NewsFeed from './NewsFeed.vue';

export default {
  name: `App`,
  components: {
    NewsFeed,
  },
  methods: {
    ...mapMutations(['logUserIn'])
  },
  computed: {
    ...mapGetters(['testItem', 'userLoggedIn'])
  }
};
</script>

<style lang="scss">
@import './assets/scss/generic/**/*';
@import '{
  .o-container,
  .o-container--m,
} from ~@avalanche/object-container';
@import '{
  .o-vertical-spacing,
  .o-vertical-spacing--xl,
  .o-vertical-spacing--xxl,
} from ~@avalanche/object-vertical-spacing';
</style>

<style lang="scss" module>
@import './assets/scss/settings/**/*';

.main {
  padding-top: setting-spacing(xl);
  padding-bottom: setting-spacing(xl);

  h1 {
    text-align: center;
  }
}
</style>
