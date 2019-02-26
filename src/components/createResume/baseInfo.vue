<template>
    <div class="baseInfo">
        <el-form ref="form" :model="baseInfo" label-width="80px">
            <el-form-item label="姓名">
                <el-input v-model="baseInfo.name" clearable></el-input>
            </el-form-item>
            <el-form-item label="性别">
                <el-radio-group v-model="baseInfo.sex">
                    <el-radio label="男"></el-radio>
                    <el-radio label="女"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="工作年限">
                <el-select v-model="baseInfo.workYear" clearable placeholder="请选择工作年限">
                    <el-option label="小菜鸡" value="shanghai"></el-option>
                    <el-option label="1年" value="shanghai"></el-option>
                    <el-option label="1.5年" value="shanghai"></el-option>
                    <el-option label="2年" value="shanghai"></el-option>
                    <el-option label="2.5年" value="shanghai"></el-option>
                    <el-option label="3年" value="shanghai"></el-option>
                    <el-option label="老司机" value="shanghai"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="年龄">
                <el-input v-model="baseInfo.age" type="number" clearable></el-input>
            </el-form-item>
            <el-form-item label="学历">
                <el-input v-model="baseInfo.education" type="number" clearable></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "baseInfo",
        data() {
            return {
                baseInfo:{}
            }
        },
        methods: {},
        computed: {},
        created: function () {
        }
    }
</script>

<style lang="scss">
    .baseInfo {
        width: 600px;
        margin: 0 auto;
    }
</style>
