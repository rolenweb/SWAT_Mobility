import _ from "lodash";
import Vue from 'vue';
import Vuex from 'vuex';
import ax from 'axios'
import image from "./modules/image";
import pokemon from "./modules/pokemon";

const axiosPlugin = store => {
    store.$axios = ax
}

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        image, pokemon
    },
    state: {
        error: null
    },
    actions: {

    },
    mutations: {
        setError(state, error) {
            state.error = error
        }
    },
    getters: {
        error(state) {
            return _.cloneDeep(state.error);
        },
        hasError(state) {
            return !_.isEmpty(state.error);
        }
    },
    plugins: [axiosPlugin],
    strict: process.env.NODE_ENV !== 'production'
})
