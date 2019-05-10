<template>
  <div class="login page">
    <div class="login-input">
      <el-form>
        <el-form-item>
         <el-input placeholder="请输入用户名" v-model="username"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input placeholder="请输入密码" type="password"></el-input>
        </el-form-item>
      </el-form>
     <el-button type="primary" @click="handleLogin">登录</el-button>
    </div>
  </div>
</template>

<script>
import Data from '@/data';

export default {
  name: 'Login',
  data() {
    return {
      username: '',
    };
  },
  methods: {
    handleLogin() {
      Data.login(this.username);
      this.$router.push('/pages/home');
    },
  },
};
</script>

<style lang="scss" scoped>
  .login.page {
    height: 100%;
    width: 100%;
    background: url('Login.png') 0 0/cover no-repeat;
  }
  .login-input {
    width: 350px;
    left: 61%;
    top: 460px;
    position: absolute;
    .el-button {
      width: 100%;
    }
  }
</style>
