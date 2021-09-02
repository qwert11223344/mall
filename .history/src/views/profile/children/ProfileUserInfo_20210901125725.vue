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
    width: 100vw;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    font-size: 1.2rem;
  }
  img{
    height: 5rem;
    border-radius: 50%;
  }
  .login{
    margin:0 auto 0 1rem;
  }
</style>