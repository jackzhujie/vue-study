// 连接状态的枚举
const readyStateMap = {
	0: '连接尚未建立',
	1: '连接已建立，可以进行通信',
	2: '连接正在进行关闭',
	3: '连接已经关闭或者连接不能打开'
}
Object.freeze(readyStateMap)
class WsTest {
	constructor(url) {
		// 创建websocket实例，web socket
		// 第一个参数是连接的url，没有跨域限制，第二个参数是可接受的协议
		this.ws = new WebSocket(url);
		// 属性，只读属性，表示连接状态
		console.log(this.ws.readyState, readyStateMap[this.ws.readyState])
		// 只读属性 bufferedAmount 已被 send() 放入正在队列中等待传输，但是还没有发出的 UTF-8 文本字节数。
		this.ws.bufferedAmount
		this.initWs()
	}
	initWs() {
		// 事件onopen,指连接成功
		this.ws.onopen = () => {
			console.log(this.ws.readyState, readyStateMap[this.ws.readyState])
			// 方法，向服务端发送消息,传输字符串
			this.ws.send(JSON.stringify({type: 'connection'}))
		};
		// 事件onmessage，指接收到服务端消息
		this.ws.onmessage = (evt) => {
			console.log(evt.data, 'data')
			const {type, msg} = JSON.parse(evt.data);
			console.log('消息类型：' + type, '用户id：' + msg)
			// 方法，关闭连接
			this.ws.close()
			console.log(this.ws.readyState, readyStateMap[this.ws.readyState])
		};
		// 事件onclose，关闭连接,可以从服务端强制断开连接，这里可以重现发起连接
		this.ws.onclose = () => {
			console.log(this.ws.readyState, readyStateMap[this.ws.readyState])
		};
		// 事件onerror，关通信发生错误时触发
		this.ws.onerror = () => {
			console.log(this.ws.readyState, readyStateMap[this.ws.readyState])
		};
	}
}
const ws = new WsTest('ws://127.0.0.1:30002')
