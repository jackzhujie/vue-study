<template>
    <div class="resume">
        <div class="banner">
            <img class="hidden-md-only hidden-lg-only hidden-xl-only" :src="bannerXSSM" alt="banner 图">
            <img class="hidden-xs-only hidden-sm-only hidden-lg-only hidden-xl-only" :src="bannerMD" alt="banner 图">
            <img class="hidden-xs-only hidden-sm-only hidden-md-only" :src="bannerLGXL" alt="banner 图">
        </div>
        <!-- 第一行 -->
        <el-row>
            <el-col :xs="24" :sm="24" :md="5" :lg="6" :xl="5" class="part">
                <PartOne></PartOne>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="8" class="part">
                <PartTwo></PartTwo>
            </el-col>
            <el-col :xs="24" :sm="24" :md="7" :lg="6" :xl="11" class="part">
                <PartThree></PartThree>
            </el-col>
        </el-row>
        <!-- 第二行 -->
        <el-row>
            <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8" class="part">
                <PartFour></PartFour>
            </el-col>
            <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8" class="part">
                <PartFive></PartFive>
            </el-col>
            <el-col :xs="24" :sm="24" :md="4" :lg="4" :xl="4" class="part">
                <PartSix></PartSix>
            </el-col>
            <el-col :xs="24" :sm="24" :md="4" :lg="4" :xl="4" class="part">
                <PartSeven></PartSeven>
            </el-col>
        </el-row>
    </div>

</template>
<script>
    // 路由懒加载
    const PartOne = () => import('@/components/resume/PartOne');
    const PartTwo = () => import('@/components/resume/PartTwo');
    const PartThree = () => import('@/components/resume/PartThree');
    const PartFour = () => import('@/components/resume/PartFour');
    const PartFive = () => import('@/components/resume/PartFive');
    const PartSix = () => import('@/components/resume/PartSix');
    const PartSeven = () => import('@/components/resume/PartSeven');

    export default {
        name: "resume",
        components:{PartOne,PartTwo,PartThree,PartFour,PartFive,PartSix,PartSeven},
        data() {
            return {
                bannerXSSM: require("../assets/img/banner_640.png"),
                bannerMD: require("../assets/img/banner_1000.png"),
                bannerLGXL: require("../assets/img/banner.png"),
            };
        }
    };
</script>

<style>
    body {
        background: #011128;
        color: #fff;
    }
    .app {
        width: 100%;
    }
    .part {
        padding: 20px;
    }
    .banner img {
        width: 100%;
        height: 80px;
    }
    .BMap_cpyCtrl, .BMap_noprint, .anchorBL {
        display: none !important;
    }
</style>
