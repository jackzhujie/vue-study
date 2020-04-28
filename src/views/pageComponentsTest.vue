<template>
  <div class="pageComponentsTest">
    <page-component :page-config="pageConfigTotal" @changeCurrentPage="changePage"></page-component>
    <page-component :page-config="pageConfigPageTotal"></page-component>
  </div>
</template>
<script>
  import pageComponent from "../components/pageComponent"
  export default {
    name: "pageComponentsTest",
    data() {
      return {
        pageConfigTotal:{total:21,pageSize:10,pageNo:1},
        pageConfigPageTotal:{total:21,pageSize:10,pageNo:1,pageTotal:50}
      }
    },
    components:{'page-component':pageComponent},
    methods: {
      changePage(page){
        this.pageConfigTotal.pageNo = page
      }
    }
  }
</script>

<style lang="scss">
  .pageComponentsTest {
    padding-top: 100px;
    .pageComponent{
      margin-bottom: 20px;
      text-align: center;
    }
  }
</style>
