<template>
    <div class="sign">
        <el-form :label-position="labelPosition" :model="signData">
            <el-form-item label="申请人姓名:">
                <el-input v-model="signData.name" style="width: 150px;"></el-input>
            </el-form-item>
            <el-form-item label="申请人职务:">
                <el-input v-model="signData.duties" style="width: 200px;"></el-input>
            </el-form-item>
            <el-form-item label="申请人签名:">
                <span style="width: 150px;"></span>
            </el-form-item>
            <el-form-item label="日期:">
                <span>{{signData.date}}</span>
            </el-form-item>
            <el-button type="primary">检验并提交</el-button>
        </el-form>
    </div>
</template>
<script>
export default {
    data () {
        return {
            labelPosition: 'right',
            signData: {
                name: '',
                duties: '',
                sign: '',
                date: '',
            }
        }
    },
    methods: {
      getNowFormatDate() { // 获取当前时间
        const date = new Date();
        const seperator1 = '-';
        const year = date.getFullYear();
        let month = date.getMonth() + 1;
        let strDate = date.getDate();
        const hour = date.getHours();
        const minutes = date.getMinutes();
        if (month >= 1 && month <= 9) {
            month = `0${month}`;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = `0${strDate}`;
        }
        this.signData.date = `${year }${seperator1 }${month }${seperator1}${strDate}`;
      },
    },
    mounted () {
        this.getNowFormatDate();
    }
}
</script>
<style lang="scss">
    .el-form{
        .el-button{
            display: block;
            width: 200px;
            height: 40px;
            margin: 40px auto 20px;
        }
    }
</style>
