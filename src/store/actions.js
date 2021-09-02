export default {
  addCart({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      // 查找数组中是否有该商品
      let oldProduct = state.cartList.find((item) => item.iid === payload.iid);
      // 2. 判断oldProduct是有值
      if (oldProduct) {
        commit("addCount", oldProduct);
        resolve("商品数量+1");
      } else {
        // 添加新的商品到购物车
        commit("addProduct", payload);
        resolve("添加新的商品");
      }
    });
  },
};
