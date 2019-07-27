import Vue from 'vue';
import Vuex from 'vuex';

// Vue.use(Vuex);

export default {
    // export default new Vuex.Store({
    strict: true,
    namespaced: true,
    state () {
        return {
            pressed: false,
        }
    },
    mutations: {
        pressButton (state) {
            state.pressed = !state.pressed;
        }
    },
    actions: {

    },
    getters: {
        isPressed (state) {
            console.log('pressed getter');
            return state.pressed;
        }
    }
}
