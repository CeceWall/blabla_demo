<template>
  <div class="layout">
    <div class="layout-header">
      <div class="layout-header__action">
        <span class="username">
          欢迎{{username}}，
        </span>
        <router-link to="/login">退出</router-link>
      </div>
    </div>
    <div class="layout-breadcrumb" style="padding: 0 111px " >
      <span style="font-size: 14px" @click="$router.replace('/demo2/pages/home')">首页</span>
      <span style="font-size: 14px" @click="$router.back()"> &gt; </span>
    </div>
    <div class="layout-content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Data from '@/data';

export default {
  name: 'Layout',
  computed: {
    username() {
      return Data.user.username;
    },
  },
};
</script>

<style lang="scss" scoped>
  .layout {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .layout-header {
    height: 215px;
    flex: 0 0 auto;
    background: url('layout-header.png') 0 0/cover no-repeat;
    position: relative;
  }

  .layout-header__action {
    position: absolute;
    top: 65px;
    right: 10%;
  }

  .layout-breadcrumb {
    height: 30px;
    flex: 0 0 auto;
  }

  .layout-content {
    flex: 1;
    padding: 0 111px
  }
</style>
