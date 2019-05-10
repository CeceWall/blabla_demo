<template>
  <div class="auth page">
    <div style="padding-top: 12px;display: flex;justify-content: center">
      <img src="./top.png" />
    </div>
    <div style="margin-top: 12px;padding: 0 24px;display: flex">
      <div>
        <img src="./left-1.png" />
      </div>
      <div style="margin-left: 30px">
        <div style="margin-top: -5px;position: relative">
          <img src="./right-1.png" />
          <div
            style="position: absolute;right: 250px;"
            v-for="(type,index) of auth"
            :style="{top: `${85 + index * 48}px`}"
          >
            <el-button
              :type="type" size="small"
              @click="handleAuth(index)"
            >
              {{ type==='success' ? '已同意' : '同意'}}

            </el-button>
            <el-button type="default" size="small" v-if="type==='primary'">驳回</el-button>
          </div>
          <div style="position: absolute; right: 268px;top: 560px">
            <input type="file" style="position:absolute;top: 0;left: 0;right:0;bottom: 0;opacity: 0"
                   accept=".xlsx"
            />
            <el-button type="primary" size="small">上传审查报告</el-button>
          </div>
          <div
            style="position: absolute; right: 258px;" v-for="(i, index) of [1,2,3]"
            :style="{top: `${320 + index * 48}px`}"
          >
            <div>
              <el-button size="small" type="primary">召开项目组会议</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index.vue',
  computed: {},
  data() {
    return {
      auth: [
        'primary',
        'primary',
        'primary',
      ],
    };
  },
  methods: {
    handleAuth(index) {
      this.auth.splice(index, 1, 'success');
    }
  }
};
</script>

<style lang="scss" scoped>
  .auth.page {
    height: 100%;
    background-color: #fafafa;
  }
</style>
