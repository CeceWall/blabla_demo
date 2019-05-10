<template>
    <div class="applicant">
        <div class="out">退出</div>
        <el-input class="input" v-model="input"></el-input>
    </div>
</template>
<script>
export default {
  data() {
    return {
      input: '',
    };
  },
};
</script>
<style lang="scss" >
    .applicant{
        height: 100%;
        width: 100%;
        background: url('../image/3申请.png');
        .out{
            position: absolute;
            right:21px;;
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
    }
</style>
