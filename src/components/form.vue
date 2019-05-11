<template>
  <el-form :label-position="labelPosition" :model="formData">
    <el-form-item label="申请人">
      <el-input
        v-model="formData.applicantMan" style="width: 300px;"
        :disabled="!isabled"
      ></el-input>
    </el-form-item>
    <br />
    <el-form-item label="申请人注册地址">
      <el-input
        v-model="formData.registerAddr" style="width: 450px;"
        :disabled="!isabled"
      ></el-input>
    </el-form-item>
    <el-form-item label="邮编">
      <el-input
        v-model="formData.postal" style="width: 200px;"
        :disabled="!isabled"
      ></el-input>
    </el-form-item>
    <br v-if="issue === '2'" />
    <el-form-item label="申请人生产设施所在地">
      <el-input
        v-model="formData.productAddr" style="width: 200px;"
        :disabled="!isabled"
      ></el-input>
    </el-form-item>
    <br v-if="issue === '3'" />
    <el-form-item label="电话">
      <el-input
        v-model="formData.tel" style="width: 250px;"
        :disabled="!isabled"
      ></el-input>
    </el-form-item>
    <el-form-item label="传真">
      <el-input
        v-model="formData.fax" style="width: 250px;"
        :disabled="!isabled"
      ></el-input>
    </el-form-item>
    <el-form-item label="电子邮件">
      <el-input
        v-model="formData.Email" style="width: 250px;"
        :disabled="!isabled"
      ></el-input>
    </el-form-item>
    <br />
    <el-form-item label="所申请产品名称">
      <el-input
        v-model="formData.partName" style="width: 250px;"
        :disabled="!isabled"
      ></el-input>
    </el-form-item>
    <el-form-item label="型号">
      <el-input
        v-model="formData.partNum" style="width: 250px;"
        :disabled="!isabled"
      ></el-input>
    </el-form-item>
    <br />
    <el-form-item :label="issue === '2'?'证件编号' : '使用范围'"
    v-if="isabled && issue === '3' || issue === '2'">
      <el-input
        v-model="formData.range" style="width: 250px;"
        :disabled="!isabled"
      ></el-input>
    </el-form-item>
    <el-form-item label="件号/型号" v-if="isabled || issue === '2'">
      <el-input
        v-model="formData.replaceNum" style="width: 250px;"
        :disabled="!isabled"
      ></el-input>
    </el-form-item>
    <br v-if="issue === '2'" />
    <el-form-item label="制造人" v-if="issue === '3' &&  isabled">
      <el-input v-model="formData.productMan" style="width: 250px;"></el-input>
    </el-form-item>
    <br />
    <el-form-item label="所装" v-if="isabled || issue === '2'">
      <el-radio v-model="radio" label="hang">航空器</el-radio>
      <el-radio v-model="radio" label="fa">发动机</el-radio>
      <el-radio v-model="radio" label="luo">螺旋桨</el-radio>
    </el-form-item>
    <br v-if="issue === '2'" />
    <el-form-item :label="issue === '2'?'原产品型号' : '型别'" v-if="isabled">
      <el-input v-model="formData.type" style="width: 200px;"></el-input>
    </el-form-item>
    <el-form-item :label="issue === '2'?'原产品TC号' : '序列号(如适用)'" v-if="isabled || issue === '2'">
      <el-input
        v-model="formData.seriesNum" style="width: 200px;"
        :disabled="!isabled"
      ></el-input>
    </el-form-item>
    <el-form-item label="注册号(如适用)" v-if="issue === '3' && isabled">
      <el-input
        v-model="formData.registerNum" style="width: 200px;"
        :disabled="!isabled"
      ></el-input>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  props: ['issue', 'isabled'],
  data() {
    return {
      labelPosition: 'right',
      formData: {
        applicantMan: '',
        registerAddr: '',
        postal: '',
        productAddr: '',
        tel: '',
        fax: '',
        Email: '',
        partName: '',
        partNum: '',
        range: '',
        replaceNum: '',
        productMan: '',
        install: '',
        type: '',
        seriesNum: '',
        registerNum: '',
      },
      radio: '',
    };
  },
  methods: {
    acceptParams() {
      if (this.issue == '2') {
        this.labelPosition = 'top';
        const Arr = document.getElementsByClassName('el-form-item');
        for (let i = 0; i < Arr.length; i++) {
          Arr[i].className = 'el-form-item el-form-item2';
        }
      }
    },
    setData() {
      this.formData.applicantMan = this.issue === '2' ? 'XXX航空工业' : 'XXX公司';
      this.formData.registerAddr = 'XX省XX市XX街XX号';
      this.formData.postal = '1234456';
      this.formData.tel = '1234-56789009';
      this.formData.fax = '1234-56789009';
      this.formData.Email = 'ABC@123.COM';
      this.formData.partName = this.issue === '2' ? '发动机' : '螺旋桨';
      this.formData.partNum = this.issue === '2' ? 'ASDF-XXX' : 'J17-G13';
      this.formData.productAddr = 'XX省XX市XX街XX号';
      this.formData.range = 'STC123*';
      this.formData.replaceNum = '无';
      this.formData.seriesNum = 'Y7-123';
      this.formData.registerNum = 'TC321X';
      this.radio = 'luo';
    },
  },
  mounted() {
    this.acceptParams();
    if (!this.isabled) {
      this.setData();
    }
  },
};

</script>

<style lang="scss" scoped>
  .el-form {
    /deep/ .el-form-item {
      display: inline-flex;
      margin-bottom: -10px;
      margin-right: 23px;

      .el-form-item__label {
        font-size: 16px;
        color: #333;
        text-align: left;
      }

      .el-input__inner {
        height: 33px;
        line-height: 33px;
      }
    }

    /deep/ .el-form-item2 {
      display: inline-grid;
      margin-bottom: 0;

      .el-form-item__label {
        margin-bottom: 0;
        padding-bottom: 0;
        line-height: 22px;
      }
    }
  }
</style>
