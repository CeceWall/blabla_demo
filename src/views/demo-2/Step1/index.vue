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

export default {
  name: 'index',
  components: {
    vForm,
  }
};
</script>

<style scoped lang="scss">
  .step1 {
    padding-bottom: 24px;
    background: #efefef;
    background-clip: content-box;
    height: 100%;
  }
  .el-button {
    position: absolute;
    bottom: 36px;
    left: 50%;
    width: 400px;
    transform: translateX(-50%);
  }
</style>
