import Vue from 'vue';
import router from './router';

const initialUser = JSON.parse(localStorage.getItem('user')) || {};

export default new Vue({
  router,
  data() {
    return {
      user: initialUser,
      demo3: {},
      demo2: {
        home: {
          XXX航空工业: {
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
              {
                name: '办结项目',
                image: [
                  require('@/views/demo-2/Home/tab2.png'),
                  require('@/views/demo-2/Home/tab2.png'),
                ]
              },
              { name: '审定中项目' },
              { name: '项目草稿' },

            ],
            tab3: [
              {
                name: '证件申请',
                text: [
                  '零部件设计批准认可证',
                  '型号合格证',
                  '补充型号合格证',
                  '型号认可证',
                  '出口适航证',
                ],

              },
            ],
          },
        },
      },
    };
  },
  computed: {
    whichDemo() {
      return /(demo\d)/.exec(this.$router.currentRoute.fullPath)[0];
    },
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
