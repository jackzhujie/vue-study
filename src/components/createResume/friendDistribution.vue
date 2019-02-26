<template>
    <!--好友分布-->
    <div class="friendDistribution">
        <div class="select-list" v-for="(item,index) in selectItemList" :key="index">
            <el-select v-model="item.name" placeholder="选择地区">
                <el-option v-for="(pro,index1) in provideData" :disabled="!isSelect(pro,item.name)"
                           :key="index1"
                           :value="pro" :label="pro"></el-option>
            </el-select>
            <el-input placeholder="请输入好友人数" v-model="item.count" type="number" class="money"></el-input>
            <el-button type="info" icon="el-icon-circle-plus-outline" circle @click="add"
                       v-show="selectItemList.length <= 5"></el-button>
            <el-button type="info" icon="el-icon-remove-outline" circle @click="reduce(index)"
                       v-show="selectItemList.length > 1"></el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "friendDistribution",
        data() {
            return {
                selectItemList:[],
                provideData: ["北京市（京）", "天津市（津）", "上海市（沪）", "重庆市（渝）", "河北省（冀）", "河南省（豫）", "云南省（云）", "辽宁省（辽）", "黑龙江省（黑）", "湖南省（湘）", "安徽省（皖）", "山东省（鲁）", "新疆维吾尔（新）", "江苏省（苏）", "浙江省（浙）", "江西省（赣）", "湖北省（鄂）", "广西壮族（桂）", "甘肃省（甘）", "山西省（晋）", "内蒙古（蒙）", "陕西省（陕）", "吉林省（吉）", "福建省（闽）", "贵州省（贵）", "广东省（粤）", "青海省（青）", "西藏（藏）", "四川省（川）", "宁夏回族（宁)", "海南省（琼）"]
            }
        },
        methods: {
            reduce(index) {
                this.selectItemList.splice(index, 1)
            },
            add() {
                for(let i in this.provideData){
                    let flag = false
                    for(let j in this.selectItemList){
                        if(this.provideData[i] === this.selectItemList[j].name){
                            flag = true
                            break;
                        }
                    }
                    if(!flag){
                        this.selectItemList.push({name: this.provideData[i], count: 0})
                        break;
                    }
                }
            },
            isSelect(name, currentId) {
                if (currentId === name) {
                    return true
                }
                for (let i in this.selectItemList) {
                    if (this.selectItemList[i].name === name) {
                        return false
                    }
                }
                return true
            }
        },
        computed: {},
        created: function () {
            this.selectItemList = [{name:this.provideData[0],count:0}]
        }
    }
</script>

<style lang="scss">
    .friendDistribution {
        width: 600px;
        margin: 0 auto;
        .select-list{
            .money{
                width: 200px;
            }
        }
        .el-select{
            margin-bottom: 20px;
        }
    }
</style>
