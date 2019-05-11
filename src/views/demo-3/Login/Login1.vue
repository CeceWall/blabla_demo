<template>
  <div class="login page">
    <div class="login-input">
      <el-form>
        <el-form-item>
         <el-input class="name icon-user" placeholder="请输入用户名" v-model="username" prefix-icon="icon-user"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input class="name icon-password" placeholder="请输入密码" v-model="password" type="password" prefix-icon="icon-password"></el-input>
        </el-form-item>
      </el-form>
      <span class="forget">忘记密码</span>
     <el-button class="btn" type="primary" @click="handleLogin">登录</el-button>
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
      password: '',
    };
  },
  methods: {
    handleLogin() {
      // Data.login(this.username);
      this.$router.push('/demo3/pages/acce');
    },
  },
};
</script>

<style lang="scss">
  .login.page {
    height: 100%;
    width: 100%;
    background: url('Login.png') 0 0/cover no-repeat;
  }
  .login-input {
    width: 350px;
    left: 41%;
    top: 560px;
    position: absolute;
    .el-button {
      width: 100%;
    }
    .forget{
      display: block;
      color:#4984fc;
      font-size:14px;
      margin-bottom:10px;
      float: right;
      cursor: pointer;
    }
    .btn{
      width:240px;
      border-radius:20px;
      margin-left:50px;
      margin-top:40px;
    }
    .name{
      border-bottom:1px solid #eee;
    }
    input{
      border:none
    }
    .icon-user{
      .el-input__prefix{
        display: inline-block;
        width: 22px;
        height: 23px;
        background: url(../image/icon_user.png) center;
        margin-top: 7px;
      }
    }
    .icon-password{
      .el-input__prefix{
        display: inline-block;
        width: 20px;
        height: 22px;
        background: url(../image/icon_password.png);
        margin-top: 7px;
      }     
    }
  }
</style>
