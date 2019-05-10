<template>
  <div class="page auth-step1">
    <v-form issue="2" />
    <el-button
      type="primary"
      @click="$router.push('/demo2/pages/auth-step2')"
    >下一步
    </el-button>
  </div>
</template>

<script>
import vForm from '@/components/form.vue';

export default {
  name: 'index.vue',
  components: {
    vForm,
  },
};
</script>

<style scoped>
  .auth-step1 {
    height: calc(100% - 24px);
    background-color: #fafafa;
    padding: 24px;

  }

  >>> .el-form-item__label {
    color: #999 !important;
    font-size: 14px !important;
  }

  >>> input:disabled {
    border: none;
    background-color: transparent !important;
    color: #333 !important;
    font-size: 18px;
    padding: 0;
  }

  .el-button {
    width: 500px;
    position: absolute;
    bottom: 12px;
    left: 50%;
    transform: translateX(-50%);
  }
</style>
