import _ from "lodash";

export default {
    namespaced: true,
    state: {
        images: [],
        loading: false,
        totalRows: 0
    },
    actions: {
        fetchImages({commit}, queryParams = {}) {
            this.$axios.defaults.headers.common['Authorization'] = 'Client-ID 90daa1e26a421a6dfade531105b0bdc4c88b37701e2a387a65aeff6704cce682';
            let page = queryParams.page ? queryParams.page : 1
            if (!queryParams.query) {
                return
            }
            commit('updateLoading', true)
            this.$axios.get(
                'https://api.unsplash.com/search/photos',
                {
                    params: {
                        'per_page': 16,
                        'query': queryParams.query,
                        'page': page,
                        'orientation': 'landscape'
                    }}).then((response) => {

                commit('updateImages', response.data.results)
                commit('updateTotalRows', response.data.total)

            }).finally(() => {
                commit('updateLoading', false)
            });
        }
    },
    mutations: {
        updateImages(state, images) {
            state.images = images
        },
        updateLoading(state, loading) {
            state.loading = loading
        },
        updateTotalRows(state, totalRows) {
            state.totalRows = totalRows
        }
    },
    getters: {
        images(state) {
            return _.cloneDeep(state.images)
        },
        loading(state) {
            return _.cloneDeep(state.loading)
        },
        totalRows(state) {
            return _.cloneDeep(state.totalRows)
        }
    }
}