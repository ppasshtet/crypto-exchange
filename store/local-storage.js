// import { getData, getClearData, setData } from '@/main/utils/storage-manager.js'

// export default {
//   state: () => {
//     return {
//       storage: {},

//       isInitialized: false
//     }
//   },
//   actions: {
//     init ({ state, commit }) {
//       if (!state.isInitialized) {
//         let data = getData()

//         if (!data) {
//           data = getClearData()
//           setData(data)
//         } else if (!data.tokens) {
//           setData(data)
//         }

//         commit('setDataFromStorage', data)
//         return data
//       }
//     },
//     set ({ state }) {
//       setData(state.storage)
//     }
//   },
//   mutations: {
//     setDataFromStorage (state, storage) {
//       state.storage = storage
//       state.isInitialized = true
//     }

//   },
//   getters: {
//     storage (state) {
//       return state.storage
//     }
//   }
// }
