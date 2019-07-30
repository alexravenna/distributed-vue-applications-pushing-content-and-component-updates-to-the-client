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
        }
    },
    actions: {

    },
    getters: {
        testItem: (state) => {
            return state.testItem;
        },
        userLoggedIn: (state) => {
            return state.userLoggedIn;
        }
    }
});
