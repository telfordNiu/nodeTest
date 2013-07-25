#mongo DB [官网](http://www.mongodb.org/)
##mongo简介
##安装 windows [更多平台的安装](http://docs.mongodb.org/manual/installation/)
    下载mongoDB [点这里](http://www.mongodb.org/downloads)
    在C盘建data文件夹，在data下建db文件夹（此文件夹是默认的mongoDB放置数据的地方）
    将C盘建mongo文件夹，将下载的mongoDB放入该文件夹下
    将bin所在文件夹所在的路径追加到环境变量path中（为了能在命令行中对mongoDB进行远程连接，备份等操作）
##启动
    依次打开C:\mongodb\bin\mongod.exe 和 C:\mongodb\bin\mongo.exe
    或建个批处理文件内容为
        start C:\mongodb\bin\mongod.exe
        start C:\mongodb\bin\mongo.exe 运行该命令行来打开
##常用操作
    在mongoDB.exe的窗口进行交换
        show dbs :显示数据库
        use dbBaseName :使用某个数据库
        db :当前在使用哪个数据库
        show collections : 显示该数据库上的所有collection
        db.collName.find() : 查询某collection上的所用数据
        db.collName.insert(jsonData):在collection上插入数据
        db.collName.remove([queryJson],[justone]):
        	若queryJson为空，则删除该collection上的所有数据
        	query支持正则 若query为{'name.first':/^Ja/} 则 数据{name:{first:'Jack',...}}会被删除
        	justOne为true，则最多删除一条数据
        db.collName.update: http://docs.mongodb.org/manual/core/update/#crud-update-update
        	db.bios.update(
			   { _id: 1 },
			   {
			     $set: { 'name.middle': 'Warner' ,
			     	'name.aka': 'Amazing Grace'//添加新属性
			     	},
			     $unset: { birth: 1 } //删除属性
			   },
			   {
		   			{ multi: true },//更新多条记录，不设置则只会更新一条
		   			{ upsert: true }//若找不到要更新的，则新建一条，并插入

			   }

			)

    
    在cmd中的操作
        mongo ：连接数据库
        mongo --host 远程ip ：连接到远程服务器上的mongo
        
        
        
        
##可视化工具 
    mongoCola 
    下载地址 https://github.com/magicdict/MagicMongoDBTool/downloads
