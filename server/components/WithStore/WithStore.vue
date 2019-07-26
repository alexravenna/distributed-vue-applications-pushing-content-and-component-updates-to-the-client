<template>
    <div>
        <p>This component contains a store.</p>
        <button @click="pressButton()">Press me</button>
        <p>Pressed? {{ pressed }} </p>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { mapGetters, mapMutations } from 'vuex';
    import Vuex from 'vuex';
    import store from './store.js';

    Vue.use(Vuex);

    export default {
        name: 'WithStore',
        store,
        methods: {
            ...mapMutations(['pressButton'])
        },
        computed: {
            ...mapGetters(['pressed'])
        },
        mounted() {
            console.log('WithStore was mounted');
        }
    };
</script>

<style scoped>
    p {
        color: red;
    }
</style>

