<template>
    <div class="examine">
        <img src="../../demo-3/image/7审批发证.png" alt="" style="width:1903px" @click="hide">
        <div class="accept">
            <el-button type="primary" @click="leftAgree" :class="{active:leftAgr}">{{text}}</el-button>
        </div>
        <div class="accept-wrapper">
            <el-button type="primary" @click="accept(index)" v-for="(item, index) in btns"
            :key="item.index"
            :class="{green:item.flag,margin87:item.size==='80',margin80:item.size==='87',margin85:item.size==='85'}">
            {{item.text}}
        </el-button>
        </div>
        <span class="search-btn" @click="show">搜索</span>
        <img src="../../demo-3/image/浮层.png" alt="" class="msgBox" v-if="isShow">
    </div>
</template>
<script>
export default {
    data () {
        return{
            isShow: false,
            leftAgr: false,
            text: '批准通过并发证',
            btns: [{
                text: '通过',
                flag: false,
                size: 0,
            },
            {
                text: '通过',
                flag: false,
                size: 0,
            },
            {
                text: '通过',
                flag: false,
                size: 0,
            },
            {
                text: '通过',
                flag: false,
                size: '87',
            },
            {
                text: '通过',
                flag: false
            },
            {
                text: '通过',
                flag: false,
                size: '85',
            },
            {
                text: '通过',
                flag: false,
                size: 0,
            },
            {
                text: '通过',
                flag: false,
                size: '80',
            },
            {
                text: '通过',
                flag: false,
                size: 0,
            },
            {
                text: '通过',
                flag: false,
                size: 0,
            },]
        }
    },
    methods: {
        show () {
            this.isShow = !this.isShow;
        },
        accept (index) {
            this.btns[index].text = '已通过';
            this.btns[index].flag = true;
            console.log(this.btns);
        },
        leftAgree () {
            this.leftAgr = true;
            this.text = '已提交制证';
        },
        hide () {
            this.isShow = false;
        }
    },
}
</script>
<style lang="scss">
    .examine{
        position: relative;
        .accept{
            position: absolute;
            bottom: 78px;
            left: 206px;
            .el-button{
                &.active{
                background-color: rgba(155,224,176,1); 
                }
            }            
        }
        .accept-wrapper{
            position: absolute;
            top:273px;
            left: 1181px;
            .el-button{
                display: block;
                height: 30px;
                line-height: 5px;
                margin-bottom: 19px;
                margin-left: 0;
                width: 70px;
                padding: 0;
                text-align: center;
                border:0;
                &.green{
                    background-color: rgba(155,224,176,1);
                }
                &.margin80{
                    margin-bottom: 80px;
                }
                &.margin85{
                    margin-bottom: 85px;
                }
                &.margin87{
                    margin-bottom: 87px;
                }
            }
        }
        .search-btn{
            display: inline-block;
            position: absolute;
            right: 58px;
            top:102px;
            color: #409EFF;
            border: 1px solid #409EFF;
            font-size: 16px;
            width: 100px;
            text-align: center;
            border-radius: 4px;
            cursor: pointer;
        }
        .msgBox{
            position: absolute;
            right: 45px;
            top:130px;
        }
    }
</style>
