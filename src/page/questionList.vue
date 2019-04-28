<template>
<!--    前端问题集合-->
    <div class="questionList">
        <phrase></phrase>
    </div>
</template>

<script>
    import phrase from '../components/phrase'
    export default {
        name: "questionList",
        data() {
            return {}
        },
        components:{phrase},
        methods: {},
        computed: {},
        created: function () {
        }
    }
</script>

<style lang="scss">
    .questionList {
    }
</style>
