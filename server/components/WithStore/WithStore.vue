<template>
    <div>
        <p>This component contains a store.</p>
        <!-- <button @click="pressButton()">Press me</button> -->
        <!-- <p>Pressed? {{ pressed }} </p> -->
        <p>Logged in? {{ userLoggedIn }} </p>
    </div>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex';
    import store from './store.js';

    export default {
        name: 'WithStore',
        store,
        methods: {
            // ...mapMutations(['pressButton'])
            pressButton() {
                this.$parent.$store.commit('WithStore/pressButton');
            }
        },
        computed: {
            userLoggedIn () {
                console.log('BP');
                return this.$parent.$store.getters['userLoggedIn'];
            },
            // pressed: () => {
            //    return this.$parent.$store.getters['WithStore/pressed'];
            // }
        },
        mounted() {
            console.log('WithStore was mounted');
            console.log('Testing root state...');
            console.log(this.$parent.$store);
            console.log('Trying to register to global store');
            this.$parent.$store.registerModule('WithStore', store);
            console.log('dummy for breakpoint');
        }
    };
</script>

<style scoped>
    p {
        color: red;
    }
</style>

