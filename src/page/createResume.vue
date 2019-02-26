<template>
    <!--制作简历-->
    <div class="createResume">
        <h1 style="margin-bottom: 20px;">郑重声明，以下所有数据都保存在您本地，不会被第三方存储和引用。</h1>
        <div class="step">
            <el-steps :space="200" :active="active" finish-status="success" align-center>
                <el-step title="填写基本信息"></el-step>
                <el-step title="好友分布情况"></el-step>
                <el-step title="技能分布情况"></el-step>
                <el-step title="个人博客信息"></el-step>
                <el-step title="工作经历"></el-step>
                <el-step title="求职意向"></el-step>
                <el-step title="个人评价"></el-step>
            </el-steps>
        </div>
        <div class="content">
            <transition name="change">
                <baseInfoTpl v-if="active === 0"></baseInfoTpl>
                <friendDistribution></friendDistribution>
            </transition>
        </div>
        <div class="foot">
            <el-button type="primary" @click="nextStep">下一步</el-button>
            <el-button type="primary" @click="beforeStep">上一步</el-button>
        </div>
    </div>
</template>

<script>
    import baseInfoTpl from "../components/createResume/baseInfo"
    import friendDistribution from '../components/createResume/friendDistribution'

    export default {
        name: "createResume",
        data() {
            return {
                active:0,
                baseInfo:{}
            }
        },
        methods: {
            nextStep(){
                this.active++
            },
            beforeStep(){
                this.active--
            }
        },
        components:{baseInfoTpl,friendDistribution},
        computed: {},
        created: function () {
        }
    }
</script>

<style lang="scss">
    .createResume {
        padding: 20px;
        max-width: 1600px;
        margin: 0 auto;
        .step{
            margin-bottom: 40px;
            text-align: center;
        }
        .foot{
            text-align: center;
        }

        .change-enter-active, .change-leave-active {
            transition:  all 1s;
        }
        .change-enter, .change-leave /* .fade-leave-active below version 2.1.8 */ {
            transform: translateX(100%);
        }
    }
</style>
