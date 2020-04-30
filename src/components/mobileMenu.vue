<template>
    <div class="mobileMenu">
        <div class="top-bar">
            <i class="icon el-icon-s-home" @click="toHome"></i>
            <i class="icon el-icon-s-unfold" @click="changeShowMenu"></i>
        </div>
        <el-collapse-transition>
            <div class="mask" v-show="isShowMenu">
                <myMenu @jumpPage="$store.commit('setIsShowMenu', false)" class="my-menu"></myMenu>
            </div>
        </el-collapse-transition>
    </div>
</template>

<script>
	import myMenu from "./myMenu";

	export default {
		name: "mobileMenu",
		components: {myMenu},
		data() {
			return {
            }
		},
		methods: {
			changeShowMenu() {
				this.$store.commit('setIsShowMenu', !this.isShowMenu)
            },
			toHome() {
				this.$store.commit('setIsShowMenu', false)
				this.$router.push('/baseStudy')
            }
        },
        watch: {
			isShowMenu(val) {
				console.log(val, 'val')
				if (val) {
					document.getElementsByTagName("body")[0].style.overflow="hidden";
                } else {
					document.getElementsByTagName("body")[0].style.overflow="inherit";
                }
            }
        },
		computed: {
			isShowMenu() {
				return this.$store.state.isShowMenu
            }
        },
		created: function () {

		}
	}
</script>

<style lang="scss">
    .mobileMenu {
        position: fixed;
        width: 100%;
        z-index: 11;
        .top-bar {
            background-color: rgba(228, 228, 228, 0.9);
            display: flex;
            height: 50px;
            box-shadow: 0 0 8px #000;
            line-height: 50px;
            align-items: center;
            padding: 0 10px;
            justify-content: space-between;
            .icon {
                color: #606266;
                font-size: 22px;
            }
        }
        .mask {
            width: 100%;
            height: calc(100vh - 50px);
            left: 0;
            right: 0;
            top: 50px;
            bottom: 0;
            z-index: 111;
            overflow: auto;
            position: fixed;
            background: rgba(10, 10, 0, 0.7);
        }
        .my-menu,.el-menu {
            background: rgba(228, 228, 228, 0.9);
        }
    }
</style>
