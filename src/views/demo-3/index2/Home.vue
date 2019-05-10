<template>
    <div class="applicant">
        <div class="title" @click="jump"></div>
    </div>
</template>
<script>
export default {
  methods: {
    jump() {
      this.$router.push('/demo3/pages/acce2');
    },
  },
};
</script>
<style lang="scss" scoped>
    .applicant{
        height: 100%;
        width: 100%;
        background: url('../image/4在审项目.png');
        .title{
            position: absolute;
            left:13.6%;
            top:106px;
            cursor: pointer;
            width:460px;
            height:88px;
        }
        .title:hover{
            color:#4572fe;
        }
    }
</style>
