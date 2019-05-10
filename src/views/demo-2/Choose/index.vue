<template>
  <div class="choose page" v-loading="loading">
    <el-transfer
      class="trans"
      v-model="value" :data="names" :titles="['人员列表','已选人员']"
      filterable
    ></el-transfer>
    <el-button type="primary" :disabled="value.length === 0"
               @click="handleClick"
    >选定完成</el-button>
  </div>
</template>

<script>
export default {
  name: 'index.vue',
  data() {
    return {
      loading: false,
      names: [
        '马', '王', '李', '张', '徐',
      ].map((n, i) => ({
        key: i,
        label: `${n}某某`,
      })),
      value: [],
    };
  },
  methods: {
    handleClick() {
      this.loading = true;
      setTimeout(() => {
        this.$router.push('/demo2/pages/auth');
      }, 1200);
    },
  },
};
</script>

<style scoped>
  .choose.page {
    height: 100%;
  }

  .el-button {
    width: 500px;
    position: absolute;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
  }

  .trans {
    width: 800px;
    margin: 0 auto;
  }

  .trans >>> .el-transfer-panel {
    width: 300px;
    height: 500px

  }
</style>
