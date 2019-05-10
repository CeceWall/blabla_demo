<template>
  <div class="step2 page" v-loading="loading">
    <v-form issue="2" :isabled="false"></v-form>
    <el-button type="primary" @click="handleClick">自动校验，并提交</el-button>
  </div>
</template>

<script>
import vForm from '@/components/form.vue';
import swal from 'sweetalert';

export default {
  name: 'Step2',
  components: {
    vForm,
  },
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    handleClick() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        swal('提交成功', '您的合格证已提交', 'success', {
          buttons: ['确认'],
        });
      }, 1000);
    },
  },
};
</script>

<style scoped lang="scss">
  .step2 {
    height: 100%;
    background-color: #efefef;
    background-clip: content-box;
    padding-bottom: 24px;
  }

  .el-button {
    position: absolute;
    bottom: 36px;
    left: 50%;
    width: 400px;
    transform: translateX(-50%);
  }
</style>
