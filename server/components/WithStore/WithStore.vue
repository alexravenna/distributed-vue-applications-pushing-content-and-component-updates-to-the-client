<template>
    <div>
        <p>This component contains a store.</p>
        <button @click="pressButton()">Press me</button>
        <p>Pressed? {{ isPressed }} </p>
        <p>Logged in? {{ isUserLoggedIn }} </p>
    </div>
</template>

<script>
    import store from './store.js';

    export default {
        name: 'WithStore',
        methods: {
            pressButton() {
                this.$store.commit('pressButton');
            }
        },
        computed: {
            isUserLoggedIn () {
                return this.$store.getters['userLoggedIn'];
            },
            isPressed () {
                return this.$store.getters['isPressed'];
            }
        },
        beforeCreate() {
            this.$store.registerModule('WithStore', store);
        },
    };
</script>

<style scoped>
    p {
        color: red;
    }
</style>

