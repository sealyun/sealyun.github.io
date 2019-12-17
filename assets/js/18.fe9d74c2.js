(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{215:function(e,r,t){"use strict";t.r(r);var s=t(0),a=Object(s.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"csi详解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#csi详解"}},[e._v("#")]),e._v(" CSI详解")]),e._v(" "),t("p",[e._v("1.简介\n2.开发Kubernetes的CSI driver\n2.1.Sidecar容器\n2.1.1.Kubernetes兼容性\n2.1.2.external-attacher\n2.1.3.external-provisioner\n2.1.4.external-resizer\n2.1.5.external-snapshotter\n2.1.6.livenessprobe\n2.1.7.node-driver-registrar\n2.1.8.cluster-driver-registrar\n2.2.CSI对象\n2.2.1.CSIDriver对象\n2.2.2.CSINode对象\n2.3.特性\n2.3.1.密钥和凭据\n2.3.1.1.StorageClass的秘密\n2.3.1.2.VolumeSnapshotClass的秘密\n2.3.2.拓扑结构\n2.3.3.原始块体积\n2.3.4.跳过附加\n2.3.5.挂载上的Pod信息\n2.3.6.体积扩大\n2.3.7.数据源\n2.3.7.1.克隆\n2.3.7.2.卷快照和还原\n2.3.8.临时本地卷\n3.在Kubernetes上部署CSI驱动程序\n3.1.例\n4.驱动程序测试\n4.1.单元测试\n4.2.功能测试\n5.驱动程序\n6.故障排除")]),e._v(" "),t("h1",{attrs:{id:"简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[e._v("#")]),e._v(" 简介")]),e._v(" "),t("p",[e._v("本文详细介绍如何在Kubernetes上开发，部署和测试容器存储接口（CSI）驱动程序. CSI允许用户在不修改kubernetes代码的前提下实现对接容器存储。")]),e._v(" "),t("p",[e._v("Kubelet 通过Unix域套接字直接向CSI驱动程序发出CSI调用（例如NodeStageVolume，NodePublishVolume等），以装载和卸载卷。\nKubelet通过kubelet插件注册机制发现CSI驱动程序（以及用于与CSI驱动程序进行交互的Unix域套接字）。\n因此，部署在Kubernetes上的所有CSI驱动程序必须在每个受支持的节点上使用kubelet插件注册机制进行注册。")]),e._v(" "),t("p",[e._v("Kubernetes master组件不会直接（通过Unix域套接字或其他方式）与CSI驱动程序通信。\n因此，需要依赖于Kubernetes API的操作的CSI驱动程序（例如卷创建，卷附加，卷快照等）必须监听Kubernetes API并针对它触发适当的CSI操作。")]),e._v(" "),t("p",[e._v("k8s存储团队提供了一些可复用的组件来帮助我们简化CSI开发，包括以下几个组件：")]),e._v(" "),t("ul",[t("li",[e._v("Kubernetes CSI sidecar")]),e._v(" "),t("li",[e._v("Kubernetes CSI 对象")]),e._v(" "),t("li",[e._v("CSI 测试工具")])]),e._v(" "),t("h1",{attrs:{id:"开发kubernetes的csi-driver"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开发kubernetes的csi-driver"}},[e._v("#")]),e._v(" 开发Kubernetes的CSI driver")]),e._v(" "),t("h2",{attrs:{id:"sidecar-容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sidecar-容器"}},[e._v("#")]),e._v(" Sidecar 容器")]),e._v(" "),t("p",[e._v("Kubernetes CSI Sidecar容器是一组标准容器，旨在简化Kubernetes上CSI驱动程序的开发和部署。")]),e._v(" "),t("p",[e._v("这些容器包含监听Kubernetes API的通用逻辑，针对“ CSI卷driver”容器触发适当的操作，并根据需要更新Kubernetes API。")]),e._v(" "),t("p",[e._v("这些容器旨在与第三方CSI驱动程序容器捆绑在一起，并作为Pod一起部署。")]),e._v(" "),t("p",[e._v("容器由Kubernetes Storage社区开发和维护。")]),e._v(" "),t("p",[e._v("容器的使用严格是可选的，强烈建议使用。")]),e._v(" "),t("p",[e._v("这些边柜的优点包括：")]),e._v(" "),t("p",[e._v("减少重复代码。\nCSI驱动程序开发人员不必担心复杂的“Kubernetes相关”的代码。\n关注点分离。\n与Kubernetes API交互的代码与实现CSI接口的代码隔离（在另一个容器中）。\nKubernetes开发团队维护以下Kubernetes CSI Sidecar容器：")]),e._v(" "),t("ul",[t("li",[e._v("external-provisioner")]),e._v(" "),t("li",[e._v("external-attacher")]),e._v(" "),t("li",[e._v("external-snapshotter")]),e._v(" "),t("li",[e._v("external-resizer")]),e._v(" "),t("li",[e._v("node-driver-registrar")]),e._v(" "),t("li",[e._v("livenessprobe")])]),e._v(" "),t("h3",{attrs:{id:"兼容性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#兼容性"}},[e._v("#")]),e._v(" 兼容性")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://kubernetes-csi.github.io/docs/external-attacher.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("详细的兼容性信息查看此链接"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"external-attacher"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#external-attacher"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://github.com/kubernetes-csi/external-attacher/blob/master/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("external-attacher"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("external-attacher是一个sidecar容器，监听VolumeAttachment，它通过CSI驱动程序的调用ControllerPublish和ControlerUnpublish功能将卷附加到节点。因为在Kubernetes控制器管理器中运行的内部Attach / Detach控制器没有与CSI driver的任何直接接口。")]),e._v(" "),t("p",[e._v("比如挂载ceph时，我们先把ceph卷挂载到机器上，就是通过此接口实现. 所以这两操作一般是在机器上挂在网络块存储，如iSCSI就不走这个接口了.")]),e._v(" "),t("p",[e._v("如果是iSCSI通常是通过NodeStage NodeUnstage CSI接口调用")]),e._v(" "),t("h3",{attrs:{id:"external-provisioner-https-github-com-kubernetes-csi-external-provisioner"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#external-provisioner-https-github-com-kubernetes-csi-external-provisioner"}},[e._v("#")]),e._v(" [external-provisioner](https : //github.com/kubernetes-csi/external-provisioner)")]),e._v(" "),t("p",[e._v("用于监视PersistentVolumeClaim用户创建的对象并为其创建/删除卷")]),e._v(" "),t("p",[e._v("它调用CreateVolume 在指定节点创建新的卷")]),e._v(" "),t("p",[e._v("PersistentVolumeClaim如果PVC引用了Kubernetes StorageClass，storage class provisioner 字段匹配上了CSI 的GetPluginInfo返回值,一旦成功划分卷，sidecar容器就会创建一个PersistentVolume来描述这个刚创建的卷")]),e._v(" "),t("p",[e._v("根据删除回收策略决定删除PVC时要不要删除PV")]),e._v(" "),t("p",[e._v("数据源\n外部供应商提供了在供应期间请求从数据源预填充卷的功能。有关如何处理数据源的更多信息，请参见DataSources。")]),e._v(" "),t("p",[e._v("快照\nCSI external-provisioner支持Snapshot数据源。如果将SnapshotCRD指定为PVC对象上的数据源，则sidecar容器通过获取SnapshotContent对象来获取有关快照的信息，并在结果CreateVolume调用中填充数据源字段，以指示存储系统应填充新卷使用指定的快照。")]),e._v(" "),t("p",[e._v("PersistentVolumeClaim（克隆）\n还可以通过在Provision请求的DataSource字段中指定kind:type of 来实现克隆PersistentVolumeClaim。外部供应商负责验证DataSource对象中指定的声明是否存在，与要供应的卷处于同一存储类中，以及声明当前是否存在Bound。")]),e._v(" "),t("p",[e._v("StorageClass参数\n设置新卷时，CSI external-provisioner将map<string, string> parametersCSI CreateVolumeRequest调用中的字段设置为StorageClass正在处理的键/值。")]),e._v(" "),t("p",[e._v("CSI external-provisioner（v1.0.1 +）还保留带有前缀的参数密钥csi.storage.k8s.io/。带有前缀的任何键csi.storage.k8s.io/都不会作为opaque传递给CSI驱动程序parameter。")]),e._v(" "),t("p",[e._v("以下保留的StorageClass参数键触发CSI中的行为external-provisioner：")]),e._v(" "),t("p",[e._v("csi.storage.k8s.io/provisioner-secret-name\ncsi.storage.k8s.io/provisioner-secret-namespace\ncsi.storage.k8s.io/controller-publish-secret-name\ncsi.storage.k8s.io/controller-publish-secret-namespace\ncsi.storage.k8s.io/node-stage-secret-name\ncsi.storage.k8s.io/node-stage-secret-namespace\ncsi.storage.k8s.io/node-publish-secret-name\ncsi.storage.k8s.io/node-publish-secret-namespace\ncsi.storage.k8s.io/fstype\n如果PVC VolumeMode设置为Filesystem，并且csi.storage.k8s.io/fstype指定的值，则将其用于填充FsTypein CreateVolumeRequest.VolumeCapabilities[x].AccessType并将AccessType设置为Mount。")]),e._v(" "),t("p",[e._v("有关如何处理机密的更多信息，请参见“ 机密和凭据”。")]),e._v(" "),t("p",[e._v("范例StorageClass：")]),e._v(" "),t("p",[e._v("apiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\nname: gold-example-storage\nprovisioner: exampledriver.example.com\nparameters:\ndisk-type: ssd\ncsi.storage.k8s.io/fstype: ext4\ncsi.storage.k8s.io/provisioner-secret-name: mysecret\ncsi.storage.k8s.io/provisioner-secret-namespace: mynamespace\n用法\n支持动态卷配置的CSI驱动程序应使用此sidecar容器，并通告CSI CREATE_DELETE_VOLUME控制器功能。")]),e._v(" "),t("p",[e._v("有关详细信息（二进制参数，RBAC规则等），请参见https://github.com/kubernetes-csi/external-provisioner/blob/master/README.md。")]),e._v(" "),t("p",[e._v("部署方式\nCSI external-provisioner被部署为控制器。有关更多详细信息，请参见部署部分。")]),e._v(" "),t("h3",{attrs:{id:"external-resizer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#external-resizer"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://github.com/kubernetes-csi/external-resizer",target:"_blank",rel:"noopener noreferrer"}},[e._v("external-resizer"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"external-snapshotter"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#external-snapshotter"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://github.com/kubernetes-csi/external-snapshotter",target:"_blank",rel:"noopener noreferrer"}},[e._v("external-snapshotter"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"livenessprobe"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#livenessprobe"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://github.com/kubernetes-csi/livenessprobe",target:"_blank",rel:"noopener noreferrer"}},[e._v("livenessprobe"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"node-driver-registrar"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node-driver-registrar"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://github.com/kubernetes-csi/node-driver-registrar",target:"_blank",rel:"noopener noreferrer"}},[e._v("node-driver-registrar"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"csi-objets"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#csi-objets"}},[e._v("#")]),e._v(" CSI objets")]),e._v(" "),t("h3",{attrs:{id:"csidriver-object"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#csidriver-object"}},[e._v("#")]),e._v(" CSIDriver Object")]),e._v(" "),t("h3",{attrs:{id:"csinode-object"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#csinode-object"}},[e._v("#")]),e._v(" CSINode Object")]),e._v(" "),t("p",[e._v("探讨可加QQ群：98488045")])])}),[],!1,null,null,null);r.default=a.exports}}]);