<!--ws测试-->
<template>
  <div class="wsTest">
    <div class="online">当前在线用户数：{{userCount}}</div>
    <div class="user-id">当前分配的用户Id：{{userUUid.split('-')[0]}}</div>
    <div class="msg-box">
      <ul class="msg-list" v-show="msgList.length">
        <li class="msg-item" v-for="(item , index) in msgList" :key="index" :class="{'is-me': userUUid === item.userUUid}">
          <div class="name">用户：{{item.userUUid.split('-')[0]}}</div>
          <div class="msg-content">
            {{item.msg}}
          </div>
        </li>
      </ul>
    </div>
    <div class="input-box">
      <el-input v-model="sendMsg" type="textarea" maxlength="200" :rows="2" placeholder="请输入消息"></el-input>
      <el-button type="primary" style="margin-top: 20px" size="small" @click="send">发送</el-button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "wsTest",
        components: {},
        data() {
            return {
              sendMsg: '',
              userNum: '',
              userCount: 0,
              userUUid: '',
              msgList: []
            }
        },
        methods: {
          send() {
            if (this.sendMsg.trim()) {
              this.ws.send(JSON.stringify({type: 'msg', msg: this.sendMsg, userUUid: this.userUUid}))
            }
          }
        },
        computed: {},
        created: function () {
          this.ws = new WebSocket("ws://203.195.156.57:30002");
          this.ws.addEventListener('open', () => {
            this.ws.send(JSON.stringify({type: 'connection'}));
          })
          this.ws.addEventListener('message', (evt) => {
            const {type, userUUid, msg} = JSON.parse(evt.data);
            if (type === 1) {
              this.msgList.push({userUUid, msg})
            } else if( type === 3) {
                this.userUUid = msg
            }
            else {
              this.userCount = msg
            }
          })
          this.ws.addEventListener('error', (a, b) => {
              alert(JSON.stringify(a, ["message", "arguments", "type", "name"]))
              // alert(JSON.stringify(b))
              console.log(arguments, 'arg')
          })

          window.addEventListener('error', function (a, b) {
            alert(JSON.stringify(a))
            alert(JSON.stringify(b))
          })
        }
    }
</script>

<style lang="scss">
  .wsTest{
    font-size: 18px;
    font-weight: bold;
    .msg-list {
      border-radius: 4px;
      border: 1px solid #999;
      padding: 20px;
      margin-bottom: 20px;
      .msg-item {
        margin-bottom: 20px;
        .name {
          color: #333333;
        }
        .msg-content {
          font-size: 18px;
        }
        &.is-me {
          color: #0EA9FF;
          text-align: right;
          .name {
            color: #0EA9FF;
          }
        }
      }
    }
  }
</style>
