<template>
  <div class="login page">
    <div class="login-input">
      <el-form>
        <el-form-item>
         <el-input placeholder="请输入用户名" v-model="username"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input placeholder="请输入密码" type="password" v-model="password"></el-input>
        </el-form-item>
      </el-form>
     <el-button v-loading="loading" type="primary" @click="handleLogin">登录</el-button>
    </div>
  </div>
</template>

<script>
import Data from '@/data';

export default {
  name: 'Login',
  data() {
    return {
      loading: false,
      username: '',
      password: '',
    };
  },
  methods: {
    handleLogin() {
      Data.login(this.username);
      this.loading = true;
      setTimeout(() => {
        this.$router.push('/demo2/pages/home');
      }, 702);
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
