<template>
  <div class="page step1">
    <div style="padding: 0 24px">
      <v-form issue="2" :isabled="true"></v-form>
    </div>
    <el-button type="primary" @click="$router.push('/demo2/pages/step2')">下一步</el-button>
  </div>
</template>

<script>
import vForm from '@/components/form.vue';
import Data from '@/data';

export default {
  name: 'index',
  components: {
    vForm,
  },
  created() {
    Data.breadcrumb = '零部件审定 > <span class="breadcrumb-last">零部件制造人审评书</span>';
  },
};
</script>

<style scoped>
  .step1 {
    padding-bottom: 24px;
    background: #efefef;
    background-clip: content-box;
    height: 100%;

  }

  .step1 >>> .el-form-item__label {
    color: #333 !important;
    font-size: 14px !important;
  }

  .el-button {
    position: absolute;
    bottom: 36px;
    left: 50%;
    width: 400px;
    transform: translateX(-50%);
  }
</style>
