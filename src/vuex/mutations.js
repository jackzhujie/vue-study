const state = {
	isLoading: false,
	menuPosition: '1-0',
	isMobile: false,
	isShowMenu: false
}

const mutations = {
	setShowLoading(state, val) {
		state.isLoading = val;
	},
	setMenuPosition(state, id) {
		state.menuPosition = id;
	},
	setIsMobile(state, value) {
		state.isMobile = value
	},
	setIsShowMenu(state, value) {
		state.isShowMenu = value
	},
}


export {
	state, mutations
}
