export default {
  addCart({commit}, payload) {
   return new Promise((resolve, reject) => {
     // 查找数组中是否有该商品
     let oldProduct = context.state.cartlist.find(item => item.iid === payload.iid)
     // 2. 判断oldProduct是有值
     if(oldProduct) { 
         commit(addcount, oldProduct)
         resolve("当前的商品数量+1")
     }else { 
       // 添加新的商品到购物车
         commit(addProduct, payload)
         resolve("添加了新的商品")
     }
   })
 }
}