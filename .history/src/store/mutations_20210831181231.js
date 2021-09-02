export default {
    addCount(state, payload) {
        payload.count++;
    },
    [ADD_TO_CART](state, payload) {
        payload.count = 1
        state.cartlist.push(payload)
    }
}