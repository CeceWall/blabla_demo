<template>
    <div class="applicant">
        <div class="out" @click="out">退出</div>
        <div class="upload">
            <el-select v-model="input" placeholder="请选择">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
        </div>
        <div class="btn">
            <el-button type="primary" @click="btn='受理成功'">{{btn}}</el-button>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      btn: '检验并提交',
      input: '同意受理',
      options: [{
        value: '同意受理',
        label: '同意受理',
      }, {
        value: '拒绝受理',
        label: '拒绝受理',
      }],
    };
  },
  methods: {
    out() {
      this.$router.push('/demo3/login2');
    },
  },
};
</script>
<style lang="scss" >
    .applicant{
        height: 100%;
        width: 100%;
        background: url('../image/5受理通知书提交.png');
        .out{
            position: absolute;
            right:1.2%;;
            top:25px;
            font-size:12px;
            color:rgb(238, 238, 238);
            cursor: pointer;
            &.out:hover{
                font-weight:550;
            }
        }
        .btn{
            position: absolute;
            left:48%;
            top:930px;
            button{
                width:200px;
                height:40px;
            }
        }
        .upload{
            position: absolute;
            left:19%;
            top:327px;
        }
    }
</style>
