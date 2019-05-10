<template>
  <div class="home page">
    <el-row :gutter="12">
      <el-col :span="12">
        <el-tabs type="border-card">
          <el-tab-pane
            v-for="tab of tab1" :label="tab.name"
          >
            <div class="tab-item"></div>
          </el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="12">
        <el-tabs type="border-card">
          <el-tab-pane
            v-for="tab of tab2" :label="tab.name"
          >
            <div class="tab-item"></div>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
    <div style="margin-top: 24px">
      <img src="./chang-yong-gong-neng.png" />
    </div>
  </div>
</template>

<script>
import Data from '@/data';

export default {
  name: 'home',
  computed: {
    tab1() {
      const { currentUser } = Data;
      return Data.home[currentUser].tab1;
    },
    tab2() {
      const { currentUser } = Data;
      return Data.home[currentUser].tab2;
    },
  },
};
</script>

<style lang="scss" scoped>
  .home {
  }

  .tab-item {
    height: 288px;
  }
</style>
