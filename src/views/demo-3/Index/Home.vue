<template>
    <div class="applicant">
        <div class="title" @click="jump">型号合格证</div>
    </div>
</template>
<script>
export default {
  methods: {
    jump() {
      this.$router.push('/demo3/pages/applicant');
    },
  },
};
</script>
<style lang="scss" scoped>
    .applicant{
        height: 100%;
        width: 100%;
        background: url('../image/2申请人.png');
        .title{
            position: absolute;
            left:7.5%;
            top:739px;
            color:#505050;
            cursor: pointer;
        }
        .title:hover{
            color:#4572fe;
        }
    }
</style>
