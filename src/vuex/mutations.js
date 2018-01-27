const state = {
  isLoading:false,
  menuPosition:'1-0',
}

const mutations = {
  setShowLoading(state,val){
    state.isLoading = val;
  },
  setMenuPosition(state,id){
    state.menuPosition = id;
  }
}


export  {
  state,mutations
}
