# READ ME


这个项目没有用到npm 而是用的yarn 
这个yarn的安装在windows系统上面安装一个文件就可以了，但是在mac 上面安装比较麻烦可以在博客里面找到解决的方法

## How To Start

```shell
brew install yarn
```

```shell
export SASS_BINARY_SITE=https://npm.taobao.org/mirrors/node-sass
```

```shell
yarn config set registry https://registry.npm.taobao.org
```

```shell
yarn
```

```shell
yarn start
```

Then run this in a new session in terminal

```shell
yarn sass
```

## How To Build

```shell
yarn build
```

## How To Deploy

```shell
shipit staging deploy
```

Or you cloud deploy it step by step.

At First, build release version and upload to qiniu

```shell
shipit staging build
```

Then sync index.html to Server

```shell
shipit staging rsync
```

Final upload sourceMap to sentry

```shell
shipit staging sentry
```
