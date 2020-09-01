# local-aria2-webui

本地化的 aria2 webui

感谢原作者

https://github.com/ziahamza/webui-aria2

在线访问

https://masx200.github.io/local-aria2-webui/

# 安装

安装 nodejs

https://nodejs.org/

```shell
apt install nodejs
```

安装 yarn

https://yarnpkg.com/

```shell
npm install -g yarn
```

安装 live-server

https://www.npmjs.com/package/live-server

```shell
yarn global add live-server

```

```bash
yarn global add @masx200/local-aria2-webui
```

# 启动

windows

```shell
start.cmd
```

linux

```shell
start.sh
```

```bash
npx @masx200/local-aria2-webui --port=8080 --host=localhost
```

使用浏览器打开网址

http://127.0.0.1:8080

aria2c RPC 配置

https://github.com/masx200/aria2c-backend-rpc-config
