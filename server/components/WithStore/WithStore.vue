<template>
    <div>
        <p>This component contains a store.</p>
        <button @click="pressButton()">Press me</button>
        <p>Pressed? {{ isPressed }} </p>
        <p>Logged in? {{ isUserLoggedIn }} </p>
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
            isUserLoggedIn () {
                return this.$parent.$store.getters['userLoggedIn'];
            },
            // ...mapGetters([
            //     'isPressed'
            // ])
            pressed () {
                console.log('BP');
                // return this.$root.$store.getters['WithStore/isPressed'];
                // return this.$store.getters['isPressed'];
                return this.$store.getters.isPressed;
            }
        },
        mounted() {
            console.log('Trying to register to global store');
            this.$parent.$store.registerModule('WithStore', store);
        }
    };
</script>

<style scoped>
    p {
        color: red;
    }
</style>

