(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{208:function(e,t,a){"use strict";a.r(t);var s=a(0),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"rook-使用教程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rook-使用教程"}},[e._v("#")]),e._v(" rook 使用教程")]),e._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://sealyun.com/pro/products/",target:"_blank",rel:"noopener noreferrer"}},[e._v("kubernetes集群三步安装"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("本文中需要用的yaml文件和Dockerfile等都放到这个"),a("a",{attrs:{href:"https://github.com/sealyun/rook",target:"_blank",rel:"noopener noreferrer"}},[e._v("仓库"),a("OutboundLink")],1),e._v("\n包含：rook operator ceph cluster storage class配置，mysql wordpress事例，性能测试fio Dockerfile与yaml等")]),e._v(" "),a("h1",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[e._v("#")]),e._v(" 安装")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git clone https://github.com/rook/rook\n\ncd cluster/examples/kubernetes/ceph\nkubectl create -f operator.yaml \n")])])]),a("p",[e._v("查看operator是否成功：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("[root@dev-86-201 ~]# kubectl get pod -n rook-ceph-system\nNAME                                  READY   STATUS    RESTARTS   AGE\nrook-ceph-agent-5z6p7                 1/1     Running   0          88m\nrook-ceph-agent-6rj7l                 1/1     Running   0          88m\nrook-ceph-agent-8qfpj                 1/1     Running   0          88m\nrook-ceph-agent-xbhzh                 1/1     Running   0          88m\nrook-ceph-operator-67f4b8f67d-tsnf2   1/1     Running   0          88m\nrook-discover-5wghx                   1/1     Running   0          88m\nrook-discover-lhwvf                   1/1     Running   0          88m\nrook-discover-nl5m2                   1/1     Running   0          88m\nrook-discover-qmbx7                   1/1     Running   0          88m\n")])])]),a("p",[e._v("然后创建ceph集群：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl create -f cluster.yaml\n")])])]),a("p",[e._v("查看ceph集群：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("[root@dev-86-201 ~]# kubectl get pod -n rook-ceph\nNAME                               READY   STATUS    RESTARTS   AGE\nrook-ceph-mgr-a-8649f78d9b-jklbv   1/1     Running   0          64m\nrook-ceph-mon-a-5d7fcfb6ff-2wq9l   1/1     Running   0          81m\nrook-ceph-mon-b-7cfcd567d8-lkqff   1/1     Running   0          80m\nrook-ceph-mon-d-65cd79df44-66rgz   1/1     Running   0          79m\nrook-ceph-osd-0-56bd7545bd-5k9xk   1/1     Running   0          63m\nrook-ceph-osd-1-77f56cd549-7rm4l   1/1     Running   0          63m\nrook-ceph-osd-2-6cf58ddb6f-wkwp6   1/1     Running   0          63m\nrook-ceph-osd-3-6f8b78c647-8xjzv   1/1     Running   0          63m\n")])])]),a("p",[e._v("参数说明：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('apiVersion: ceph.rook.io/v1\nkind: CephCluster\nmetadata:\n  name: rook-ceph\n  namespace: rook-ceph\nspec:\n  cephVersion:\n    # For the latest ceph images, see https://hub.docker.com/r/ceph/ceph/tags\n    image: ceph/ceph:v13.2.2-20181023\n  dataDirHostPath: /var/lib/rook # 数据盘目录\n  mon:\n    count: 3\n    allowMultiplePerNode: true\n  dashboard:\n    enabled: true\n  storage:\n    useAllNodes: true\n    useAllDevices: false\n    config:\n      databaseSizeMB: "1024"\n      journalSizeMB: "1024"\n')])])]),a("p",[e._v("访问ceph dashboard:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("[root@dev-86-201 ~]# kubectl get svc -n rook-ceph\nNAME                      TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)          AGE\nrook-ceph-mgr             ClusterIP   10.98.183.33     <none>        9283/TCP         66m\nrook-ceph-mgr-dashboard   NodePort    10.103.84.48     <none>        8443:31631/TCP   66m  # 把这个改成NodePort模式\nrook-ceph-mon-a           ClusterIP   10.99.71.227     <none>        6790/TCP         83m\nrook-ceph-mon-b           ClusterIP   10.110.245.119   <none>        6790/TCP         82m\nrook-ceph-mon-d           ClusterIP   10.101.79.159    <none>        6790/TCP         81m\n")])])]),a("p",[e._v("然后访问https://10.1.86.201:31631 即可\n"),a("img",{attrs:{src:"/ceph/dashboard.png",alt:""}})]),e._v(" "),a("p",[e._v("管理账户admin,获取登录密码：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl -n rook-ceph get secret rook-ceph-dashboard-password -o yaml | grep \"password:\" | awk '{print $2}' | base64 --decode\n")])])]),a("h1",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[e._v("#")]),e._v(" 使用")]),e._v(" "),a("h2",{attrs:{id:"创建pool"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建pool"}},[e._v("#")]),e._v(" 创建pool")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('apiVersion: ceph.rook.io/v1\nkind: CephBlockPool\nmetadata:\n  name: replicapool   # operator会监听并创建一个pool，执行完后界面上也能看到对应的pool\n  namespace: rook-ceph\nspec:\n  failureDomain: host\n  replicated:\n    size: 3\n---\napiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n   name: rook-ceph-block    # 这里创建一个storage class, 在pvc中指定这个storage class即可实现动态创建PV\nprovisioner: ceph.rook.io/block\nparameters:\n  blockPool: replicapool\n  # The value of "clusterNamespace" MUST be the same as the one in which your rook cluster exist\n  clusterNamespace: rook-ceph\n  # Specify the filesystem type of the volume. If not specified, it will use `ext4`.\n  fstype: xfs\n# Optional, default reclaimPolicy is "Delete". Other options are: "Retain", "Recycle" as documented in https://kubernetes.io/docs/concepts/storage/storage-classes/\nreclaimPolicy: Retain\n')])])]),a("h2",{attrs:{id:"创建pvc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建pvc"}},[e._v("#")]),e._v(" 创建pvc")]),e._v(" "),a("p",[e._v("在cluster/examples/kubernetes 目录下，官方给了个worldpress的例子，可以直接运行一下：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl create -f mysql.yaml\nkubectl create -f wordpress.yaml\n")])])]),a("p",[e._v("查看PV PVC：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("[root@dev-86-201 ~]# kubectl get pvc\nNAME             STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS      AGE\nmysql-pv-claim   Bound    pvc-a910f8c2-1ee9-11e9-84fc-becbfc415cde   20Gi       RWO            rook-ceph-block   144m\nwp-pv-claim      Bound    pvc-af2dfbd4-1ee9-11e9-84fc-becbfc415cde   20Gi       RWO            rook-ceph-block   144m\n\n[root@dev-86-201 ~]# kubectl get pv\nNAME                                       CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS   CLAIM                    STORAGECLASS      REASON   AGE\npvc-a910f8c2-1ee9-11e9-84fc-becbfc415cde   20Gi       RWO            Retain           Bound    default/mysql-pv-claim   rook-ceph-block            145m\npvc-af2dfbd4-1ee9-11e9-84fc-becbfc415cde   20Gi       RWO            Retain           Bound    default/wp-pv-claim      rook-ceph-block            145m\n")])])]),a("p",[e._v("看下yaml文件：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: mysql-pv-claim\n  labels:\n    app: wordpress\nspec:\n  storageClassName: rook-ceph-block   # 指定storage class\n  accessModes:\n  - ReadWriteOnce\n  resources:\n    requests:\n      storage: 20Gi  # 需要一个20G的盘\n\n...\n\n        volumeMounts:\n        - name: mysql-persistent-storage\n          mountPath: /var/lib/mysql\n      volumes:\n      - name: mysql-persistent-storage\n        persistentVolumeClaim:\n          claimName: mysql-pv-claim  # 指定上面定义的PVC\n")])])]),a("p",[e._v("是不是非常简单。")]),e._v(" "),a("p",[e._v("要访问wordpress的话请把service改成NodePort类型，官方给的是loadbalance类型：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl edit svc wordpress\n\n[root@dev-86-201 kubernetes]# kubectl get svc\nNAME              TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)        AGE\nwordpress         NodePort    10.109.30.99   <none>        80:30130/TCP   148m\n")])])]),a("h1",{attrs:{id:"外部访问ceph集群"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#外部访问ceph集群"}},[e._v("#")]),e._v(" 外部访问ceph集群")]),e._v(" "),a("p",[e._v("cluster.yaml里有配置，可配置成共享宿主机网络，这样外面可直接连接ceph集群：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("  network:\n    # toggle to use hostNetwork\n    hostNetwork: false\n")])])]),a("h1",{attrs:{id:"ceph集群监控"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ceph集群监控"}},[e._v("#")]),e._v(" ceph集群监控")]),e._v(" "),a("p",[e._v("通过prometheus operator配合rook可以快速构建ceph集群的监控，sealyun安装包中已经自带了prometheus operator，所以直接干即可")]),e._v(" "),a("h2",{attrs:{id:"启动ceph-prometheus"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动ceph-prometheus"}},[e._v("#")]),e._v(" 启动ceph prometheus")]),e._v(" "),a("p",[e._v("注意这里是为ceph单独起了一个prometheus，这样做挺好，因为毕竟可以缓解prometheus单点的压力")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cd cluster/examples/kubernetes/ceph/monitoring\nkubectl create -f service-monitor.yaml\nkubectl create -f prometheus.yaml\nkubectl create -f prometheus-service.yaml\n")])])]),a("p",[e._v("然后我们的grafana在30000端口，先在grafana上添加数据源")]),e._v(" "),a("p",[a("img",{attrs:{src:"/ceph/data-source.png",alt:""}})]),e._v(" "),a("p",[e._v("数据源要配置成：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("http://rook-prometheus.rook-ceph.svc.cluster.local:9090\n")])])]),a("h2",{attrs:{id:"导入dashboard"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导入dashboard"}},[e._v("#")]),e._v(" 导入dashboard")]),e._v(" "),a("p",[a("img",{attrs:{src:"/ceph/import1.png",alt:""}}),e._v(" "),a("img",{attrs:{src:"/ceph/import2.png",alt:""}}),e._v(" "),a("img",{attrs:{src:"/ceph/import3.png",alt:""}})]),e._v(" "),a("p",[e._v("还有几个别的dashboard可以导入：\n"),a("a",{attrs:{href:"https://grafana.com/dashboards/2842",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ceph - Cluster"),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://grafana.com/dashboards/5336",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ceph - OSD"),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://grafana.com/dashboards/5342",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ceph - Pools"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("再次感叹生态之强大")]),e._v(" "),a("h1",{attrs:{id:"增加节点-删除节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#增加节点-删除节点"}},[e._v("#")]),e._v(" 增加节点,删除节点")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl edit cephcluster rook-ceph -n rook-ceph\n")])])]),a("p",[e._v("把useAllNodes设置成false，然后在nodes列表里增加节点名即可，保存退出后会自动增加ceph节点")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    nodes:\n    - config: null\n      name: izj6c3afuzdjhtkj156zt0z\n      resources: {}\n    - config: null\n      name: izj6cg4wnagly61eny0hy9z\n      resources: {}\n    - config: null\n      name: izj6cg4wnagly61eny0hyaz\n      resources: {}\n    useAllDevices: false\n")])])]),a("p",[e._v("删除同理，直接edit删除即可，十分强大")]),e._v(" "),a("h1",{attrs:{id:"性能测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#性能测试"}},[e._v("#")]),e._v(" 性能测试")]),e._v(" "),a("p",[e._v("这里着重说明测试方法，给出在我的场景下的测试结果，用户应当根据自己的场景进行自己的测试。")]),e._v(" "),a("h2",{attrs:{id:"测试环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试环境"}},[e._v("#")]),e._v(" 测试环境")]),e._v(" "),a("p",[e._v("我这里使用阿里云服务器，挂载了一个1000G的磁盘，不过我实际测试时用的盘很少（盘大太慢）")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("[root@izj6c3afuzdjhtkj156zt0z ~]# df -h|grep dev\ndevtmpfs        3.9G     0  3.9G    0% /dev\ntmpfs           3.9G     0  3.9G    0% /dev/shm\n/dev/vda1        40G   17G   21G   44% /\n/dev/vdb1       985G   41G  895G    5% /data   \n/dev/rbd0       296G  2.1G  294G    1% /var/lib/kubelet/plugins/ceph.rook.io/rook-ceph-system/mounts/pvc-692e2be3-2434-11e9-aef7-00163e01e813\n")])])]),a("p",[e._v("可看到一个本地盘和一个ceph挂过来的盘")]),e._v(" "),a("p",[e._v("先搞个fio的镜像")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("[root@izj6c3afuzdjhtkj156zt0z fio]# cat Dockerfile\nFROM docker.io/centos:7.6.1810\nRUN yum install -y fio\n")])])]),a("p",[e._v("测试容器，稍微改一下mysql的yaml:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: mysql-pv-claim\n  labels:\n    app: wordpress\nspec:\n  storageClassName: rook-ceph-block\n  accessModes:\n  - ReadWriteOnce\n  resources:\n    requests:\n      storage: 300Gi\n---\napiVersion: apps/v1beta1\nkind: Deployment\nmetadata:\n  name: wordpress-mysql\n  labels:\n    app: wordpress\nspec:\n  strategy:\n    type: Recreate\n  template:\n    metadata:\n      labels:\n        app: wordpress\n        tier: mysql\n    spec:\n      containers:\n      - image: fio:latest\n        imagePullPolicy: IfNotPresent\n        command: ["sleep", "10000000"]\n        name: mysql\n        volumeMounts:\n        - name: mysql-persistent-storage\n          mountPath: /var/lib/mysql\n      volumes:\n      - name: mysql-persistent-storage\n        persistentVolumeClaim:\n          claimName: mysql-pv-claim\n')])])]),a("h2",{attrs:{id:"测试过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试过程"}},[e._v("#")]),e._v(" 测试过程")]),e._v(" "),a("p",[e._v("进入到容器内跑测试工具：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ kubectl exec -it wordpress-mysql-775c44887c-5vhx9 bash\n\n# touch /var/lib/mysql/test # 创建测试文件\n# fio -filename=/var/lib/mysql/test -direct=1 -iodepth=128 -rw=randrw -ioengine=libaio -bs=4k -size=200G -numjobs=8 -runtime=100 -group_reporting -name=Rand_Write_Testing\n")])])]),a("p",[e._v("结果：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Rand_Write_Testing: (g=0): rw=randrw, bs=(R) 4096B-4096B, (W) 4096B-4096B, (T) 4096B-4096B, ioengine=libaio, iodepth=128\n...\nfio-3.1\nStarting 2 processes\nRand_Write_Testing: Laying out IO file (1 file / 2048MiB)\nJobs: 2 (f=2): [m(2)][100.0%][r=16.6MiB/s,w=17.2MiB/s][r=4240,w=4415 IOPS][eta 00m:00s]\nRand_Write_Testing: (groupid=0, jobs=2): err= 0: pid=34: Wed Jan 30 02:44:18 2019\n   read: IOPS=3693, BW=14.4MiB/s (15.1MB/s)(1443MiB/100013msec)\n    slat (usec): min=2, max=203952, avg=262.47, stdev=2107.16\n    clat (msec): min=3, max=702, avg=30.85, stdev=30.97\n     lat (msec): min=3, max=702, avg=31.11, stdev=31.21\n    clat percentiles (msec):\n     |  1.00th=[   12],  5.00th=[   14], 10.00th=[   16], 20.00th=[   18],\n     | 30.00th=[   20], 40.00th=[   22], 50.00th=[   24], 60.00th=[   27],\n     | 70.00th=[   30], 80.00th=[   36], 90.00th=[   46], 95.00th=[   64],\n     | 99.00th=[  194], 99.50th=[  213], 99.90th=[  334], 99.95th=[  397],\n     | 99.99th=[  502]\n   bw (  KiB/s): min=  440, max=12800, per=49.98%, avg=7383.83, stdev=3004.90, samples=400\n   iops        : min=  110, max= 3200, avg=1845.92, stdev=751.22, samples=400\n  write: IOPS=3700, BW=14.5MiB/s (15.2MB/s)(1446MiB/100013msec)\n    slat (usec): min=2, max=172409, avg=266.11, stdev=2004.53\n    clat (msec): min=7, max=711, avg=37.85, stdev=37.52\n     lat (msec): min=7, max=711, avg=38.12, stdev=37.72\n    clat percentiles (msec):\n     |  1.00th=[   16],  5.00th=[   19], 10.00th=[   21], 20.00th=[   23],\n     | 30.00th=[   25], 40.00th=[   27], 50.00th=[   29], 60.00th=[   32],\n     | 70.00th=[   36], 80.00th=[   42], 90.00th=[   53], 95.00th=[   73],\n     | 99.00th=[  213], 99.50th=[  292], 99.90th=[  397], 99.95th=[  472],\n     | 99.99th=[  600]\n   bw (  KiB/s): min=  536, max=12800, per=49.98%, avg=7397.37, stdev=3000.10, samples=400\n   iops        : min=  134, max= 3200, avg=1849.32, stdev=750.02, samples=400\n  lat (msec)   : 4=0.01%, 10=0.22%, 20=22.18%, 50=68.05%, 100=5.90%\n  lat (msec)   : 250=3.09%, 500=0.54%, 750=0.02%\n  cpu          : usr=1.63%, sys=4.68%, ctx=311249, majf=0, minf=18\n  IO depths    : 1=0.1%, 2=0.1%, 4=0.1%, 8=0.1%, 16=0.1%, 32=0.1%, >=64=100.0%\n     submit    : 0=0.0%, 4=100.0%, 8=0.0%, 16=0.0%, 32=0.0%, 64=0.0%, >=64=0.0%\n     complete  : 0=0.0%, 4=100.0%, 8=0.0%, 16=0.0%, 32=0.0%, 64=0.0%, >=64=0.1%\n     issued rwt: total=369395,370084,0, short=0,0,0, dropped=0,0,0\n     latency   : target=0, window=0, percentile=100.00%, depth=128\n\nRun status group 0 (all jobs):\n   READ: bw=14.4MiB/s (15.1MB/s), 14.4MiB/s-14.4MiB/s (15.1MB/s-15.1MB/s), io=1443MiB (1513MB), run=100013-100013msec\n  WRITE: bw=14.5MiB/s (15.2MB/s), 14.5MiB/s-14.5MiB/s (15.2MB/s-15.2MB/s), io=1446MiB (1516MB), run=100013-100013msec\n\nDisk stats (read/write):\n  rbd0: ios=369133/369841, merge=0/35, ticks=4821508/7373587, in_queue=12172273, util=99.93%\n")])])]),a("p",[e._v("在宿主机上测试：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ touch /data/test\n$ fio -filename=/data/test -direct=1 -iodepth=128 -rw=randrw -ioengine=libaio -bs=4k -size=2G -numjobs=2 -runtime=100 -group_reporting -name=Rand_Write_Testing\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Rand_Write_Testing: (g=0): rw=randrw, bs=(R) 4096B-4096B, (W) 4096B-4096B, (T) 4096B-4096B, ioengine=libaio, iodepth=128\n...\nfio-3.1\nStarting 2 processes\nRand_Write_Testing: Laying out IO file (1 file / 2048MiB)\nJobs: 2 (f=2): [m(2)][100.0%][r=19.7MiB/s,w=19.8MiB/s][r=5043,w=5056 IOPS][eta 00m:00s]\nRand_Write_Testing: (groupid=0, jobs=2): err= 0: pid=13588: Wed Jan 30 10:41:25 2019\n   read: IOPS=5024, BW=19.6MiB/s (20.6MB/s)(1963MiB/100019msec)\n    slat (usec): min=2, max=80213, avg=191.32, stdev=2491.48\n    clat (usec): min=1022, max=176786, avg=19281.58, stdev=23666.08\n     lat (usec): min=1031, max=176791, avg=19473.50, stdev=23757.08\n    clat percentiles (msec):\n     |  1.00th=[    3],  5.00th=[    4], 10.00th=[    5], 20.00th=[    6],\n     | 30.00th=[    7], 40.00th=[    8], 50.00th=[    9], 60.00th=[   10],\n     | 70.00th=[   12], 80.00th=[   25], 90.00th=[   67], 95.00th=[   73],\n     | 99.00th=[   81], 99.50th=[   85], 99.90th=[   93], 99.95th=[   96],\n     | 99.99th=[  104]\n   bw (  KiB/s): min= 9304, max=10706, per=49.99%, avg=10046.66, stdev=243.04, samples=400\n   iops        : min= 2326, max= 2676, avg=2511.62, stdev=60.73, samples=400\n  write: IOPS=5035, BW=19.7MiB/s (20.6MB/s)(1967MiB/100019msec)\n    slat (usec): min=3, max=76025, avg=197.61, stdev=2504.40\n    clat (msec): min=2, max=155, avg=31.21, stdev=27.12\n     lat (msec): min=2, max=155, avg=31.40, stdev=27.16\n    clat percentiles (msec):\n     |  1.00th=[    7],  5.00th=[    9], 10.00th=[   10], 20.00th=[   11],\n     | 30.00th=[   13], 40.00th=[   14], 50.00th=[   15], 60.00th=[   18],\n     | 70.00th=[   48], 80.00th=[   68], 90.00th=[   75], 95.00th=[   80],\n     | 99.00th=[   88], 99.50th=[   93], 99.90th=[  102], 99.95th=[  104],\n     | 99.99th=[  112]\n   bw (  KiB/s): min= 9208, max=10784, per=49.98%, avg=10066.14, stdev=214.26, samples=400\n   iops        : min= 2302, max= 2696, avg=2516.50, stdev=53.54, samples=400\n  lat (msec)   : 2=0.04%, 4=3.09%, 10=34.76%, 20=33.31%, 50=5.05%\n  lat (msec)   : 100=23.67%, 250=0.08%\n  cpu          : usr=1.54%, sys=5.80%, ctx=286367, majf=0, minf=20\n  IO depths    : 1=0.1%, 2=0.1%, 4=0.1%, 8=0.1%, 16=0.1%, 32=0.1%, >=64=100.0%\n     submit    : 0=0.0%, 4=100.0%, 8=0.0%, 16=0.0%, 32=0.0%, 64=0.0%, >=64=0.0%\n     complete  : 0=0.0%, 4=100.0%, 8=0.0%, 16=0.0%, 32=0.0%, 64=0.0%, >=64=0.1%\n     issued rwt: total=502523,503598,0, short=0,0,0, dropped=0,0,0\n     latency   : target=0, window=0, percentile=100.00%, depth=128\n\nRun status group 0 (all jobs):\n   READ: bw=19.6MiB/s (20.6MB/s), 19.6MiB/s-19.6MiB/s (20.6MB/s-20.6MB/s), io=1963MiB (2058MB), run=100019-100019msec\n  WRITE: bw=19.7MiB/s (20.6MB/s), 19.7MiB/s-19.7MiB/s (20.6MB/s-20.6MB/s), io=1967MiB (2063MB), run=100019-100019msec\n\nDisk stats (read/write):\n  vdb: ios=502513/504275, merge=0/658, ticks=4271124/7962372, in_queue=11283349, util=92.48%\n")])])]),a("p",[e._v("这里看到随机读写性能损失约 27%多，这个结论并没有太多参考意义，用户应当根据自己实际场景进行测试")]),e._v(" "),a("p",[e._v("改用ceph共享宿主机网络模式进行测试，结果差不多，并无性能提升")]),e._v(" "),a("p",[e._v("要想排除在容器内测试因素的影响，也可以直接在宿主机上对块设备进行测试，做法很简单，可以把块挂到别的目录上如：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("umount /dev/rbd0\nmkdir /data1\nmount /dev/rbd0 /data1\ntouch /data1/test  # 然后对这个文件测试，我这边测试结果与容器内差不多\n")])])]),a("h1",{attrs:{id:"bluestore方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bluestore方式"}},[e._v("#")]),e._v(" bluestore方式")]),e._v(" "),a("p",[e._v("直接使用裸盘而不使用分区或者文件系统的方式部署ceph")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('storage:\n  useAllNodes: false\n  useAllDevices: false\n  deviceFilter:\n  location:\n  config:\n    storeType: bluestore\n  nodes:\n  - name: "ke-dev1-worker1"\n    devices:\n    - name: "vde"\n  - name: "ke-dev1-worker3"\n    devices:\n    - name: "vde"\n  - name: "ke-dev1-worker4"\n    devices:\n    - name: "vdf"\n')])])]),a("p",[e._v("bluestore模式能显著提升ceph性能，我这边测试随机读写性能提升了8%左右")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Rand_Write_Testing: (g=0): rw=randrw, bs=(R) 4096B-4096B, (W) 4096B-4096B, (T) 4096B-4096B, ioengine=libaio, iodepth=128\n...\nfio-3.1\nStarting 2 processes\nRand_Write_Testing: Laying out IO file (1 file / 2048MiB)\nJobs: 2 (f=2): [m(2)][100.0%][r=16.4MiB/s,w=16.7MiB/s][r=4189,w=4284 IOPS][eta 00m:00s]]\nRand_Write_Testing: (groupid=0, jobs=2): err= 0: pid=25: Thu Jan 31 11:37:39 2019\n   read: IOPS=3990, BW=15.6MiB/s (16.3MB/s)(1566MiB/100464msec)\n    slat (usec): min=2, max=246625, avg=239.16, stdev=1067.33\n    clat (msec): min=2, max=493, avg=27.68, stdev=16.71\n     lat (msec): min=2, max=493, avg=27.92, stdev=16.75\n    clat percentiles (msec):\n     |  1.00th=[   12],  5.00th=[   15], 10.00th=[   16], 20.00th=[   18],\n     | 30.00th=[   20], 40.00th=[   22], 50.00th=[   24], 60.00th=[   27],\n     | 70.00th=[   30], 80.00th=[   35], 90.00th=[   45], 95.00th=[   54],\n     | 99.00th=[   74], 99.50th=[   84], 99.90th=[  199], 99.95th=[  334],\n     | 99.99th=[  485]\n   bw (  KiB/s): min= 2118, max=10456, per=50.20%, avg=8013.40, stdev=1255.78, samples=400\n   iops        : min=  529, max= 2614, avg=2003.31, stdev=313.95, samples=400\n  write: IOPS=3997, BW=15.6MiB/s (16.4MB/s)(1569MiB/100464msec)\n    slat (usec): min=3, max=273211, avg=246.87, stdev=1026.98\n    clat (msec): min=11, max=499, avg=35.90, stdev=18.04\n     lat (msec): min=12, max=506, avg=36.15, stdev=18.08\n    clat percentiles (msec):\n     |  1.00th=[   19],  5.00th=[   22], 10.00th=[   23], 20.00th=[   26],\n     | 30.00th=[   28], 40.00th=[   30], 50.00th=[   33], 60.00th=[   35],\n     | 70.00th=[   39], 80.00th=[   44], 90.00th=[   54], 95.00th=[   63],\n     | 99.00th=[   85], 99.50th=[   95], 99.90th=[  309], 99.95th=[  351],\n     | 99.99th=[  489]\n   bw (  KiB/s): min= 2141, max=10163, per=50.20%, avg=8026.23, stdev=1251.78, samples=400\n   iops        : min=  535, max= 2540, avg=2006.51, stdev=312.94, samples=400\n  lat (msec)   : 4=0.01%, 10=0.10%, 20=16.63%, 50=73.71%, 100=9.25%\n  lat (msec)   : 250=0.22%, 500=0.09%\n  cpu          : usr=1.85%, sys=5.60%, ctx=366744, majf=0, minf=17\n  IO depths    : 1=0.1%, 2=0.1%, 4=0.1%, 8=0.1%, 16=0.1%, 32=0.1%, >=64=100.0%\n     submit    : 0=0.0%, 4=100.0%, 8=0.0%, 16=0.0%, 32=0.0%, 64=0.0%, >=64=0.0%\n     complete  : 0=0.0%, 4=100.0%, 8=0.0%, 16=0.0%, 32=0.0%, 64=0.0%, >=64=0.1%\n     issued rwt: total=400928,401597,0, short=0,0,0, dropped=0,0,0\n     latency   : target=0, window=0, percentile=100.00%, depth=128\n\nRun status group 0 (all jobs):\n   READ: bw=15.6MiB/s (16.3MB/s), 15.6MiB/s-15.6MiB/s (16.3MB/s-16.3MB/s), io=1566MiB (1642MB), run=100464-100464msec\n  WRITE: bw=15.6MiB/s (16.4MB/s), 15.6MiB/s-15.6MiB/s (16.4MB/s-16.4MB/s), io=1569MiB (1645MB), run=100464-100464msec\n\nDisk stats (read/write):\n  rbd0: ios=400921/401817, merge=0/50, ticks=4341605/7883816, in_queue=12217335, util=99.96%\n")])])]),a("h1",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),a("p",[e._v("分布式存储在容器集群中充当非常重要的角色，使用容器集群一个非常重要的理念就是把集群当成一个整体使用，如果你在使用中还关心单个主机，比如调度到某个节点，")]),e._v(" "),a("p",[e._v("挂载某个节点目录等，必然会导致不能把云的威力百分之百发挥出来。   一旦计算存储分离后，就可真正实现随意漂移，对集群维护来说是个极大的福音。")]),e._v(" "),a("p",[e._v("比如集群机器过保了需要下架，那么我们云化的架构因为所有东西无单点，所以只需要简单驱逐改节点，然后下架即可，不用关心上面跑的是什么业务，不管是有状态还是无")]),e._v(" "),a("p",[e._v("状态的都可以自动修复。 不过目前面临最大的挑战可能还是分布式存储的性能问题。  在性能要求不苛刻的场景下我是极推荐这种计算存储分离架构的。")]),e._v(" "),a("h1",{attrs:{id:"常见问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[e._v("#")]),e._v(" 常见问题")]),e._v(" "),a("p",[e._v("注意主机时间一定要同步")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ntpdate 0.asia.pool.ntp.org\n")])])]),a("h2",{attrs:{id:"ceph-cluster无法启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ceph-cluster无法启动"}},[e._v("#")]),e._v(" ceph cluster无法启动")]),e._v(" "),a("p",[e._v("报这个错误")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ kubectl logs rook-ceph-mon-a-c5f54799f-rd7s4 -n rook-ceph\n2019-01-27 11:04:59.985 7f0a34a4f140 -1 rocksdb: Invalid argument: /var/lib/rook/mon-a/data/store.db: does not exist (create_if_missing is false)\n2019-01-27 11:04:59.985 7f0a34a4f140 -1 rocksdb: Invalid argument: /var/lib/rook/mon-a/data/store.db: does not exist (create_if_missing is false)\n2019-01-27 11:04:59.985 7f0a34a4f140 -1 error opening mon data directory at '/var/lib/rook/mon-a/data': (22) Invalid argument\n2019-01-27 11:04:59.985 7f0a34a4f140 -1 error opening mon data directory at '/var/lib/rook/mon-a/data': (22) Invalid argument\n")])])]),a("p",[e._v("需要把宿主机store.db文件删掉,然后delete pod即可, 主意别指错目录如果自己改了目录的话")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("rm -rf  /var/lib/rook/mon-a/data/store.db\n")])])]),a("h2",{attrs:{id:"rook删除pvc-pv依然存在"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rook删除pvc-pv依然存在"}},[e._v("#")]),e._v(" rook删除PVC PV依然存在")]),e._v(" "),a("p",[e._v("因为storageclass回收参数：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("reclaimPolicy: Retain  # 设置成Delete即可\n")])])]),a("h2",{attrs:{id:"rook-ceph-namespace无法删除-cephclusters-ceph-rook-io-crd无法删除"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rook-ceph-namespace无法删除-cephclusters-ceph-rook-io-crd无法删除"}},[e._v("#")]),e._v(" rook-ceph namespace无法删除 cephclusters.ceph.rook.io CRD无法删除")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("[root@izj6c3afuzdjhtkj156zt0z ~]# kubectl get ns\nNAME          STATUS        AGE\ndefault       Active        18h\nkube-public   Active        18h\nkube-system   Active        18h\nmonitoring    Active        18h\nrook-ceph     Terminating   17h\n")])])]),a("p",[e._v("把CRD metadata finalizers下面的内容删了，CRD就会自动删除，然后只要rook-ceph namespace里没有东西就会自动清理掉")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ kubectl edit crd cephclusters.ceph.rook.io\n")])])]),a("h2",{attrs:{id:"使用宿主机网络时集群无法正常启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用宿主机网络时集群无法正常启动"}},[e._v("#")]),e._v(" 使用宿主机网络时集群无法正常启动")]),e._v(" "),a("p",[e._v("集群中单节点时把mon设置成1即可")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("  mon:\n    count: 1\n    allowMultiplePerNode: true\n\n  network:\n    # toggle to use hostNetwork\n    hostNetwork: true\n")])])]),a("p",[e._v("探讨可加QQ群：98488045")]),e._v(" "),a("h1",{attrs:{id:"公众号："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#公众号："}},[e._v("#")]),e._v(" 公众号：")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://sealyun.com/kubernetes-qrcode.jpg",alt:"sealyun"}})]),e._v(" "),a("h3",{attrs:{id:"微信群："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#微信群："}},[e._v("#")]),e._v(" 微信群：")]),e._v(" "),a("p",[a("img",{attrs:{src:"/wechatgroup1.png",alt:""}})])])}),[],!1,null,null,null);t.default=n.exports}}]);