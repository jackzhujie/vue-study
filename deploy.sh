# deploy.sh
# 错误时停止
# set -e

# 打包
npm run build
# 先删除原来的远程分支
git push origin gh-pages --delete
# 删除本地分支
git branch -d gh-pages
# 切换分支并新建分支
git checkout gh-pages
# 添加dist目录
git add -f dist
git commit -m 'deploy'

# 提交到 gh-pages 分支
git subtree push --prefix dist origin gh-pages
git checkout master

cd -
