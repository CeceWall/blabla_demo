<template>
    <div class="applicant">
        <div class="out" @click="out">退出</div>
        <div class="upload">
            <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                multiple
                >
                <el-button size="small">点击上传</el-button>
            </el-upload>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      input: '',
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
