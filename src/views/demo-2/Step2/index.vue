<template>
  <div class="step2 page" v-loading="loading">
    <div>
      <h1>
        相关资料
      </h1>
      <Upload
        action="//jsonplaceholder.typicode.com/posts/" accept=".rar, .zip, .pdf, .doc, .jpg, .png"
        :on-success="handleS">
        <Button type="primary" icon="ios-cloud-upload-outline">点击上传资料</Button>
        <span style="margin-left: 12px; color: #999">支持扩展名: rar, zip, pdf, doc, docx, jpg, png</span>
      </Upload>
    </div>
    <v-sign issue="2" :isabled="true"/>
    <el-button type="primary" @click="handleClick" :disabled="disabled">自动校验，并提交</el-button>
  </div>
</template>

<script>
import vForm from '@/components/form.vue';
import vSign from '@/components/sign.vue';
import Data from '@/data';
import swal from 'sweetalert';

export default {
  name: 'Step2',
  components: {
    vForm, vSign,
  },
  data() {
    return {
      loading: false,
      disabled: true,
    };
  },
  created() {
    Data.breadcrumb = '零部件审定 > <span class="breadcrumb-last">零部件制造人审评书</span>';
  },
  methods: {
    handleS() {
      console.log(1);
      this.disabled = false;
    },
    handleClick() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        swal('提交成功', '你的资料已提交', 'success', {
          buttons: ['确认'],
        })
          .then(() => {
            this.$router.replace('/demo2/pages/home');
          });
      }, 1000);
    },
  },
};
</script>

<style scoped lang="scss">
  h1 {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 12px;
  }

  .step2 {
    height: calc(100% - 24px);
    background-color: #efefef;
    padding: 24px;
  }

  .el-button {
    position: absolute;
    bottom: 36px;
    left: 50%;
    width: 400px;
    transform: translateX(-50%);
  }
</style>
