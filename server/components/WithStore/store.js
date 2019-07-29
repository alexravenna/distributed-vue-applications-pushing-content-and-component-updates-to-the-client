export default {
    strict: true,
    // namespaced: true,
    state: {
        pressed: false
    },
    getters: {
        isPressed: (state) => {
            return state.pressed;
        }
    },
    mutations: {
        pressButton (state) {
            state.pressed = !state.pressed;
        }
    },
}
