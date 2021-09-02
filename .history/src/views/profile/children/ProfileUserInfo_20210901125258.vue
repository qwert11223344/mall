<template>
  <div class="user-info">
    <img src="~assets/img/profile/头像.jpg" alt="" srcset="">
    <div class="login">
      <p>登录 / 注册</p>
      <p><i class="iconfont">&#xe616;</i>暂未绑定手机号</p>
    </div>
    <i class="iconfont">&#xe624;</i>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .user-info{
    display: flex;
    background-color: var(--color-tint);
    color: #ffffff;
    height: 6rem;
  }
  img{
    width: 5rem;
    border-radius: 50%;
  }
</style>