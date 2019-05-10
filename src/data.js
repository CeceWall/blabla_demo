import Vue from 'vue';

const initialUser = JSON.parse(localStorage.getItem('user')) || {};

export default new Vue({
  data() {
    return {
      user: initialUser,
      home: {
        liuxu1111: {
          tab1: [
            {
              name: '待处理消息',
              text: ['1', '2', '3'],
            },
            {
              name: '待处理文档',
              text: [],
            },
            {
              name: '待处理图片',
              text: [],
            },
          ],
          tab2: [
            { name: '办结项目' },
            { name: '审定中项目' },
            { name: '项目草稿' },

          ],
        },
      },
    };
  },
  computed: {
    currentUser() {
      return this.user.username;
    },
  },
  methods: {
    login(username) {
      this.user.username = username;
      localStorage.setItem('user', JSON.stringify(this.user));
    },
  },
});
