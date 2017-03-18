## 1.git
安装brew在mac上
mac http://brew.sh
```
brew install git 
```
### 1.1 告诉git你是谁
```
git config --global user.name xxxxx
git config --global user.email xxxxx
git config --list
```
### 1.2 初始化git
```
git init
```

### 创建并进入目录 
```
mkdir gitTest && cd gitTest
```

### ls显示所有文件
```
ls -al 显示隐藏的
```

### 创建文件
```
touch index.txt
cat index.txt 查看内容
```

### 查看git状态
```
git status 
```

### 添加到暂存区
```
git add .
```

### 提交到历史库
```
git commit -m 'write hello world'
```

### 对比代码
工作区和暂存区
```
git diff
```
暂存区和历史区 
```
git diff --cached
```
工作区和历史区 
```
git diff master(分支名)
```

## 查看日志
```
git log 过多可以使用上下键查看，不想看可以q退出
```

## 查看所有日志
```
git reflog
```
## 回滚
```
git reset --hard 版本号
```
## vi编辑
```
vi index.txt
i 编辑模式
esc + :wq 保存并退出
```


## 分支管理
- 查看分支
```
git branch 
```
- 创建分支
```
git branch <branchName>
```
- 切换分支
```
git checkout <branchName>
```
- 删除分支（不能自己删除自己）
```

git branch -D <branchName>
```
- 创建并切换(相当于将当前内容克隆一份)
```
git checkout -b <branchName>
```
- 在master上合并dev分支
```
git merge dev
```