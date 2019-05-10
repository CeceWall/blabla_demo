<template>
  <div class="home page">
    <el-row :gutter="12">
      <el-col :span="12">
        <el-tabs type="border-card">
          <el-tab-pane v-for="tab of tab1" :label="tab.name">
            <div class="tab-item">
              <img :src="image" v-for="image of tab.image" style="margin-bottom: 12px" />
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="12">
        <el-tabs type="border-card">
          <el-tab-pane v-for="tab of tab2" :label="tab.name">
            <div class="tab-item" @click="$router.push(currentUser === 'XXX受理员' ? '/demo2/pages/auth-step1' : '/demo2/pages/choose')">
              <img :src="image" v-for="image of tab.image" style="margin-bottom: 12px;width:100%" />
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
    <div style="margin-top: 24px">
      <el-tabs type="border-card">
        <el-tab-pane v-for="(tab, index) of tab3" :label="tab.name">
          <div class="tab-item" v-if="currentUser === 'XXX航空工业'">
            <span
              v-for="t of tab.text"
              class="tab3-item"
              @click="$router.push('/demo2/pages/step1')"
            >
              <span>
                {{ t }}
              </span>
            </span>
          </div>
          <div v-else class="tab-item">
            <img :src="img" v-for="img of tab.image" style="width: 100%" />
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import Data from '@/data';

export default {
  name: 'home',
  created() {
   Data.breadcrumb = ''
  },
  computed: {
    currentUser() {
      return Data.currentUser;
    },
    tab1() {
      const { currentUser, whichDemo } = Data;
      return Data[whichDemo].home[currentUser].tab1;
    },
    tab2() {
      const { currentUser, whichDemo } = Data;
      return Data[whichDemo].home[currentUser].tab2;
    },
    tab3() {
      const { currentUser, whichDemo } = Data;
      return Data[whichDemo].home[currentUser].tab3;
    },
  },
};
</script>

<style lang="scss" scoped>
  .tab-item {
    height: 288px;
  }

  .tab3-item {
    display: inline-block;
    width: 200px;
    height: 80px;
    background-color: #efefef;
    padding: 6px;
    background-clip: content-box;
    text-align: center;
    line-height: 60px;
    cursor: pointer;

    &:hover {
      background-color: darken(#efefef, 5%);
    }
  }
</style>
