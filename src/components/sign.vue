<template>
    <div class="sign">
        <el-form :label-position="labelPosition" :model="signData">
            <el-form-item label="受理意见:" v-if="!isabled">
                <el-select v-model="optionValue" placeholder="请选择" v-if="issue === '3'">
                    <el-option v-for="item in options" :key="item.value" :value="item"></el-option>
                </el-select>
                <div v-if="issue === '2'" class="radio-wrapper">
                    <el-radio v-model="radio" label="同意">同意</el-radio>
                    <el-radio v-model="radio" label="拒绝">拒绝</el-radio>
                </div>
            </el-form-item>
            <div style="font-size:16px;" v-if="!isabled">
                审查费{{issue === '2' ? '：54321元' : '共计：321321元'}}</div>
            <el-form-item label="申请人姓名:">
                <el-input v-model="signData.name" style="width: 150px;"
                :disabled="!isabled"></el-input>
            </el-form-item>
            <el-form-item label="申请人职务:" v-if="issue === '3' && isabled">
                <el-input v-model="signData.duties" style="width: 200px;"></el-input>
            </el-form-item>
            <el-form-item label="申请人签名:"
            style="margin-left: 480px;vertical-align: middle;margin-top: 30px;margin-right: 526px;">
                <span style="width: 150px;">
                    <img src="../views/demo-2/Home/sign.png" alt="">
                </span>
            </el-form-item>
            <el-form-item label="日期:">
                <span>{{signData.date}}</span>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
  props: ['issue', 'isabled'],
  data() {
    return {
      radio: '',
      optionValue: '',
      labelPosition: 'left',
      signData: {
        name: '',
        duties: '',
        sign: '',
        date: '',
      },
      options: ['同意受理', '拒绝受理',]
    }
  },
  methods: {
    getNowFormatDate() { // 获取当前时间
      const date = new Date();
      const seperator1 = '-';
      const year = date.getFullYear();
      let month = date.getMonth() + 1;
      let strDate = date.getDate();
      if (month >= 1 && month <= 9) {
        month = `0${month}`;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = `0${strDate}`;
      }
      this.signData.date = `${year}${seperator1}${month}${seperator1}${strDate}`;
    },
    setData() {
      this.signData.name = '刘XX';
    },
    acceptParams() {
      if (this.issue === '2') {
        this.labelPosition = 'top';
        const Arr = document.getElementsByClassName('el-form-item');
        for (let i = 0; i < Arr.length; i++) {
          Arr[i].className = 'el-form-item el-form-item2';
        }
      }
    },
  },
  mounted() {
    this.getNowFormatDate();
    this.acceptParams();
    if (!this.isabled) {
      this.setData();
    }
  },
}
</script>
<style lang="scss" scoped>
    .el-form{
        .el-form-item{
            display: inline-block;
        }
        .el-button{
            display: block;
            width: 200px;
            height: 40px;
            margin: 40px auto 20px;
        }
        .el-select,.radio-wrapper{
            margin-bottom: 20px;
        }
    }
</style>
