<template>
  <div class="cssSprites">
    <h1>css雪碧图演示</h1>
    <ul>
      <li v-for="item in moodList" :key="item" :class="item"></li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "cssSprites",
        components: {},
        data() {
            return {
              moodList: ['bg-mood_afraid', 'bg-mood_angry', 'bg-mood_calm', 'bg-mood_expect', 'bg-mood_happy', 'bg-mood_miss','bg-mood_nervous', 'bg-mood_sad', 'bg-mood_surprised']
            }
        },
        methods: {

        },
        computed: {},
        created: function () {}
    }
</script>

<style lang="scss">
  .cssSprites{
    li {
      display: inline-block;
    }
    .bg-mood_afraid {
      width: 176px; height: 176px;
      background: url('../assets/img/css_sprites.png') -10px -10px;
    }
    .bg-mood_angry {
      width: 176px;
      height: 176px;
      background: url('../assets/img/css_sprites.png') -206px -10px;
    }
    .bg-mood_calm {
      width: 176px; height: 176px;
      background: url('../assets/img/css_sprites.png') -10px -206px;
    }
    .bg-mood_expect {
      width: 176px; height: 176px;
      background: url('../assets/img/css_sprites.png') -206px -206px;
    }
    .bg-mood_happy {
      width: 176px; height: 176px;
      background: url('../assets/img/css_sprites.png') -402px -10px;
    }
    .bg-mood_miss {
      width: 176px; height: 176px;
      background: url('../assets/img/css_sprites.png') -402px -206px;
    }
    .bg-mood_nervous {
      width: 176px; height: 176px;
      background: url('../assets/img/css_sprites.png') -10px -402px;
    }
    .bg-mood_sad {
      width: 176px; height: 176px;
      background: url('../assets/img/css_sprites.png') -206px -402px;
    }
    .bg-mood_surprised {
      width: 176px; height: 176px;
      background: url('../assets/img/css_sprites.png') -402px -402px;
    }
  }
</style>
