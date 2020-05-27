(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{362:function(s,t,a){"use strict";a.r(t);var n=a(24),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"使用教程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用教程"}},[s._v("#")]),s._v(" 使用教程")]),s._v(" "),a("h2",{attrs:{id:"前提条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前提条件"}},[s._v("#")]),s._v(" 前提条件")]),s._v(" "),a("ul",[a("li",[s._v("安装并启动docker, 高版本离线包自带docker，如没安装docker会自动安装")]),s._v(" "),a("li",[s._v("下载"),a("a",{attrs:{href:"http://store.lameleg.com",target:"_blank",rel:"noopener noreferrer"}},[s._v("kubernetes 离线安装包"),a("OutboundLink")],1),s._v(".")]),s._v(" "),a("li",[s._v("下载"),a("a",{attrs:{href:"https://github.com/fanux/sealos/releases",target:"_blank",rel:"noopener noreferrer"}},[s._v("最新版本sealos"),a("OutboundLink")],1),s._v(".")]),s._v(" "),a("li",[s._v("务必同步服务器时间")]),s._v(" "),a("li",[s._v("主机名不可重复")]),s._v(" "),a("li",[s._v("master节点CPU必须2C以上")]),s._v(" "),a("li",[s._v("请使用sealos 3.2.0以上版本")])]),s._v(" "),a("h2",{attrs:{id:"视频教程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#视频教程"}},[s._v("#")]),s._v(" "),a("a",{attrs:{href:"http://mp.weixin.qq.com/mp/video?__biz=Mzg2NzAzODE5Ng==&mid=100000268&sn=e932ef75dfc38414c21b6b365df07c8e&vid=wxv_1003349861900664832&idx=1&vidsn=e934d4cf8bacd1f569514b69c1344cf6&fromid=1&scene=18&xtrack=1#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[s._v("视频教程"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"安装教程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装教程"}},[s._v("#")]),s._v(" 安装教程")]),s._v(" "),a("p",[s._v("多master HA:")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("sealos init --master "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.2 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --master "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.3 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --master "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.4 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --node "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.5 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --user root "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --passwd your-server-password "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --version v1.14.1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --pkg-url /root/kube1.14.1.tar.gz     \n")])])]),a("p",[s._v("或者单master多node:")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("sealos init --master "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.2 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --node "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.5 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --user root "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --passwd your-server-password "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --version v1.14.1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --pkg-url /root/kube1.14.1.tar.gz \n")])])]),a("p",[s._v("使用免密钥或者密钥对：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("sealos init --master "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.16")]),s._v(".198.83 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --node "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.16")]),s._v(".198.84 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --pkg-url https://YOUR_HTTP_SERVER/kube1.15.0.tar.gz "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --pk /root/kubernetes.pem "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --version v1.15.0\n")])])]),a("p",[s._v("自定义ssh端口号,如2022：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("sealos init --master "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.16")]),s._v(".198.83:2022 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --pkg-url https://YOUR_HTTP_SERVER/kube1.15.0.tar.gz "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --pk /root/kubernetes.pem "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --version v1.15.0\n")])])]),a("table",[a("thead",[a("tr",[a("th",[s._v("参数名")]),s._v(" "),a("th",[s._v("含义")]),s._v(" "),a("th",[s._v("示例")]),s._v(" "),a("th",[s._v("是否必须")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("passwd")]),s._v(" "),a("td",[s._v("服务器密码")]),s._v(" "),a("td",[s._v("123456")]),s._v(" "),a("td",[s._v("和私钥二选一")])]),s._v(" "),a("tr",[a("td",[s._v("master")]),s._v(" "),a("td",[s._v("k8s master节点IP地址")]),s._v(" "),a("td",[s._v("192.168.0.2")]),s._v(" "),a("td",[s._v("必须")])]),s._v(" "),a("tr",[a("td",[s._v("node")]),s._v(" "),a("td",[s._v("k8s node节点IP地址")]),s._v(" "),a("td",[s._v("192.168.0.3")]),s._v(" "),a("td",[s._v("可选")])]),s._v(" "),a("tr",[a("td",[s._v("pkg-url")]),s._v(" "),a("td",[s._v("离线资源包地址，支持下载到本地，或者一个远程地址")]),s._v(" "),a("td",[s._v("/root/kube1.16.0.tar.gz")]),s._v(" "),a("td",[s._v("必须")])]),s._v(" "),a("tr",[a("td",[s._v("version")]),s._v(" "),a("td",[a("a",{attrs:{href:"http://store.lameleg.com",target:"_blank",rel:"noopener noreferrer"}},[s._v("资源包"),a("OutboundLink")],1),s._v("对应的版本")]),s._v(" "),a("td",[s._v("v1.16.0")]),s._v(" "),a("td",[s._v("必须")])]),s._v(" "),a("tr",[a("td",[s._v("kubeadm-config")]),s._v(" "),a("td",[s._v("自定义kubeadm配置文件")]),s._v(" "),a("td",[s._v("kubeadm.yaml.temp")]),s._v(" "),a("td",[s._v("可选")])]),s._v(" "),a("tr",[a("td",[s._v("pk")]),s._v(" "),a("td",[s._v("ssh私钥地址，免密钥时使用")]),s._v(" "),a("td",[s._v("/root/.ssh/id_rsa")]),s._v(" "),a("td",[s._v("和passwd二选一")])]),s._v(" "),a("tr",[a("td",[s._v("user")]),s._v(" "),a("td",[s._v("ssh用户名")]),s._v(" "),a("td",[s._v("root")]),s._v(" "),a("td",[s._v("可选")])]),s._v(" "),a("tr",[a("td",[s._v("interface")]),s._v(" "),a("td",[s._v("机器网卡名，CNI网卡发现用")]),s._v(" "),a("td",[s._v("eth.*")]),s._v(" "),a("td",[s._v("可选")])]),s._v(" "),a("tr",[a("td",[s._v("network")]),s._v(" "),a("td",[s._v("CNI类型如calico flannel")]),s._v(" "),a("td",[s._v("calico")]),s._v(" "),a("td",[s._v("可选")])]),s._v(" "),a("tr",[a("td",[s._v("podcidr")]),s._v(" "),a("td",[s._v("pod网段")]),s._v(" "),a("td",[s._v("100.64.0.0/10")]),s._v(" "),a("td",[s._v("可选")])]),s._v(" "),a("tr",[a("td",[s._v("repo")]),s._v(" "),a("td",[s._v("镜像仓库,离线包通常不用配置,除非你把镜像导入到自己私有仓库了")]),s._v(" "),a("td",[s._v("k8s.gcr.io")]),s._v(" "),a("td",[s._v("可选")])]),s._v(" "),a("tr",[a("td",[s._v("svccidr")]),s._v(" "),a("td",[s._v("clusterip网段")]),s._v(" "),a("td",[s._v("10.96.0.0/22")]),s._v(" "),a("td",[s._v("可选")])]),s._v(" "),a("tr",[a("td",[s._v("without-cni")]),s._v(" "),a("td",[s._v("不装cni插件，为了用户自己装别的CNI")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("可选")])])])]),s._v(" "),a("p",[s._v("具体详细参数执行 sealos init --help")]),s._v(" "),a("p",[s._v("检查安装是否正常:")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@iZj6cdqfqw4o4o9tc0q44rZ ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl get node")]),s._v("\nNAME                      STATUS   ROLES    AGE     VERSION\nizj6cdqfqw4o4o9tc0q44rz   Ready    master   2m25s   v1.14.1\nizj6cdqfqw4o4o9tc0q44sz   Ready    master   119s    v1.14.1\nizj6cdqfqw4o4o9tc0q44tz   Ready    master   63s     v1.14.1\nizj6cdqfqw4o4o9tc0q44uz   Ready    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("   38s     v1.14.1\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@iZj6cdqfqw4o4o9tc0q44rZ ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl get pod --all-namespaces")]),s._v("\nNAMESPACE     NAME                                              READY   STATUS    RESTARTS   AGE\nkube-system   calico-kube-controllers-5cbcccc885-9n2p8          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          3m1s\nkube-system   calico-node-656zn                                 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          93s\nkube-system   calico-node-bv5hn                                 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          2m54s\nkube-system   calico-node-f2vmd                                 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          3m1s\nkube-system   calico-node-tbd5l                                 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          118s\nkube-system   coredns-fb8b8dccf-8bnkv                           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          3m1s\nkube-system   coredns-fb8b8dccf-spq7r                           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          3m1s\nkube-system   etcd-izj6cdqfqw4o4o9tc0q44rz                      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          2m25s\nkube-system   etcd-izj6cdqfqw4o4o9tc0q44sz                      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          2m53s\nkube-system   etcd-izj6cdqfqw4o4o9tc0q44tz                      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          118s\nkube-system   kube-apiserver-izj6cdqfqw4o4o9tc0q44rz            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          2m15s\nkube-system   kube-apiserver-izj6cdqfqw4o4o9tc0q44sz            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          2m54s\nkube-system   kube-apiserver-izj6cdqfqw4o4o9tc0q44tz            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("          47s\nkube-system   kube-controller-manager-izj6cdqfqw4o4o9tc0q44rz   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("          2m43s\nkube-system   kube-controller-manager-izj6cdqfqw4o4o9tc0q44sz   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          2m54s\nkube-system   kube-controller-manager-izj6cdqfqw4o4o9tc0q44tz   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          63s\nkube-system   kube-proxy-b9b9z                                  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          2m54s\nkube-system   kube-proxy-nf66n                                  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          3m1s\nkube-system   kube-proxy-q2bqp                                  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          118s\nkube-system   kube-proxy-s5g2k                                  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          93s\nkube-system   kube-scheduler-izj6cdqfqw4o4o9tc0q44rz            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("          2m43s\nkube-system   kube-scheduler-izj6cdqfqw4o4o9tc0q44sz            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          2m54s\nkube-system   kube-scheduler-izj6cdqfqw4o4o9tc0q44tz            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          61s\nkube-system   kube-sealyun-lvscare-izj6cdqfqw4o4o9tc0q44uz      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          86s\n")])])]),a("h2",{attrs:{id:"清理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#清理"}},[s._v("#")]),s._v(" 清理")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("sealos clean all\n")])])]),a("h2",{attrs:{id:"增加master"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#增加master"}},[s._v("#")]),s._v(" 增加master")]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("sealos "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),s._v(" --master "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.6 --master "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.7\nsealos "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),s._v(" --master "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.6-192.168.0.9  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者多个连续IP")]),s._v("\n")])])]),a("h2",{attrs:{id:"增加node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#增加node"}},[s._v("#")]),s._v(" 增加node")]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("sealos "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),s._v(" --node "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.6 --node "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.7\nsealos "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),s._v(" --node "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.6-192.168.0.9  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者多个连续IP")]),s._v("\n")])])]),a("h2",{attrs:{id:"删除指定master节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除指定master节点"}},[s._v("#")]),s._v(" 删除指定master节点")]),s._v(" "),a("p",[s._v("注意clean不加任何参数会清理整个集群")]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("sealos clean --master "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.6 --master "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.7\nsealos clean --master "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.6-192.168.0.9  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者多个连续IP")]),s._v("\n")])])]),a("h2",{attrs:{id:"删除指定node节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除指定node节点"}},[s._v("#")]),s._v(" 删除指定node节点")]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("sealos clean --node "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.6 --node "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.7\nsealos clean --node "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.6-192.168.0.9  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者多个连续IP")]),s._v("\n")])])]),a("h2",{attrs:{id:"自定义网络"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义网络"}},[s._v("#")]),s._v(" 自定义网络")]),s._v(" "),a("ul",[a("li",[s._v("podcidr 参数指定自定义pod网段 如 --podcidr 100.64.0.0/10")]),s._v(" "),a("li",[s._v("svccidr 参数指定clusterip网段 如 --svccidr 10.96.0.0/12")]),s._v(" "),a("li",[s._v("without-cni sealos自带calico网络，如果你想自己装CNI不用默认可加此参数， 如 sealos init --without-cni .....")])]),s._v(" "),a("h2",{attrs:{id:"使用自定义kubeadm配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用自定义kubeadm配置文件"}},[s._v("#")]),s._v(" 使用自定义kubeadm配置文件")]),s._v(" "),a("p",[s._v("比如我们需要在证书里加入 "),a("code",[s._v("sealyun.com")]),s._v(":")]),s._v(" "),a("p",[s._v("先获取配置文件模板：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("sealos config -t kubeadm "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v("  kubeadm-config.yaml.tmpl\n")])])]),a("p",[s._v("修改"),a("code",[s._v("kubeadm-config.yaml.tmpl")]),s._v(",文件即可， 编辑增加 "),a("code",[s._v("sealyun.com")]),s._v(", 注意其它部分不用动，sealos会自动填充模板里面的内容:")]),s._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" kubeadm.k8s.io/v1beta1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ClusterConfiguration\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kubernetesVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(".Version"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("controlPlaneEndpoint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"apiserver.cluster.local:6443"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("networking")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("podSubnet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 100.64.0.0/10\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiServer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("certSANs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" sealyun.com "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# this is what I added")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 127.0.0.1\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" apiserver.cluster.local\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("range .Masters "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("end "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(".VIP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" kubeproxy.config.k8s.io/v1alpha1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" KubeProxyConfiguration\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("mode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ipvs"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ipvs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("excludeCIDRs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" \n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"{{.VIP}}/32"')]),s._v("\n")])])]),a("p",[s._v("使用 --kubeadm-config 指定配置文件模板即可:")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("sealos init --kubeadm-config kubeadm-config.yaml.tmpl "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --master "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.2 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --master "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.3 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --master "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.4 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --node "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.5 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --user root "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --passwd your-server-password "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --version v1.14.1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --pkg-url /root/kube1.14.1.tar.gz \n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);