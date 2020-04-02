(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{220:function(e,a,t){"use strict";t.r(a);var s=t(17),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"calico-manager起不来"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#calico-manager起不来"}},[e._v("#")]),e._v(" calico manager起不来")]),e._v(" "),t("p",[e._v("报 no route to host")]),e._v(" "),t("p",[e._v("解决办法： iptables -F 重装")]),e._v(" "),t("h1",{attrs:{id:"vagrant中多网卡部署不了join时卡住"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vagrant中多网卡部署不了join时卡住"}},[e._v("#")]),e._v(" vagrant中多网卡部署不了join时卡住")]),e._v(" "),t("p",[e._v("是因为默认路由不对，"),t("a",{attrs:{href:"https://github.com/fanux/sealos/issues/134#issuecomment-564454526",target:"_blank",rel:"noopener noreferrer"}},[e._v("详细请查看"),t("OutboundLink")],1)]),e._v(" "),t("h1",{attrs:{id:"join-时卡住"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#join-时卡住"}},[e._v("#")]),e._v(" join 时卡住")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/fanux/sealos/issues/134#issuecomment-547217842",target:"_blank",rel:"noopener noreferrer"}},[e._v("排查思路"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("注意命令行中只能使用机器的IP而不能使用机器主机名")]),e._v(" "),t("h1",{attrs:{id:"阿里云上无法解析外网dns"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#阿里云上无法解析外网dns"}},[e._v("#")]),e._v(" 阿里云上无法解析外网DNS")]),e._v(" "),t("p",[e._v("默认的pod网段 100.64与阿里nameserver冲突，更新podsubnet即可,见下文中如何修改calico网段")]),e._v(" "),t("h1",{attrs:{id:"重启机器kubelet起不来？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重启机器kubelet起不来？"}},[e._v("#")]),e._v(" 重启机器kubelet起不来？")]),e._v(" "),t("p",[e._v("确保selinux swap 已经关闭。     swapoff -a&& setenforce 0&&systemctl start kubelet         执行后会拉起其他服务")]),e._v(" "),t("p",[e._v("永久关闭swap:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("1. Identify configured swap devices and files with cat /proc/swaps.\n2. Turn off all swap devices and files with swapoff -a.\n3. Remove any matching reference found in /etc/fstab\n")])])]),t("p",[e._v("永久关闭selinux:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("vim /etc/sysconfig/selinux SELINUX=enforcing 改为 SELINUX=disabled \n")])])]),t("h1",{attrs:{id:"chrome-浏览器可能访问不了dashboard"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#chrome-浏览器可能访问不了dashboard"}},[e._v("#")]),e._v(" chrome 浏览器可能访问不了dashboard")]),e._v(" "),t("p",[e._v("是因为新版chrome安全检测太严格，不认自签证书，要解决可以使用火狐，或者自己买证书给dashboard配置上。      访问不了dashboard先检查pod有没有启动成功"),t("code",[e._v("kubectl get pod -n kube-system")]),e._v("，再在节点上用curl检查，如果能curl到 那就是浏览器的原因了。注意是https")]),e._v(" "),t("p",[e._v("自己创建证书：")]),e._v(" "),t("p",[e._v("1.用openssl创建证书")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ mkdir certs\n$ cd certs\n$ openssl genrsa -des3 -passout pass:x -out dashboard.pass.key 2048\n$ openssl rsa -passin pass:x -in dashboard.pass.key -out dashboard.key\n$ rm dashboard.pass.key\n$ openssl req -new -key dashboard.key -out dashboard.csr\n$ openssl x509 -req -sha256 -days 365 -in dashboard.csr -signkey dashboard.key -out dashboard.crt\n$ rm -rf dashboard.csr\n")])])]),t("p",[e._v("2.删除dashboard,这个文件在解压包里找\n$ kubectl delete -f kubernetes-dashboard.yaml")]),e._v(" "),t("p",[e._v("3.创建kubernetes-dashboard-secret\n$ kubectl create secret generic kubernetes-dashboard-certs --from-file=$HOME/certs -n kube-system")]),e._v(" "),t("p",[e._v("4.创建新的dashboard\n$ kubectl create-f kubernetes-dashboard.yaml")]),e._v(" "),t("h1",{attrs:{id:"修改calico-pod地址段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改calico-pod地址段"}},[e._v("#")]),e._v(" 修改calico pod地址段?")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://kubernetes.io/docs/reference/setup-tools/kubeadm/kubeadm-init/",target:"_blank",rel:"noopener noreferrer"}},[e._v("kubeadm文档"),t("OutboundLink")],1),e._v("  要改两个地方1. kubeadm配置：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("networking:\n  dnsDomain: <string#\n  serviceSubnet: <cidr#\n  podSubnet: <cidr#   # 这里\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[e._v("calico yaml配置:")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('    - name: FELIX_DEFAULTENDPOINTTOHOSTACTION\n      value: "ACCEPT"\n    # Configure the IP Pool from which Pod IPs will be chosen.\n    - name: CALICO_IPV4POOL_CIDR\n      value: "192.168.122.0/24"   # 这里\n    - name: CALICO_IPV4POOL_IPIP\n      value: "always"\n    # Disable IPv6 on Kubernetes.\n    - name: FELIX_IPV6SUPPORT\n      value: "false"\n')])])]),t("h1",{attrs:{id:"kubeadm-join命令找不到了？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kubeadm-join命令找不到了？"}},[e._v("#")]),e._v(" kubeadm join命令找不到了？")]),e._v(" "),t("p",[e._v("用这个 kubeadm token create --print-join-command")]),e._v(" "),t("h1",{attrs:{id:"需要通过外网访问apiserver"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#需要通过外网访问apiserver"}},[e._v("#")]),e._v(" 需要通过外网访问APIserver?")]),e._v(" "),t("p",[e._v("典型场景：通过阿里云floatingIP访问APIserver，这时需要把floatingip加入到证书里面，或者如keepalived的虚拟IP， 修改conf/kubeadm.yaml 加入以下字段：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("apiServerCertSANs:\n  - 10.100.81.11   // 你的外网IP等\n  - master01.bja.paas  //如果通过域名访问也需要加域名\n")])])]),t("p",[e._v("然后重新init")]),e._v(" "),t("p",[e._v("最后直接修改kubeconfig文件（~/.kube/config）里的IP即可，把这个文件拷贝到本机，就可以通过外网访问apiserver了")]),e._v(" "),t("h1",{attrs:{id:"获取登录token"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取登录token"}},[e._v("#")]),e._v(" 获取登录token:")]),e._v(" "),t("p",[e._v("admin token:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("kubectl describe secret `kubectl get secret |grep cluster-admin|awk '{print $1}'`|grep token|awk '{print $2}'|tail -1\n")])])]),t("p",[e._v("dashboard service account token:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('kubectl get secret $(kubectl get serviceaccount dashboard -o jsonpath="{.secrets[0].name}") -o jsonpath="{.data.token}" | base64 --decode\n')])])]),t("p",[e._v("或者使用"),t("a",{attrs:{href:"https://github.com/fanux/fist",target:"_blank",rel:"noopener noreferrer"}},[e._v("fist auth 模块"),t("OutboundLink")],1)]),e._v(" "),t("h1",{attrs:{id:"在这一步卡死，且docker-ps没有任何容器起来，但是kubelet正常"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在这一步卡死，且docker-ps没有任何容器起来，但是kubelet正常"}},[e._v("#")]),e._v(" 在这一步卡死，且docker ps没有任何容器起来，但是kubelet正常")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("[init] this might take a minute or longer if the control plane images have to be pulled \n")])])]),t("p",[e._v("看/var/log/messages有如下日志")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(' RunPodSandbox from runtime service failed: rpc error: code = Unknown desc = failed to create a sandbox for pod "kube-apiserver-istiohost": Error response from daemon: cgroup-parent for systemd cgroup should be a valid slice named as "xxx.slice"\n')])])]),t("p",[e._v("这是docker版本与k8s兼容性问题，建议跟换docker版本。  我在1.13.1上出现过此问题,升级到了18.06.0-ce解决，不过具体版本可根据自己需求安装")]),e._v(" "),t("p",[e._v("安装docker-ce:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("yum install -y yum-utils\nyum-config-manager     --add-repo     https://download.docker.com/linux/centos/docker-ce.repo\nyum-config-manager --disable docker-ce-edge\nyum makecache fast\nyum install docker-ce\n")])])]),t("h1",{attrs:{id:"nodeport无法访问：iptables-p-forward-accept"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nodeport无法访问：iptables-p-forward-accept"}},[e._v("#")]),e._v(" NodePort无法访问：iptables -P FORWARD ACCEPT")]),e._v(" "),t("h1",{attrs:{id:"failure-loading-ca-certificate-the-certificate-is-not-valid-yet"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#failure-loading-ca-certificate-the-certificate-is-not-valid-yet"}},[e._v("#")]),e._v(" failure loading ca certificate: the certificate is not valid yet")]),e._v(" "),t("p",[e._v("服务器时间不同步导致")]),e._v(" "),t("h1",{attrs:{id:"coredns无法启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#coredns无法启动"}},[e._v("#")]),e._v(" coredns无法启动")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('.:53\n2018/09/28 08:45:32 [INFO] CoreDNS-1.2.2\n2018/09/28 08:45:32 [INFO] linux/amd64, go1.11, eb51e8b\nCoreDNS-1.2.2\nlinux/amd64, go1.11, eb51e8b\n2018/09/28 08:45:32 [INFO] plugin/reload: Running configuration MD5 = f65c4821c8a9b7b5eb30fa4fbc167769\n2018/09/28 08:45:38 [FATAL] plugin/loop: Seen "HINFO IN 4443432808327291531.7218519048545008660." more than twice, loop detected\n')])])]),t("p",[e._v("修改宿主机的/etc/resolv.conf\n内容：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("[root@iZrj9aqbeed7la2925ggzaZ ~]# cat /etc/resolv.conf\n; generated by /usr/sbin/dhclient-script\nnameserver 8.8.8.8\n")])])]),t("p",[e._v("杀掉DNS pod即可")]),e._v(" "),t("h1",{attrs:{id:"calico无法启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#calico无法启动"}},[e._v("#")]),e._v(" calico无法启动")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Readiness probe failed: calico/node is not ready: felix is not ready: Get http://localhost:9099/readiness: dial tcp [::1]:9099: connect: connection refused \n")])])]),t("p",[e._v("很可能是网卡发现有问题，calico虚拟化时没找对网卡，calico会经常找docker0网桥，导致clusterIP不通从而calico node连不上etcd")]),e._v(" "),t("p",[e._v("解决办法：\n配置好/etc/hosts")]),e._v(" "),t("p",[e._v("或者修改网卡发现机制：\ncalico网卡发现 conf/net/calico.yaml文件：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('- name: IP_AUTODETECTION_METHOD\n              value: "interface=eth.*"   # 如果你的网卡不是eth开头，换成自己的，在yaml文件里修改\n')])])]),t("p",[e._v("可以直接kubectl edit daemonset calico-node -n kube-system 去修改网卡名")]),e._v(" "),t("p",[e._v("还有可能是/etc/resove.conf配置错误，如果里面配置了一些search可能会导致calico无法启动，\n解决方法是删除不需要的DNS配置,仅配置：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("nameserver 8.8.8.8\n")])])]),t("h1",{attrs:{id:"kubeadm-no-default-route错误"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kubeadm-no-default-route错误"}},[e._v("#")]),e._v(" kubeadm no default route错误")]),e._v(" "),t("p",[e._v("It picks the interface with the default gateway and listens to that.\n所以配置好主机默认路由即可，就是default：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Destination     Gateway         Genmask         Flags Metric Ref    Use Iface\ndefault         169.254.1.1     0.0.0.0         UG    0      0        0 eth1\n")])])]),t("h1",{attrs:{id:"_1-14版本join时需要增加一个-master参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-14版本join时需要增加一个-master参数"}},[e._v("#")]),e._v(" 1.14版本join时需要增加一个--master参数")]),e._v(" "),t("p",[e._v("为了兼容单master与多master的情况：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("kubeadm join 10.103.97.1:6443 --token 9vr73a.a8uxyaju799qwdjv \\\n    --master 10.103.97.100:6443 \\\n    --discovery-token-ca-cert-hash sha256:7c2e69131a36ae2a042a339b33381c6d0d43887e2de83720eff5359e26aec866\n")])])]),t("h1",{attrs:{id:"_1-14以上版本机器重启node节点notready"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-14以上版本机器重启node节点notready"}},[e._v("#")]),e._v(" 1.14以上版本机器重启node节点notready")]),e._v(" "),t("p",[e._v("这与开机没有加载ipvs内核模块有关，首先请确保ipvs已经加载.\n然后确保node kubelet已经正常启动\n最后查看lvscare的pod有没有启动\n如果都正常还是notready的话，重启lvscare pod即可")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# Open ipvs\nmodprobe -- ip_vs\nmodprobe -- ip_vs_rr\nmodprobe -- ip_vs_wrr\nmodprobe -- ip_vs_sh\nmodprobe -- nf_conntrack_ipv4\n\ncat <<EOF #  /etc/sysctl.d/k8s.conf\nnet.bridge.bridge-nf-call-ip6tables = 1\nnet.bridge.bridge-nf-call-iptables = 1\nEOF\nsysctl --system\nsysctl -w net.ipv4.ip_forward=1\nsystemctl stop firewalld && systemctl disable firewalld\nswapoff -a\nsetenforce 0\n")])])]),t("p",[e._v("可以直接杀lvscare容器，kubelet会自动拉起")]),e._v(" "),t("h1",{attrs:{id:"error-execution-phase-preflight-couldn-t-validate-the-identity-of-the-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#error-execution-phase-preflight-couldn-t-validate-the-identity-of-the-api"}},[e._v("#")]),e._v(" error execution phase preflight: couldn't validate the identity of the API")]),e._v(" "),t("p",[e._v("可能是token过期，需要在master上重新生成token再join:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("kubeadm token create --print-join-command\n")])])]),t("p",[e._v("用"),t("a",{attrs:{href:"https://github.com/fanux/sealos",target:"_blank",rel:"noopener noreferrer"}},[e._v("sealos"),t("OutboundLink")],1),e._v("时,join别忘记加 "),t("code",[e._v("--master")]),e._v(" 参数"),t("a",{attrs:{href:"https://github.com/fanux/sealos",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考readme"),t("OutboundLink")],1)]),e._v(" "),t("h1",{attrs:{id:"kubelet能起来但是安装时卡住"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kubelet能起来但是安装时卡住"}},[e._v("#")]),e._v(" kubelet能起来但是安装时卡住")]),e._v(" "),t("p",[e._v("有位朋友centos7.3上安装master时卡住， docker 1.13.1,原因是系统兼容性问题，如果发现安装过程中kubelet已经能起来了，而容器一个没起，可能就是这个原因，\n起容器会报这个错：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(' applying cgroup configuration for process caused \\\\\\"Cannot set property TasksAccounting, or unknown property.\n')])])]),t("p",[e._v("解决办法：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("yum update\n")])])]),t("h1",{attrs:{id:"kubelet起不来"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kubelet起不来"}},[e._v("#")]),e._v(" kubelet起不来")]),e._v(" "),t("p",[e._v("在有些系统下可能会有这个问题：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Executable path is not absolute: sh /usr/bin/kubelet-pre-start.sh\n7月 22 13:59:21 ning systemd[1]: /etc/systemd/system/kubelet.service:7: Executable path is not absolute: sh /usr/bin/kubelet-pre-start.sh\n")])])]),t("p",[e._v("因为找不到 "),t("code",[e._v("sh")]),e._v("这个命令导致")]),e._v(" "),t("p",[e._v("修改 "),t("code",[e._v("kube/conf/kubelet.service")]),e._v("\n把 "),t("code",[e._v("ExecStartPre=sh")]),e._v(" 改成 "),t("code",[e._v("ExecStartPre=/bin/bash")])]),e._v(" "),t("h1",{attrs:{id:"calico无法启动-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#calico无法启动-2"}},[e._v("#")]),e._v(" calico无法启动")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('[root@k8s03 ~]# kubectl logs calico-node-v4s8w -n kube-system\nError from server (BadRequest): container "calico-node" in pod "calico-node-v4s8w" is waiting to start: PodInitializing\n')])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Unable to update cni config: No networks found in /etc/cni/net.d\n")])])]),t("p",[e._v("这是由于init container初始化失败， 把正常借点的/etc/cni拷贝到不正常的节点即可.")]),e._v(" "),t("h1",{attrs:{id:"prometheus-pod都正常就是没监控数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prometheus-pod都正常就是没监控数据"}},[e._v("#")]),e._v(" prometheus pod都正常就是没监控数据")]),e._v(" "),t("p",[e._v("可能是服务器时间没同步，同步下时间杀pod即可")]),e._v(" "),t("h1",{attrs:{id:"ssh执行失败-no-supported-methods-remain"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ssh执行失败-no-supported-methods-remain"}},[e._v("#")]),e._v(" ssh执行失败,no supported methods remain")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Error create ssh session failed ssh: handshake failed: ssh: unable to authenticate, attempted methods [none password], no supported methods remain\n")])])]),t("p",[e._v("原因找到，master与node机器密码必须一致，如果使用--passwd参数的话，密码不一样请使用免密钥，github.com/fanux/sealos/README.md 上有详细说明")]),e._v(" "),t("h1",{attrs:{id:"ubuntu-kubelet启动不了"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-kubelet启动不了"}},[e._v("#")]),e._v(" ubuntu kubelet启动不了")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("/usr/bin/kubelet-pre-start.sh: 行 17: setenforce: 未找到命   \n")])])]),t("p",[e._v("因为ubuntu 可能没装setenforce")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("在/etc/init.d/停止AppArmor脚本：\nsudo /etc/init.d/apparmor stop\n从系统中清除AppArmor。\napt purge apparmor\n如果您担心配置文件被删除，请使用apt remove apparmor。\n更新并重新启动系统：\napt update && upgrade -yuf\nreboot\n安装SELinux\n安装SELinux软件包并重启系统：\napt install selinux\nreboot\n您可以通过尝试将SELinux设置为enforcing模式来确定SELinux是否在您的系统上强制执行安全性。\nroot@ubuntu:~# setenforce 1\nroot@ubuntu:~# getenforce\nEnforcing\n")])])]),t("p",[e._v("或者")]),e._v(" "),t("p",[e._v("如果装不了selinux 就改下压缩包就行，kube/bin/ubelet-pre-start.sh 把这行注释了  然后重新打包。")])])}),[],!1,null,null,null);a.default=r.exports}}]);