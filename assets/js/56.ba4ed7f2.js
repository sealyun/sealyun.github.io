(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{256:function(e,v,l){"use strict";l.r(v);var t=l(0),_=Object(t.a)({},(function(){var e=this,v=e.$createElement,l=e._self._c||v;return l("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[l("h1",{attrs:{id:"离线包changelog"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#离线包changelog"}},[e._v("#")]),e._v(" 离线包Changelog")]),e._v(" "),l("blockquote",[l("p",[e._v("sealos v3.1.0")])]),e._v(" "),l("ul",[l("li",[e._v("支持自定义podsubnet")]),e._v(" "),l("li",[e._v("支持选择不安装网络插件，默认安装calico")]),e._v(" "),l("li",[e._v("支持网卡参数，如果网卡不是“en."),l("em",[e._v("|eth.")]),e._v("” 请加网卡参数,用户匹配需要选择虚拟化的网卡")])]),e._v(" "),l("blockquote",[l("p",[e._v("1.16.3 1.14.9 1.15.6")])]),e._v(" "),l("p",[e._v("sealyun:")]),e._v(" "),l("ul",[l("li",[e._v("支持了sealos install功能，安装dashboard ingress kuboard prometheus离线包，addons（APP）离线包单独提供")])]),e._v(" "),l("p",[e._v("社区：")]),e._v(" "),l("ul",[l("li",[e._v("bug修复")])]),e._v(" "),l("blockquote",[l("p",[e._v("1.16.0尝鲜版本")])]),e._v(" "),l("ul",[l("li",[e._v(".0版本不推荐上生产，免费供大家测试和尝鲜新功能使用")])]),e._v(" "),l("blockquote",[l("p",[e._v("1.15.4 1.14.7 版本")])]),e._v(" "),l("p",[e._v("社区：")]),e._v(" "),l("ul",[l("li",[e._v("bug修复为主")])]),e._v(" "),l("p",[e._v("sealyun:")]),e._v(" "),l("ul",[l("li",[e._v("精简包，仅包含核心组件+coreDNS+calico. dashboard prometheus等以单独的APP提供, 包体积从700多M降到300多M")])]),e._v(" "),l("blockquote",[l("p",[e._v("1.15.3版本")])]),e._v(" "),l("p",[e._v("社区：")]),e._v(" "),l("ul",[l("li",[e._v("更新golang/x/net依赖项以引入CVE-2019-9512，CVE-2019-9514")]),e._v(" "),l("li",[e._v("修复了使用内联卷源创建的VolumeAttachment API对象的验证。（＃80945，@tedyu）")]),e._v(" "),l("li",[e._v("KUBE-插件管理器已更新至v9.0.2固定在党魁选举中的错误（https://github.com/kubernetes/kubernetes/pull/80575）（＃80861，@mborsz）")]),e._v(" "),l("li",[e._v("修复了ListOptions.AllowWatchBookmarks未在kube-apiserver中正确传播的错误。（＃80157，@ wojtek -t）")]),e._v(" "),l("li",[e._v("CSI的节点上的传递卷MountOptions到全局挂载（NodeStageVolume）（＃80191，@ davidz627）")]),e._v(" "),l("li",[e._v("kubeadm join --discovery-file使用具有嵌入凭据的发现文件时修复错误（＃80675，@ fabiziopandini）")]),e._v(" "),l("li",[e._v("修正：支持原始块的csi插件不需要附加挂载失败（＃79920，@ cwdsuzhou）")])]),e._v(" "),l("p",[e._v("sealyun:")]),e._v(" "),l("ul",[l("li",[e._v("使用patch的方式更新kubeadm代码")]),e._v(" "),l("li",[e._v("maxage 增加到99年")])]),e._v(" "),l("blockquote",[l("p",[e._v("1.14.5 与1.15.2版本")])]),e._v(" "),l("p",[e._v("社区：")]),e._v(" "),l("ul",[l("li",[e._v("无重大更新")])]),e._v(" "),l("p",[e._v("sealyun:")]),e._v(" "),l("p",[e._v("更新kubelet开机启动依赖, 开机自动启动ipvs，自动拉起其它所有服务：")]),e._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[e._v("[root@iZj6cgg9qmj6d5vq9wthk3Z ~]# cat /etc/systemd/system/kubelet.service\n[Unit]\nDescription=kubelet: The Kubernetes Node Agent\nDocumentation=http://kubernetes.io/docs/\n\n[Service]\nExecStart=/usr/bin/kubelet\nExecStartPre=/usr/bin/kubelet-pre-start.sh\n")])])]),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[e._v("[root@iZj6cgg9qmj6d5vq9wthk3Z ~]# cat /usr/bin/kubelet-pre-start.sh\n#!/bin/bash\n# Open ipvs\nmodprobe -- ip_vs\nmodprobe -- ip_vs_rr\nmodprobe -- ip_vs_wrr\nmodprobe -- ip_vs_sh\nmodprobe -- nf_conntrack_ipv4\n\ncat <<EOF >  /etc/sysctl.d/k8s.conf\nnet.bridge.bridge-nf-call-ip6tables = 1\nnet.bridge.bridge-nf-call-iptables = 1\nEOF\nsysctl --system\nsysctl -w net.ipv4.ip_forward=1\n# systemctl stop firewalld && systemctl disable firewalld\nswapoff -a\nsetenforce 0\nexit 0\n")])])]),l("blockquote",[l("p",[e._v("1.14.4版本")])]),e._v(" "),l("p",[e._v("社区：")]),e._v(" "),l("ul",[l("li",[e._v("如当kubelet的pods目录（默认为“/ var / lib / kubelet / pods”）符号链接到另一个磁盘设备的目录时，修复kubelet无法删除孤立的pod目录")]),e._v(" "),l("li",[e._v("修复可能的fd泄漏和关闭dirs")]),e._v(" "),l("li",[e._v("修复了当pod的重启策略为Never时，kubelet不会重试pod sandbox创建的错误")]),e._v(" "),l("li",[e._v("将ip-masq-agentv2.3.0以修复漏洞")]),e._v(" "),l("li",[e._v("修复由于flexvol插件中的损坏的mnt点导致的pod问题")]),e._v(" "),l("li",[e._v("修复IPVS正常终止中的字符串比较错误，其中不删除UDP真实服务器。")]),e._v(" "),l("li",[e._v("在升级API服务器时解决了workload控制器的虚假部署，原因是由于pod中的alpha procMount字段的错误默认")]),e._v(" "),l("li",[e._v("修复了Windows上Kubelet中的内存泄漏问题，这是因为在获取容器指标时没有关闭容器")])]),e._v(" "),l("p",[e._v("sealyun:")]),e._v(" "),l("ul",[l("li",[e._v("修复ubuntu下kubelet启动依赖找不到sh命令问题，使用/bin/bash绝对路径 [新增]")]),e._v(" "),l("li",[e._v("支持99年证书")]),e._v(" "),l("li",[e._v("支持HA")])]),e._v(" "),l("blockquote",[l("p",[e._v("1.15.1版本")])]),e._v(" "),l("p",[e._v("社区：")]),e._v(" "),l("ul",[l("li",[e._v("kubeadm：实现支持并发添加/删除etcd成员")]),e._v(" "),l("li",[e._v("解决了服务支持的聚合API的问题")]),e._v(" "),l("li",[e._v("将csi插件中的超时值从15秒更改为2 分钟，修复了超时问题")]),e._v(" "),l("li",[e._v("kubeadm：修复“--cri-socket”标志不起作用的错误")]),e._v(" "),l("li",[e._v("当kubelet的pods目录（默认为“/var/lib/kubelet/pods”）符号链接到另一个磁盘设备的目录时，修复kubelet无法删除孤立的pod目录")]),e._v(" "),l("li",[e._v("在doSafeMakeDir修复可能的fd泄漏和关闭dirs")]),e._v(" "),l("li",[e._v("CRD处理程序现在可以正确地重新创建过时的CR存储以反映CRD更新。")]),e._v(" "),l("li",[e._v("修复了当pod的重启策略为Never时，kubelet不会重试pod sandbox 创建的错误")]),e._v(" "),l("li",[e._v("修复kubeadm重置期间从群集中删除etcd成员")])]),e._v(" "),l("p",[e._v("sealyun:")]),e._v(" "),l("ul",[l("li",[e._v("修复单master lvscare起不来问题，增加判断，如果是单master不去创建lvscare代理")]),e._v(" "),l("li",[e._v("修复kubelet启动依赖可能在一些系统下导致kubelet无法启动问题")])])])}),[],!1,null,null,null);v.default=_.exports}}]);