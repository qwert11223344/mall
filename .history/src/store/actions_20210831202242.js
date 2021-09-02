export default {
  addCart({commit, state}, payload) {
     // 查找数组中是否有该商品
     let oldProduct = state.cartList.find(item => item.iid === payload.iid)
     // 2. 判断oldProduct是有值
     console.log(oldProduct);
     if(oldProduct) { 
         commit('addcount', oldProduct)

     }else { 
       // 添加新的商品到购物车
         commit('addProduct', payload)

     }
   }
 }
