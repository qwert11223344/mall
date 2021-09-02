export default {
    addCount(state, payload) {
        payload.count++;
    },
    addProduct(state, payload) {
        payload.count = 1
        state.cartlist.push(payload)
    }
}