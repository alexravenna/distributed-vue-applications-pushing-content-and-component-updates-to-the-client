import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    state: {
        testItem: 'This is a test item in the core store!!!',
        userLoggedIn: false
    },
    mutations: {
        logUserIn (state) {
            state.userLoggedIn = !state.userLoggedIn;
            // console.log('Login was mutated');
            // console.log(state);

        }
    },
    actions: {

    },
    getters: {
        testItem: (state) => {
            // console.log('Getting testItem');
            return state.testItem;
        },
        userLoggedIn: (state) => {
            // console.log('Getting userLoggedIn');
            // console.log(state);
            return state.userLoggedIn;
        }
    }
});
