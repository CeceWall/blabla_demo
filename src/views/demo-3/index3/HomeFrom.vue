<template>
    <div class="applicant">
      <div class="members">
            <span
              v-for="i in span"
              :key="i"
             :class="i.show?'span':''"
            @click="handle(i.name)"
             >{{i.name}}</span>
        </div>
        <el-button class="btn" @click="out">选定完成</el-button>
    </div>
</template>
<script>

export default {
  data() {
    return {
      span: [{ name: '张三', show: false },
        { name: '王秒', show: false },
        { name: '李依依', show: false },
        { name: '王五', show: false },
        { name: '林山', show: false },
        { name: '马三立', show: false },
      ],
    };
  },
  methods: {
    handle(name) {
      this.span.forEach((ite) => {
        const item = ite;
        // eslint-disable-next-line eqeqeq
        if (item.name == name) {
          item.show = !item.show;
        }
      });
    },
    out() {
      this.$router.push('/demo3/pages/examine');
    },
  },
};
</script>
<style lang="scss" >
    .applicant{
        height: 100%;
        width: 100%;
        background: url('../image/6审查组员.png');
        .members{
          position:absolute;
          left:14.6%;
          top:125px;
          span{
            display: inline-block;
            padding:12px 64px;
            margin-right:20px;
            background: #fff;
            border:1px solid #eee;
            cursor: pointer;
            color:rgb(49, 49, 49);
          }
          .span{
            border:1px solid #4572fe;
            color:#4572fe;
          }
        }
        .btn{
          position:absolute;
          left:14.6%;
          top:278px;
          width:200px;
          height:40px;
          background: #4f7dfe;
          color:#fff;
        }
    }
</style>
