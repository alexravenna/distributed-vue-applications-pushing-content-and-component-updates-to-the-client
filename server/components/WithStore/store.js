import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    namespaced: true,
    state: {
        pressed: false
    },
    mutations: {
        pressButton (state) {
            state.pressed = !state.pressed;
            console.log('Button was mutated');
            console.log(state);
        }
    },
    actions: {

    },
    getters: {
        pressed: (state) => {
            console.log('Getting button state');
            console.log(state);
            return state.pressed;
        }
    }
});
