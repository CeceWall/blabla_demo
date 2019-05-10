<template>
    <div class="examine">
        <img src="../../demo-3/image/7审批发证.png" alt="" style="width:1903px">
        <div class="accept">
            <el-button type="primary">批准通过并发证</el-button>
        </div>
        <div class="accept-wrapper">
            <el-button type="primary">通过</el-button>
            <el-button type="primary">通过</el-button>
            <el-button type="primary">通过</el-button>
            <el-button type="primary" style="margin-bottom:80px">通过</el-button>
            <el-button type="primary">通过</el-button>
            <el-button type="primary" style="margin-bottom:87px">通过</el-button>
            <el-button type="primary">通过</el-button>
            <el-button type="primary" style="margin-bottom:85px">通过</el-button>
            <el-button type="primary">通过</el-button>
            <el-button type="primary">通过</el-button>
        </div>
        <span class="search-btn" @click="show">搜索</span>
        <img src="../../demo-3/image/浮层.png" alt="" class="msgBox" v-if="isShow">
    </div>
</template>
<script>
export default {
    data () {
        return{
            isShow: false
        }
    },
    methods: {
        show () {
            this.isShow = !this.isShow;
        }
    }
}
</script>
<style lang="scss">
    .examine{
        position: relative;
        .accept{
            position: absolute;
            bottom: 78px;
            left: 206px;
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
