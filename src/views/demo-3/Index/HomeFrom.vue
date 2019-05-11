<template>
    <div class="applicant">
        <div class="out" @click="out">退出</div>
        <div class="form-wrapper">
            <v-form issue='3' isabled=true></v-form>
        </div>        
        <el-input class="input" v-model="input"></el-input>
        <div class="upload">
            <el-upload
                class="upload-demo"
                action="/posts"
                multiple
                >
                <el-button size="small">点击上传</el-button>
            </el-upload>
        </div>
        <div class="btn">
            <el-button type="primary" @click="btn='提交成功'">{{btn}}</el-button>
        </div>
    </div>
</template>
<script>
import vForm from '../../../components/form'

export default {
  components: {
      vForm,
  },
  data() {
    return {
      input: '',
      btn: '检验并提交',
    };
  },
  methods: {
    out() {
      this.$router.push('/demo3/login1');
    },
  },
};
</script>
<style lang="scss" >
    .applicant{
        height: 100%;
        width: 100%;
        background: url('../image/3申请.png');
        .btn{
            position: absolute;
            left:48%;
            top:930px;
            button{
                width:200px;
                height:40px;
            }
        }
        .form-wrapper{
            background-color: #f6f6f6;
            position: absolute;
            left: 293px;
            top: 88px;
            padding-right: 55px;
            padding-bottom: 7px;
        }
        .out{
            position: absolute;
            right:1.2%;;
            top:25px;
            font-size:12px;
            color:rgb(238, 238, 238);
            cursor: pointer;
            width:30px;
            height:16px;
            &.out:hover{
                font-weight:550;
            }
        }
        .input{
            position: absolute;
            left:33.5%;
            top:863px;
            width:150px;
            input{
                border-radius:0;
                height:35px;
            }
        }
        .upload{
            position: absolute;
            left:22%;
            top:422px;
        }
    }
</style>
