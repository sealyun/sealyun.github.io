(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{262:function(e,a,t){"use strict";t.r(a);var s=t(0),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"版本升级"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#版本升级"}},[e._v("#")]),e._v(" 版本升级")]),e._v(" "),t("h2",{attrs:{id:"升级过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#升级过程"}},[e._v("#")]),e._v(" 升级过程")]),e._v(" "),t("ol",[t("li",[e._v("升级kubeadm,所有节点导入镜像")]),e._v(" "),t("li",[e._v("升级控制节点")]),e._v(" "),t("li",[e._v("升级master(控制节点)上的kubelet")]),e._v(" "),t("li",[e._v("升级其它master(控制节点)")]),e._v(" "),t("li",[e._v("升级node")]),e._v(" "),t("li",[e._v("验证集群状态")])]),e._v(" "),t("p",[e._v("本教程以1.14版本升级到1.15为例，其它版本原理大差不差，懂了这个其它的参考"),t("a",{attrs:{href:"https://kubernetes.io/docs/tasks/administer-cluster/kubeadm/kubeadm-upgrade-1-14/",target:"_blank",rel:"noopener noreferrer"}},[e._v("官方教程"),t("OutboundLink")],1),e._v("即可")]),e._v(" "),t("h2",{attrs:{id:"升级kubeadm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#升级kubeadm"}},[e._v("#")]),e._v(" 升级kubeadm")]),e._v(" "),t("p",[e._v("把离线包拷贝到所有节点执行 "),t("code",[e._v("cd kube/shell && sh init.sh")]),e._v("\n这里会把kubeadm kubectl kubelet bin文件都更新掉，而且会导入高版本镜像")]),e._v(" "),t("h2",{attrs:{id:"升级控制节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#升级控制节点"}},[e._v("#")]),e._v(" 升级控制节点")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("kubeadm upgrade plan\nkubeadm upgrade apply v1.15.0\n")])])]),t("p",[e._v("重启kubelet:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("systemctl restart kubelet\n")])])]),t("p",[e._v("其实kubelet升级简单粗暴，我们只需要把新版本的kubelet拷贝到/usr/bin下面，重启kubelet service即可，如果程序正在使用不让覆盖那么就停一下kubelet再进行拷贝，kubelet bin文件在 "),t("code",[e._v("conf/bin")]),e._v(" 目录下")]),e._v(" "),t("h2",{attrs:{id:"升级其它控制节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#升级其它控制节点"}},[e._v("#")]),e._v(" 升级其它控制节点")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("kubeadm upgrade apply\n")])])]),t("h2",{attrs:{id:"升级node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#升级node"}},[e._v("#")]),e._v(" 升级node")]),e._v(" "),t("p",[e._v("驱逐节点（要不要驱逐看情况, 喜欢粗暴的直接来也没啥）")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("kubectl drain $NODE --ignore-daemonsets\n")])])]),t("p",[e._v("更新kubelet配置：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("kubeadm upgrade node config --kubelet-version v1.15.0\n")])])]),t("p",[e._v("然后升级kubelet 一样是替换二进制再重启 kubelet service")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("systemctl restart kubelet\n")])])]),t("p",[e._v("召回失去的爱情：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("kubectl uncordon $NODE\n")])])]),t("h2",{attrs:{id:"验证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#验证"}},[e._v("#")]),e._v(" 验证")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("kubectl get nodes\n")])])]),t("p",[e._v("如果版本信息对的话基本就ok了")]),e._v(" "),t("h2",{attrs:{id:"kubeadm-upgrade-apply-干了啥"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kubeadm-upgrade-apply-干了啥"}},[e._v("#")]),e._v(" kubeadm upgrade apply 干了啥")]),e._v(" "),t("ol",[t("li",[e._v("检查集群是否可升级")]),e._v(" "),t("li",[e._v("执行版本升级策略 哪些版本之间可以升级")]),e._v(" "),t("li",[e._v("确认镜像可在")]),e._v(" "),t("li",[e._v("执行控制组件升级，如果失败就回滚，其实就是apiserver controller manager scheduler 等这些容器")]),e._v(" "),t("li",[e._v("执行kube-dns 和kube-proxy的升级")]),e._v(" "),t("li",[e._v("创建新的证书文件,备份老的如果其超过180天")])])])}),[],!1,null,null,null);a.default=r.exports}}]);