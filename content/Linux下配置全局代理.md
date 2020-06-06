---
title: Ubuntu下实现全局翻墙的配置过程
date: 2016-8-5 20:20:22
expert: 主要是如何配置终端的代理
---

### shadowsocks-qt5
#### 安装

可以在github中找到。

```
sudo add-apt-repository ppa:hzwhuang/ss-qt5
sudo apt-get update
sudo apt-get install shadowsocks-qt5
```

安装完成后在搜索里可以找到shadowscoks-qt5.
#### 配置

和windows配置相同，可以直接导入。
本地服务器类型选择`SOCKS5`，本地地址`127.0.0.1`，本地端口：`1080`
### 浏览器翻墙

安装完ss-qt5后，浏览器还并不能翻墙，需要配置浏览器的代理，因为chrome在linux里无法设置代理，所以需要安装插件。
#### 下载SwitchyOmega

可以在github的`xx-net`项目中找到，需要点进该文件然后download。
把该文件拉入chrome的设置-扩展程序中来安装。（其他浏览器的方法也可在xxnet中找到）
#### 配置SwitchyOmega

在`选项`中设置prxoy里代理协议`SOCKS5`，代理服务器：`127.0.0.1`，端口`1080`（即浏览器连接本地）。
然后选中这一项（proxy）即可。

如果一切中常，现在浏览器就可以翻墙了。
### 全局翻墙

实际上linux中更多的操作是在终端中进行，很多程序和服务的下载都需要通过  `npm`,`gem`,`nvm`,`git`等命令进行，而在前内起下载速度十分感人，而且很容易快下载完了又直接失败，都要重新开始，通过全局翻墙可以改善这种情况。
#### 安装配置proxychains

全局翻墙通过proxychains实现，即将任何程序和ss的proxy建立链接，原理和浏览器的代理相似。

**下载**  

```
sudo apt-get install proxychains
```

**配置**

```
sudo nano /etc/proxychains.conf //nano比vim对新手更友好
```

在最后的ProxyList里加入Shawdowsocks的代理设置：

```
socks5    127.0.0.1    1080
```

**使用**
打开ss-qt5的前提现，在需要翻墙的命令前打上`proxychains`即可。
