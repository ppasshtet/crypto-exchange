

export default {
    state: () => {
        return {
            // currency: [],
            // isInitialized: false,
            // baseValue: '',
            // quoteValue: '',
            // baseCourse: '',
            // quoteCourse: '',
            // persent: [1, 2, 3, 4, 5],
            // baseSelected: '',
            // quoteSelected: ''
        }
    },

    actions: {
        // init ({ commit, rootGetters, state }) {
        //     if (!state.isInitialized) {
        //       commit('initTokens', rootGetters['local-storage/storage'])
        //     }
        // },

        // async changeBaseSelected({commit}, baseSelected) {
        //     let indexBAseCur = await this.currency.findIndex(el => el.curCode === baseSelected)
        //     this.baseCourse = this.currency[indexBAseCur].curAmount

        //     if (this.baseValue) {
        //         this.converValue(this.baseValue)
        //     }

        // },

        async getConverValue() {
            console.log(123)
            const response = await this.$axios.get('/currencyValute')
            console.log(123)
            return response.data;
        }
    },

    mutations: {
        // changeBaseSelected() {

        // }
    },

    getters: {

    } 
}