(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{210:function(e,n,t){"use strict";t.r(n);var a=t(0),r=Object(a.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"calico-网络原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#calico-网络原理"}},[e._v("#")]),e._v(" calico 网络原理")]),e._v(" "),t("h3",{attrs:{id:"node节点-装网络之前路由"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node节点-装网络之前路由"}},[e._v("#")]),e._v(" node节点 装网络之前路由")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("[root@iZj6c3cqwumhn5jov661z7Z ~]# route -n\nKernel IP routing table\nDestination     Gateway         Genmask         Flags Metric Ref    Use Iface\n0.0.0.0         172.31.255.253  0.0.0.0         UG    0      0        0 eth0\n169.254.0.0     0.0.0.0         255.255.0.0     U     1002   0        0 eth0\n172.17.0.0      0.0.0.0         255.255.0.0     U     0      0        0 docker0\n172.31.240.0    0.0.0.0         255.255.240.0   U     0      0        0 eth0\n")])])]),e._v(" "),t("p",[e._v("网卡：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("[root@iZj6c3cqwumhn5jov661z7Z ~]# ifconfig\ndocker0: flags=4099<UP,BROADCAST,MULTICAST>  mtu 1500\n        inet 172.17.0.1  netmask 255.255.0.0  broadcast 0.0.0.0\n        ether 02:42:cb:02:65:a3  txqueuelen 0  (Ethernet)\n        RX packets 0  bytes 0 (0.0 B)\n        RX errors 0  dropped 0  overruns 0  frame 0\n        TX packets 0  bytes 0 (0.0 B)\n        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0\n\neth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500\n        inet 172.31.242.156  netmask 255.255.240.0  broadcast 172.31.255.255\n        ether 00:16:3e:00:89:75  txqueuelen 1000  (Ethernet)\n        RX packets 72958  bytes 105395247 (100.5 MiB)\n        RX errors 0  dropped 0  overruns 0  frame 0\n        TX packets 15711  bytes 1583143 (1.5 MiB)\n        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0\n\nlo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536\n        inet 127.0.0.1  netmask 255.0.0.0\n        loop  txqueuelen 1  (Local Loopback)\n        RX packets 0  bytes 0 (0.0 B)\n        RX errors 0  dropped 0  overruns 0  frame 0\n        TX packets 0  bytes 0 (0.0 B)\n        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0\n")])])]),t("p",[e._v("iptables:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("[root@iZj6c3cqwumhn5jov661z7Z ~]# iptables -L\nChain INPUT (policy ACCEPT)\ntarget     prot opt source               destination\n\nChain FORWARD (policy ACCEPT)\ntarget     prot opt source               destination\nDOCKER-ISOLATION  all  --  anywhere             anywhere\nDOCKER     all  --  anywhere             anywhere\nACCEPT     all  --  anywhere             anywhere             ctstate RELATED,ESTABLISHED\nACCEPT     all  --  anywhere             anywhere\nACCEPT     all  --  anywhere             anywhere\n\nChain OUTPUT (policy ACCEPT)\ntarget     prot opt source               destination\n\nChain DOCKER (1 references)\ntarget     prot opt source               destination\n\nChain DOCKER-ISOLATION (1 references)\ntarget     prot opt source               destination\nRETURN     all  --  anywhere             anywhere\n")])])]),t("h3",{attrs:{id:"master节点安装之前"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#master节点安装之前"}},[e._v("#")]),e._v(" master节点安装之前")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("[root@izj6cg11g0cdegoowj058ez ~]# route -n\nKernel IP routing table\nDestination     Gateway         Genmask         Flags Metric Ref    Use Iface\n0.0.0.0         172.31.255.253  0.0.0.0         UG    0      0        0 eth0\n169.254.0.0     0.0.0.0         255.255.0.0     U     1002   0        0 eth0\n172.17.0.0      0.0.0.0         255.255.0.0     U     0      0        0 docker0\n172.31.240.0    0.0.0.0         255.255.240.0   U     0      0        0 eth0\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("[root@izj6cg11g0cdegoowj058ez ~]# ifconfig\ndocker0: flags=4099<UP,BROADCAST,MULTICAST>  mtu 1500\n        inet 172.17.0.1  netmask 255.255.0.0  broadcast 0.0.0.0\n        ether 02:42:37:67:91:64  txqueuelen 0  (Ethernet)\n        RX packets 0  bytes 0 (0.0 B)\n        RX errors 0  dropped 0  overruns 0  frame 0\n        TX packets 0  bytes 0 (0.0 B)\n        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0\n\neth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500\n        inet 172.31.242.157  netmask 255.255.240.0  broadcast 172.31.255.255\n        ether 00:16:3e:01:aa:f2  txqueuelen 1000  (Ethernet)\n        RX packets 169779  bytes 246363004 (234.9 MiB)\n        RX errors 0  dropped 0  overruns 0  frame 0\n        TX packets 32790  bytes 3034892 (2.8 MiB)\n        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0\n\nlo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536\n        inet 127.0.0.1  netmask 255.0.0.0\n        loop  txqueuelen 1  (Local Loopback)\n        RX packets 22682  bytes 6946686 (6.6 MiB)\n        RX errors 0  dropped 0  overruns 0  frame 0\n        TX packets 22682  bytes 6946686 (6.6 MiB)\n        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("[root@izj6cg11g0cdegoowj058ez ~]# iptables -L\nChain INPUT (policy ACCEPT)\ntarget     prot opt source               destination\nKUBE-SERVICES  all  --  anywhere             anywhere             /* kubernetes service portals */\nKUBE-FIREWALL  all  --  anywhere             anywhere\n\nChain FORWARD (policy ACCEPT)\ntarget     prot opt source               destination\nDOCKER-ISOLATION  all  --  anywhere             anywhere\nDOCKER     all  --  anywhere             anywhere\nACCEPT     all  --  anywhere             anywhere             ctstate RELATED,ESTABLISHED\nACCEPT     all  --  anywhere             anywhere\nACCEPT     all  --  anywhere             anywhere\n\nChain OUTPUT (policy ACCEPT)\ntarget     prot opt source               destination\nKUBE-SERVICES  all  --  anywhere             anywhere             /* kubernetes service portals */\nKUBE-FIREWALL  all  --  anywhere             anywhere\n\nChain DOCKER (1 references)\ntarget     prot opt source               destination\n\nChain DOCKER-ISOLATION (1 references)\ntarget     prot opt source               destination\nRETURN     all  --  anywhere             anywhere\n\nChain KUBE-FIREWALL (2 references)\ntarget     prot opt source               destination\nDROP       all  --  anywhere             anywhere             /* kubernetes firewall for dropping marked packets */ mark match 0x8000/0x8000\n\nChain KUBE-SERVICES (2 references)\ntarget     prot opt source               destination\nREJECT     udp  --  anywhere             10.96.0.10           /* kube-system/kube-dns:dns has no endpoints */ udp dpt:domain reject-with icmp-port-unreachable\nREJECT     tcp  --  anywhere             10.96.0.10           /* kube-system/kube-dns:dns-tcp has no endpoints */ tcp dpt:domain reject-with icmp-port-unreachable\n")])])]),t("h3",{attrs:{id:"启动完一个pod"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动完一个pod"}},[e._v("#")]),e._v(" 启动完一个pod")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("[root@izj6cg11g0cdegoowj058ez ~]# kubectl get pod --all-namespaces -o wide\nNAMESPACE     NAME                                              READY     STATUS    RESTARTS   AGE       IP               NODE\nkube-system   calico-etcd-gqqv2                                 1/1       Running   0          22m       172.31.242.157   izj6cg11g0cdegoowj058ez\nkube-system   calico-kube-controllers-55449f8d88-pmh9h          1/1       Running   0          22m       172.31.242.157   izj6cg11g0cdegoowj058ez\nkube-system   calico-node-77hm6                                 2/2       Running   0          22m       172.31.242.157   izj6cg11g0cdegoowj058ez\nkube-system   calico-node-c6jx5                                 2/2       Running   0          9m        172.31.242.156   izj6c3cqwumhn5jov661z7z\nkube-system   etcd-izj6cg11g0cdegoowj058ez                      1/1       Running   0          28m       172.31.242.157   izj6cg11g0cdegoowj058ez\nkube-system   kube-apiserver-izj6cg11g0cdegoowj058ez            1/1       Running   1          27m       172.31.242.157   izj6cg11g0cdegoowj058ez\nkube-system   kube-controller-manager-izj6cg11g0cdegoowj058ez   1/1       Running   1          28m       172.31.242.157   izj6cg11g0cdegoowj058ez\nkube-system   kube-dns-545bc4bfd4-c9vsc                         3/3       Running   0          27m       192.168.83.129   izj6c3cqwumhn5jov661z7z\nkube-system   kube-proxy-4btpd                                  1/1       Running   0          27m       172.31.242.157   izj6cg11g0cdegoowj058ez\nkube-system   kube-proxy-cdvvf                                  1/1       Running   0          9m        172.31.242.156   izj6c3cqwumhn5jov661z7z\nkube-system   kube-scheduler-izj6cg11g0cdegoowj058ez            1/1       Running   1          28m       172.31.242.157   izj6cg11g0cdegoowj058ez\nsock-shop     carts-794f6cc876-8lfj8                            1/1       Running   0          5m        192.168.83.131   izj6c3cqwumhn5jov661z7z\nsock-shop     carts-db-787f4b7896-v8qbn                         1/1       Running   0          5m        192.168.83.130   izj6c3cqwumhn5jov661z7z\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("[root@izj6cg11g0cdegoowj058ez ~]# route -n\nKernel IP routing table\nDestination     Gateway         Genmask         Flags Metric Ref    Use Iface\n0.0.0.0         172.31.255.253  0.0.0.0         UG    0      0        0 eth0\n169.254.0.0     0.0.0.0         255.255.0.0     U     1002   0        0 eth0\n172.17.0.0      0.0.0.0         255.255.0.0     U     0      0        0 docker0\n172.31.240.0    0.0.0.0         255.255.240.0   U     0      0        0 eth0\n192.168.83.128  172.31.242.156  255.255.255.192 UG    0      0        0 tunl0\n192.168.179.0   0.0.0.0         255.255.255.192 U     0      0        0 *\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("[root@iZj6c3cqwumhn5jov661z7Z ~]# route -n\nKernel IP routing table\nDestination     Gateway         Genmask         Flags Metric Ref    Use Iface\n0.0.0.0         172.31.255.253  0.0.0.0         UG    0      0        0 eth0\n169.254.0.0     0.0.0.0         255.255.0.0     U     1002   0        0 eth0\n172.17.0.0      0.0.0.0         255.255.0.0     U     0      0        0 docker0\n172.31.240.0    0.0.0.0         255.255.240.0   U     0      0        0 eth0\n192.168.83.128  0.0.0.0         255.255.255.192 U     0      0        0 *\n192.168.83.129  0.0.0.0         255.255.255.255 UH    0      0        0 cali513e7f6c556\n192.168.83.130  0.0.0.0         255.255.255.255 UH    0      0        0 cali85f45a254f4\n192.168.83.131  0.0.0.0         255.255.255.255 UH    0      0        0 cali65bda6d8589\n192.168.179.0   172.31.242.157  255.255.255.192 UG    0      0        0 tunl0\n")])])])])}),[],!1,null,null,null);n.default=r.exports}}]);