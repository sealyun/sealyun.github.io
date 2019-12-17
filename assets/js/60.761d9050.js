(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{261:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"使用教程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用教程"}},[s._v("#")]),s._v(" 使用教程")]),s._v(" "),a("h2",{attrs:{id:"前提条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前提条件"}},[s._v("#")]),s._v(" 前提条件")]),s._v(" "),a("ul",[a("li",[s._v("安装并启动docker, 高版本离线包自带docker，如没安装docker会自动安装")]),s._v(" "),a("li",[s._v("下载"),a("a",{attrs:{href:"http://store.lameleg.com",target:"_blank",rel:"noopener noreferrer"}},[s._v("kubernetes 离线安装包"),a("OutboundLink")],1),s._v(".")]),s._v(" "),a("li",[s._v("下载"),a("a",{attrs:{href:"https://github.com/fanux/sealos/releases",target:"_blank",rel:"noopener noreferrer"}},[s._v("最新版本sealos"),a("OutboundLink")],1),s._v(".")]),s._v(" "),a("li",[s._v("务必同步服务器时间")]),s._v(" "),a("li",[s._v("主机名不可重复")]),s._v(" "),a("li",[s._v("master节点CPU必须2C以上")])]),s._v(" "),a("h2",{attrs:{id:"安装教程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装教程"}},[s._v("#")]),s._v(" 安装教程")]),s._v(" "),a("p",[s._v("多master HA:")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("sealos init --master "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.2 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --master "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.3 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --master "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.4 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --node "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.5 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --user root "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --passwd your-server-password "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --version v1.14.1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --pkg-url /root/kube1.14.1.tar.gz     \n")])])]),a("p",[s._v("或者单master多node:")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("sealos init --master "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.2 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --node "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.5 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --user root "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --passwd your-server-password "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --version v1.14.1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --pkg-url /root/kube1.14.1.tar.gz \n")])])]),a("p",[s._v("使用免密钥或者密钥对：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("sealos init --master "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.16")]),s._v(".198.83 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --node "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.16")]),s._v(".198.84 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --pkg-url https://YOUR_HTTP_SERVER/kube1.15.0.tar.gz "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --pk /root/kubernetes.pem "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --version v1.15.0\n")])])]),a("p",[s._v("自定义ssh端口号,如2022：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("sealos init --master "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.16")]),s._v(".198.83:2022 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --pkg-url https://YOUR_HTTP_SERVER/kube1.15.0.tar.gz "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --pk /root/kubernetes.pem "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --version v1.15.0\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("--master   master服务器地址列表\n--node     node服务器地址列表\n--user     服务器ssh用户名\n--passwd   服务器ssh用户密码\n--pkg-url  离线包位置，可以放在本地目录，也可以放在一个http服务器上，sealos会wget到安装目标机\n--version  kubernetes版本\n--pk       ssh私钥地址，配置免密钥默认就是/root/.ssh/id_rsa\n")])])]),a("p",[s._v("其它参数:")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(' --kubeadm-config string   kubeadm-config.yaml kubeadm配置文件，可自定义kubeadm配置文件\n --vip string              virtual ip (default "10.103.97.2") 本地负载时虚拟ip，不推荐修改，集群外不可访问\n')])])]),a("p",[s._v("检查安装是否正常:")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@iZj6cdqfqw4o4o9tc0q44rZ ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl get node")]),s._v("\nNAME                      STATUS   ROLES    AGE     VERSION\nizj6cdqfqw4o4o9tc0q44rz   Ready    master   2m25s   v1.14.1\nizj6cdqfqw4o4o9tc0q44sz   Ready    master   119s    v1.14.1\nizj6cdqfqw4o4o9tc0q44tz   Ready    master   63s     v1.14.1\nizj6cdqfqw4o4o9tc0q44uz   Ready    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("   38s     v1.14.1\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@iZj6cdqfqw4o4o9tc0q44rZ ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl get pod --all-namespaces")]),s._v("\nNAMESPACE     NAME                                              READY   STATUS    RESTARTS   AGE\nkube-system   calico-kube-controllers-5cbcccc885-9n2p8          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          3m1s\nkube-system   calico-node-656zn                                 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          93s\nkube-system   calico-node-bv5hn                                 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          2m54s\nkube-system   calico-node-f2vmd                                 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          3m1s\nkube-system   calico-node-tbd5l                                 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          118s\nkube-system   coredns-fb8b8dccf-8bnkv                           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          3m1s\nkube-system   coredns-fb8b8dccf-spq7r                           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          3m1s\nkube-system   etcd-izj6cdqfqw4o4o9tc0q44rz                      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          2m25s\nkube-system   etcd-izj6cdqfqw4o4o9tc0q44sz                      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          2m53s\nkube-system   etcd-izj6cdqfqw4o4o9tc0q44tz                      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          118s\nkube-system   kube-apiserver-izj6cdqfqw4o4o9tc0q44rz            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          2m15s\nkube-system   kube-apiserver-izj6cdqfqw4o4o9tc0q44sz            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          2m54s\nkube-system   kube-apiserver-izj6cdqfqw4o4o9tc0q44tz            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("          47s\nkube-system   kube-controller-manager-izj6cdqfqw4o4o9tc0q44rz   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("          2m43s\nkube-system   kube-controller-manager-izj6cdqfqw4o4o9tc0q44sz   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          2m54s\nkube-system   kube-controller-manager-izj6cdqfqw4o4o9tc0q44tz   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          63s\nkube-system   kube-proxy-b9b9z                                  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          2m54s\nkube-system   kube-proxy-nf66n                                  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          3m1s\nkube-system   kube-proxy-q2bqp                                  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          118s\nkube-system   kube-proxy-s5g2k                                  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          93s\nkube-system   kube-scheduler-izj6cdqfqw4o4o9tc0q44rz            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("          2m43s\nkube-system   kube-scheduler-izj6cdqfqw4o4o9tc0q44sz            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          2m54s\nkube-system   kube-scheduler-izj6cdqfqw4o4o9tc0q44tz            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          61s\nkube-system   kube-sealyun-lvscare-izj6cdqfqw4o4o9tc0q44uz      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          86s\n")])])]),a("h2",{attrs:{id:"清理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#清理"}},[s._v("#")]),s._v(" 清理")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("sealos clean "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --master "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.2 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --master "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.3 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --master "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.4 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --node "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.5 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --user root "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --passwd your-server-password\n")])])]),a("h2",{attrs:{id:"视频教程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#视频教程"}},[s._v("#")]),s._v(" "),a("a",{attrs:{href:"http://mp.weixin.qq.com/mp/video?__biz=Mzg2NzAzODE5Ng==&mid=100000268&sn=e932ef75dfc38414c21b6b365df07c8e&vid=wxv_1003349861900664832&idx=1&vidsn=e934d4cf8bacd1f569514b69c1344cf6&fromid=1&scene=18&xtrack=1#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[s._v("视频教程"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"增加节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#增加节点"}},[s._v("#")]),s._v(" 增加节点")]),s._v(" "),a("p",[s._v("无论是增加master还是增加node，都需要先导入二进制和镜像文件，把资源包拷贝到新的节点上执行：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("tar zxvf kube1.17.0.tar.gz\ncd kube/shell && sh init.sh\n")])])]),a("h2",{attrs:{id:"增加node节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#增加node节点"}},[s._v("#")]),s._v(" 增加node节点")]),s._v(" "),a("p",[s._v("获取 join command, 在master上执行:")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("kubeadm token create --print-join-command\n")])])]),a("p",[s._v("可以使用super kubeadm, 但是join时需要增加一个"),a("code",[s._v("--master")]),s._v(" 参数:")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" kube/shell "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" init.sh\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10.103.97.2 apiserver.cluster.local"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/hosts   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# using vip")]),s._v("\nkubeadm "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.103")]),s._v(".97.2:6443 --token 9vr73a.a8uxyaju799qwdjv "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --master "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.103")]),s._v(".97.100:6443 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --master "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.103")]),s._v(".97.101:6443 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --master "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.103")]),s._v(".97.102:6443 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --discovery-token-ca-cert-hash sha256:7c2e69131a36ae2a042a339b33381c6d0d43887e2de83720eff5359e26aec866\n")])])]),a("p",[s._v("也可以用sealos join命令：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("sealos "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),s._v(" \n    --master "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.2 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --master "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.3 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --master "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.4 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --vip "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.103")]),s._v(".97.2 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("       \n    --node "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.5 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("            \n    --user root "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("             \n    --passwd your-server-password "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --pkg-url /root/kube1.15.0.tar.gz \n")])])]),a("h2",{attrs:{id:"增加master节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#增加master节点"}},[s._v("#")]),s._v(" 增加master节点")]),s._v(" "),a("p",[s._v("获取join master命令：")]),s._v(" "),a("p",[s._v("先用下面命令拿到key，这个安装时日志也会输出，忘记保存就用下面命令获取")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("kubeadm init phase upload-certs --upload-certs\nW1216 09:06:54.668668   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14269")]),s._v(" validation.go:28"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Cannot validate kube-proxy config - no validator is available\nW1216 09:06:54.668720   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14269")]),s._v(" validation.go:28"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Cannot validate kubelet config - no validator is available\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("upload-certs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Storing the certificates "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" Secret "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"kubeadm-certs"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" the "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"kube-system"')]),s._v(" Namespace\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("upload-certs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Using certificate key:\n5e091dae31844423d69d585a6f3898356b8d9ff1dfd727c2ffee7244463d0c2d\n")])])]),a("p",[s._v("然后就下面命令获取join命令：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("kubeadm token create --certificate-key 5e091dae31844423d69d585a6f3898356b8d9ff1dfd727c2ffee7244463d0c2d --print-join-command\nW1216 09:08:10.104418   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16674")]),s._v(" validation.go:28"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Cannot validate kube-proxy config - no validator is available\nW1216 09:08:10.104457   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16674")]),s._v(" validation.go:28"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Cannot validate kubelet config - no validator is available\nkubeadm "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),s._v(" apiserver.cluster.local:6443 --token o1mq4r.b9ff55967s737jxm     --discovery-token-ca-cert-hash sha256:5c1a852e612cbaf2921364095e06b3d9e7f52ca67b7397abfa48cd0de7eb4ed1     --control-plane --certificate-key 5e091dae31844423d69d585a6f3898356b8d9ff1dfd727c2ffee7244463d0c2d\n")])])]),a("p",[s._v("不要直接执行输出的命令，请往下看：")]),s._v(" "),a("p",[s._v("增加master节点稍微麻烦一点, 如新加一个master 10.103.97.102, 10.103.97.100是master0：")]),s._v(" "),a("p",[s._v("master2 10.103.97.102 上")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10.103.97.100 apiserver.cluster.local"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/hosts\nkubeadm "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.103")]),s._v(".97.100:6443 --token o1mq4r.b9ff55967s737jxm  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --discovery-token-ca-cert-hash sha256:5c1a852e612cbaf2921364095e06b3d9e7f52ca67b7397abfa48cd0de7eb4ed1  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --control-plane "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --certificate-key 5e091dae31844423d69d585a6f3898356b8d9ff1dfd727c2ffee7244463d0c2d\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"s/10.103.97.100/10.103.97.101/g"')]),s._v(" -i /etc/hosts\n")])])]),a("p",[s._v("注意：1.15以下用--experimental-control-plane 代替--control-plane")]),s._v(" "),a("p",[s._v("这时新的master便加进去了，但是node的本地负载也需要加一下这个master,所有节点修改一下lvscare配置即可在node /etc/kubernetes/manifests目录下。")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v("  /etc/kubernetes/manifests/kube-sealyun-lvscare-xxx\n增加 --rs "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.103")]),s._v(".97.102:6443\n")])])]),a("p",[s._v("ipvsadm -Ln 就可以在node上看到新的master已经代理上了")]),s._v(" "),a("h2",{attrs:{id:"使用自定义kubeadm配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用自定义kubeadm配置文件"}},[s._v("#")]),s._v(" 使用自定义kubeadm配置文件")]),s._v(" "),a("p",[s._v("比如我们需要在证书里加入 "),a("code",[s._v("sealyun.com")]),s._v(":")]),s._v(" "),a("p",[s._v("先获取配置文件模板：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("sealos config -t kubeadm "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v("  kubeadm-config.yaml.tmpl\n")])])]),a("p",[s._v("修改"),a("code",[s._v("kubeadm-config.yaml.tmpl")]),s._v(",文件即可， 编辑增加 "),a("code",[s._v("sealyun.com")]),s._v(", 注意其它部分不用动，sealos会自动填充模板里面的内容:")]),s._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" kubeadm.k8s.io/v1beta1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ClusterConfiguration\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kubernetesVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(".Version"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("controlPlaneEndpoint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"apiserver.cluster.local:6443"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("networking")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("podSubnet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 100.64.0.0/10\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiServer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("certSANs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" sealyun.com "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# this is what I added")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 127.0.0.1\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" apiserver.cluster.local\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("range .Masters "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("end "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(".VIP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" kubeproxy.config.k8s.io/v1alpha1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" KubeProxyConfiguration\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("mode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ipvs"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ipvs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("excludeCIDRs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" \n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"{{.VIP}}/32"')]),s._v("\n")])])]),a("p",[s._v("使用 --kubeadm-config 指定配置文件模板即可:")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("sealos init --kubeadm-config kubeadm-config.yaml.tmpl "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --master "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.2 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --master "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.3 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --master "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.4 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --node "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.5 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --user root "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --passwd your-server-password "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --version v1.14.1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --pkg-url /root/kube1.14.1.tar.gz \n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);