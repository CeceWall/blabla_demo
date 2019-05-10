<template>
  <div class="step2 page" v-loading="loading">
    <v-sign></v-sign>
    <el-button type="primary" @click="handle">自动校验，并提交</el-button>
  </div>
</template>

<script>
import vSign from '@/components/sign.vue';
import swal from 'sweetalert';

export default {
  name: 'Step2',
  components: {
    vSign,
  },
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    handle() {
      swal('操作成功', '校验并提交成功！', 'success', {
        buttons: ['确认'],
      })
        .then(() => {
          this.$router.replace('/demo2/pages/home');
        });
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
