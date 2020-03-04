(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{226:function(e,a,s){"use strict";s.r(a);var n=s(0),t=Object(n.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"kubernetes-rbac实战"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes-rbac实战"}},[e._v("#")]),e._v(" kubernetes RBAC实战")]),e._v(" "),s("h2",{attrs:{id:"环境准备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境准备"}},[e._v("#")]),e._v(" 环境准备")]),e._v(" "),s("p",[e._v("先用kubeadm安装好kubernetes集群，"),s("a",{attrs:{href:"http://sealyun.com/pro/products/",target:"_blank",rel:"noopener noreferrer"}},[e._v("包地址在此"),s("OutboundLink")],1),e._v(" 好用又方便，服务周到，童叟无欺")]),e._v(" "),s("p",[e._v("本文目的，让名为devuser的用户只能有权限访问特定namespace下的pod")]),e._v(" "),s("h2",{attrs:{id:"命令行kubectl访问"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#命令行kubectl访问"}},[e._v("#")]),e._v(" 命令行kubectl访问")]),e._v(" "),s("h3",{attrs:{id:"安装cfssl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装cfssl"}},[e._v("#")]),e._v(" 安装cfssl")]),e._v(" "),s("p",[e._v("此工具生成证书非常方便, pem证书与crt证书,编码一致可直接使用\n")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("wget https://pkg.cfssl.org/R1.2/cfssl_linux-amd64\nchmod +x cfssl_linux-amd64\nmv cfssl_linux-amd64 /bin/cfssl\n\nwget https://pkg.cfssl.org/R1.2/cfssljson_linux-amd64\nchmod +x cfssljson_linux-amd64\nmv cfssljson_linux-amd64 /bin/cfssljson\n\nwget https://pkg.cfssl.org/R1.2/cfssl-certinfo_linux-amd64\nchmod +x cfssl-certinfo_linux-amd64\nmv cfssl-certinfo_linux-amd64 /bin/cfssl-certinfo\n")])])]),s("h3",{attrs:{id:"签发客户端证书"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#签发客户端证书"}},[e._v("#")]),e._v(" 签发客户端证书")]),e._v(" "),s("p",[e._v("根据ca证书与么钥签发用户证书\n根证书已经在/etc/kubernetes/pki目录下了")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("[root@master1 ~]# ls /etc/kubernetes/pki/\napiserver.crt                 ca-config.json  devuser-csr.json    front-proxy-ca.key      sa.pub\napiserver.key                 ca.crt          devuser-key.pem     front-proxy-client.crt\napiserver-kubelet-client.crt  ca.key          devuser.pem         front-proxy-client.key\napiserver-kubelet-client.key  devuser.csr     front-proxy-ca.crt  sa.key\n")])])]),s("p",[e._v("注意以下几个文件： "),s("code",[e._v("ca.crt ca.key ca-config.json devuser-csr.json")])]),e._v(" "),s("p",[e._v("创建ca-config.json文件")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('cat > ca-config.json <<EOF\n{\n  "signing": {\n    "default": {\n      "expiry": "87600h"\n    },\n    "profiles": {\n      "kubernetes": {\n        "usages": [\n            "signing",\n            "key encipherment",\n            "server auth",\n            "client auth"\n        ],\n        "expiry": "87600h"\n      }\n    }\n  }\n}\nEOF\n')])])]),s("p",[e._v("创建devuser-csr.json文件：\nk8s的用户名就是从CN上获取的。 组是从O上获取的。这个用户或者组用于后面的角色绑定使用")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('cat > devuser-csr.json <<EOF\n{\n  "CN": "devuser",\n  "hosts": [],\n  "key": {\n    "algo": "rsa",\n    "size": 2048\n  },\n  "names": [\n    {\n      "C": "CN",\n      "ST": "BeiJing",\n      "L": "BeiJing",\n      "O": "k8s",\n      "OU": "System"\n    }\n  ]\n}\nEOF\n')])])]),s("p",[e._v("生成user的证书：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ cfssl gencert -ca=ca.crt -ca-key=ca.key -config=ca-config.json -profile=kubernetes devuser-csr.json | cfssljson -bare devuser\n")])])]),s("p",[e._v("就会生成下面的文件：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("devuser.csr  devuser-key.pem  devuser.pem\n")])])]),s("blockquote",[s("p",[e._v("校验证书")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("# cfssl-certinfo -cert devuser.pem\n")])])]),s("h3",{attrs:{id:"生成config文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生成config文件"}},[e._v("#")]),e._v(" 生成config文件")]),e._v(" "),s("p",[e._v("kubeadm已经生成了admin.conf，我们可以直接利用这个文件，省的自己再去配置集群参数")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$  cp /etc/kubernetes/admin.conf devuser.kubeconfig\n")])])]),s("p",[e._v("设置客户端认证参数:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("kubectl config set-credentials devuser \\\n--client-certificate=/etc/kubernetes/ssl/devuser.pem \\\n--client-key=/etc/kubernetes/ssl/devuser-key.pem \\\n--embed-certs=true \\\n--kubeconfig=devuser.kubeconfig\n")])])]),s("p",[e._v("设置上下文参数：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("kubectl config set-context kubernetes \\\n--cluster=kubernetes \\\n--user=devuser \\\n--namespace=kube-system \\\n--kubeconfig=devuser.kubeconfig\n")])])]),s("p",[e._v("设置莫认上下文：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("kubectl config use-context kubernetes --kubeconfig=devuser.kubeconfig\n")])])]),s("p",[e._v("以上执行一个步骤就可以看一下 devuser.kubeconfig的变化。里面最主要的三个东西")]),e._v(" "),s("ul",[s("li",[e._v("cluster: 集群信息，包含集群地址与公钥")]),e._v(" "),s("li",[e._v("user: 用户信息，客户端证书与私钥，正真的信息是从证书里读取出来的，人能看到的只是给人看的。")]),e._v(" "),s("li",[e._v("context: 维护一个三元组，namespace cluster 与 user")])]),e._v(" "),s("h3",{attrs:{id:"创建角色"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建角色"}},[e._v("#")]),e._v(" 创建角色")]),e._v(" "),s("p",[e._v("创建一个叫pod-reader的角色")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('[root@master1 ~]# cat pod-reader.yaml\nkind: Role\napiVersion: rbac.authorization.k8s.io/v1\nmetadata:\n  namespace: kube-system\n  name: pod-reader\nrules:\n- apiGroups: [""] # "" indicates the core API group\n  resources: ["pods"]\n  verbs: ["get", "watch", "list"]\n')])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("kubectl create -f pod-reader.yaml\n")])])]),s("h3",{attrs:{id:"绑定用户"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#绑定用户"}},[e._v("#")]),e._v(" 绑定用户")]),e._v(" "),s("p",[e._v("创建一个角色绑定，把pod-reader角色绑定到 devuser上")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("[root@master1 ~]# cat devuser-role-bind.yaml\nkind: RoleBinding\napiVersion: rbac.authorization.k8s.io/v1\nmetadata:\n  name: read-pods\n  namespace: kube-system\nsubjects:\n- kind: User\n  name: devuser   # 目标用户\n  apiGroup: rbac.authorization.k8s.io\nroleRef:\n  kind: Role\n  name: pod-reader  # 角色信息\n  apiGroup: rbac.authorization.k8s.io\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("kubectl create -f devuser-role-bind.yaml\n")])])]),s("h3",{attrs:{id:"使用新的config文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用新的config文件"}},[e._v("#")]),e._v(" 使用新的config文件")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ rm .kube/config && cp devuser.kubeconfig .kube/config\n")])])]),s("p",[e._v("效果, 已经没有别的namespace的权限了，也不能访问node信息了：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('[root@master1 ~]# kubectl get node\nError from server (Forbidden): nodes is forbidden: User "devuser" cannot list nodes at the cluster scope\n\n[root@master1 ~]# kubectl get pod -n kube-system\nNAME                                       READY     STATUS    RESTARTS   AGE\ncalico-kube-controllers-55449f8d88-74x8f   1/1       Running   0          8d\ncalico-node-clpqr                          2/2       Running   0          8d\nkube-apiserver-master1                     1/1       Running   2          8d\nkube-controller-manager-master1            1/1       Running   1          8d\nkube-dns-545bc4bfd4-p6trj                  3/3       Running   0          8d\nkube-proxy-tln54                           1/1       Running   0          8d\nkube-scheduler-master1                     1/1       Running   1          8d\n\n[root@master1 ~]# kubectl get pod -n default\nError from server (Forbidden): pods is forbidden: User "devuser" cannot list pods in the namespace "default": role.rbac.authorization.k8s.io "pod-reader" not found\n')])])]),s("h2",{attrs:{id:"dashboard访问"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dashboard访问"}},[e._v("#")]),e._v(" dashboard访问")]),e._v(" "),s("h3",{attrs:{id:"service-account原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#service-account原理"}},[e._v("#")]),e._v(" service account原理")]),e._v(" "),s("p",[e._v("k8s里面有两种用户，一种是User，一种就是service account，User给人用的，service account给进程用的，让进程有相关的权限。")]),e._v(" "),s("p",[e._v("如dasboard就是一个进程，我们就可以创建一个service account给它，让它去访问k8s。")]),e._v(" "),s("p",[e._v("我们看一下是如何把admin权限赋给dashboard的：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("╰─➤  cat dashboard-admin.yaml\napiVersion: rbac.authorization.k8s.io/v1beta1\nkind: ClusterRoleBinding\nmetadata:\n  name: kubernetes-dashboard\n  labels:\n    k8s-app: kubernetes-dashboard\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: cluster-admin\nsubjects:\n- kind: ServiceAccount\n  name: kubernetes-dashboard\n  namespace: kube-system\n")])])]),s("p",[e._v("把 kubernetes-dashboard 这个ServiceAccount绑定到cluster-admin这个ClusterRole上，这个cluster role非常牛逼，啥权限都有")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("[root@master1 ~]# kubectl describe clusterrole cluster-admin -n kube-system\nName:         cluster-admin\nLabels:       kubernetes.io/bootstrapping=rbac-defaults\nAnnotations:  rbac.authorization.kubernetes.io/autoupdate=true\nPolicyRule:\n  Resources  Non-Resource URLs  Resource Names  Verbs\n  ---------  -----------------  --------------  -----\n             [*]                []              [*]\n  *.*        []                 []              [*]\n")])])]),s("p",[e._v("而创建dashboard时创建了这个service account:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("apiVersion: v1\nkind: ServiceAccount\nmetadata:\n  labels:\n    k8s-app: kubernetes-dashboard\n  name: kubernetes-dashboard\n  namespace: kube-system\n")])])]),s("p",[e._v("然后deployment里指定service account")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("      volumes:\n      - name: kubernetes-dashboard-certs\n        secret:\n          secretName: kubernetes-dashboard-certs\n      - name: tmp-volume\n        emptyDir: {}\n      serviceAccountName: kubernetes-dashboard\n")])])]),s("h3",{attrs:{id:"更安全的做法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更安全的做法"}},[e._v("#")]),e._v(" 更安全的做法")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('[root@master1 ~]# cat admin-token.yaml\nkind: ClusterRoleBinding\napiVersion: rbac.authorization.k8s.io/v1beta1\nmetadata:\n  name: admin\n  annotations:\n    rbac.authorization.kubernetes.io/autoupdate: "true"\nroleRef:\n  kind: ClusterRole\n  name: cluster-admin\n  apiGroup: rbac.authorization.k8s.io\nsubjects:\n- kind: ServiceAccount\n  name: admin\n  namespace: kube-system\n---\napiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: admin\n  namespace: kube-system\n  labels:\n    kubernetes.io/cluster-service: "true"\n    addonmanager.kubernetes.io/mode: Reconcile\n')])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("[root@master1 ~]# kubectl get secret -n kube-system|grep admin\nadmin-token-7rdhf                        kubernetes.io/service-account-token   3         14m\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("[root@master1 ~]# kubectl describe secret admin-token-7rdhf -n kube-system\nName:         admin-token-7rdhf\nNamespace:    kube-system\nLabels:       <none>\nAnnotations:  kubernetes.io/service-account.name=admin\n              kubernetes.io/service-account.uid=affe82d4-d10b-11e7-ad03-00163e01d684\n\nType:  kubernetes.io/service-account-token\n\nData\n====\nca.crt:     1025 bytes\nnamespace:  11 bytes\ntoken:      eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJrdWJlLXN5c3RlbSIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VjcmV0Lm5hbWUiOiJhZG1pbi10b2tlbi03cmRoZiIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VydmljZS1hY2NvdW50Lm5hbWUiOiJhZG1pbiIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VydmljZS1hY2NvdW50LnVpZCI6ImFmZmU4MmQ0LWQxMGItMTFlNy1hZDAzLTAwMTYzZTAxZDY4NCIsInN1YiI6InN5c3RlbTpzZXJ2aWNlYWNjb3VudDprdWJlLXN5c3RlbTphZG1pbiJ9.jSfQhFsY7V0ZmfqxM8lM_UUOoUhI86axDSeyVVtldSUY-BeP2Nw4q-ooKGJTBBsrOWvMiQePcQxJTKR1K4EIfnA2FOnVm4IjMa40pr7-oRVY37YnR_1LMalG9vrWmqFiqIsKe9hjkoFDuCaP7UIuv16RsV7hRlL4IToqmJMyJ1xj2qb1oW4P1pdaRr4Pw02XBz9yBpD1fs-lbwheu1UKcEnbHS_0S3zlmAgCrpwDFl2UYOmgUKQVpJhX4wBRRQbwo1Sn4rEFVI1NIa9l_lM7Mf6YEquLHRu3BCZTdu9YfY9pevQz4OfHE0NOvDIqmGRL8Z9kPADAXbljWzcD1m1xCQ\n")])])]),s("p",[e._v("用此token在界面上登录即可")])])}),[],!1,null,null,null);a.default=t.exports}}]);