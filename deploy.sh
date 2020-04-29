# deploy.sh
# 错误时停止
# set -e

# 打包
npm run build
# 切换分支
git push origin gh-pages --delete
git branch -d gh-pages
git checkout -b gh-pages
# 添加dist目录
git add -f dist
git commit -m 'deploy'

# 提交到 gh-pages 分支
git subtree push --prefix dist origin gh-pages
git checkout master

cd -
