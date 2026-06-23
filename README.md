# Shengxi Jing Personal Homepage

Homepage:
`https://Asuna404-not-found.github.io/Personal-Homepage/`

这是一个基于纯静态页面构建的个人研究主页项目，当前包含以下内容：

- 个人主页：首页展示个人简介、研究方向与项目入口

项目不依赖前端框架，直接通过 `HTML + CSS + JavaScript` 组织页面与内容，适合本地直接打开，也适合部署到 GitHub Pages、Vercel 或 Netlify。

## 最新更新

- `研究方向概览` 模块调整为更紧凑的三列概览卡片，减少空白区域。

## 项目结构

```text
.
├─ index.html                           # 个人主页首页
├─ styles.css                           # 全站共享样式
├─ script.js                            # 首页中英文文案、数据与渲染逻辑
└─ assets
   ├─ images                            # 首页展示图、GIF、照片
   └─ docs
      ├─ pdf                            # 对外展示或浏览用 PDF
      └─ source                         # 原始 Word / PPT 材料
```

## 页面说明

### 1. 首页

入口文件：`index.html`

首页的大部分文案和卡片内容由 `script.js` 动态渲染。


## 核心文件职责

- `index.html`
  - 定义首页整体结构
  - 放置首页各个模块的容器与锚点

- `script.js`
  - 管理首页中英文文案
  - 管理首页新闻、研究卡片、项目卡片、经历数据
  - 管理语言切换与首页模块渲染

- `styles.css`
  - 管理全站视觉风格、布局、响应式规则

## 如何更新内容

### 更新首页内容

主要改两个地方：

1. `index.html`
   - 调整首页区块结构
   - 修改静态标题、模块顺序、按钮入口

2. `script.js`
   - 修改首页文案
   - 修改研究方向、项目卡片、经历信息
   - 修改中英文切换内容

### 更新图片与材料

- 首页图片放在 `assets/images/`

建议：

- 对外展示优先放 PDF
- 原始可编辑文件保存在 `source/`
- 文件命名尽量保持统一，方便后续在数据文件中引用

## 本地预览

最简单的方式：

- 直接用浏览器打开 `index.html`

如果想避免某些本地路径或脚本加载差异，也可以在当前目录启动一个静态服务器，例如：

```powershell
python -m http.server 8000
```

然后访问：

```text
http://localhost:8000
```

## 发布与部署

这个项目适合直接部署到静态托管平台：

- GitHub Pages
- Vercel
- Netlify

当前仓库使用 GitHub Pages 自动部署：本地修改完成后提交到 `main`，推送到 `Asuna404-not-found/Personal-Homepage`，GitHub Actions 会自动发布到：

```text
https://Asuna404-not-found.github.io/Personal-Homepage/
```

常用更新流程：

```powershell
git add .
git commit -m "Update homepage"
git push origin main
```

### GitHub Pages

仓库已补充 GitHub Actions 工作流：

- `.github/workflows/pages.yml`

默认会在 `main` 分支有新提交时自动部署当前静态站点。

如果仓库 Pages 还没有启用，可在 GitHub 仓库中进入：

`Settings` -> `Pages` -> `Build and deployment`

将 `Source` 设为 `GitHub Actions`。

启用后，站点访问地址通常为：

`https://Asuna404-not-found.github.io/Personal-Homepage/`

部署时确保以下文件一起上传：

- 根目录下所有 `html / css / js` 文件
- `assets/` 目录

### 本项目当前发布流程

当前仓库采用“本地 Git 仓库 + SSH over 443 + GitHub Pages 自动部署”的方式发布。

最简更新流程：

```powershell
git status
git add .
git commit -m "Update homepage"
git push origin main
```

推送成功后，GitHub Actions 会自动构建并发布 GitHub Pages。站点会更新到：

```text
https://Asuna404-not-found.github.io/Personal-Homepage/
```

当前远端仓库：

```text
git@github.com:Asuna404-not-found/Personal-Homepage.git
```

### SSH over 443 说明

如果普通 HTTPS 推送或默认 SSH 端口不稳定，可以使用 SSH over 443。该方式通过 `ssh.github.com:443` 访问 GitHub，适合某些网络环境下维护项目。

本机 SSH 配置文件位置：

```text
C:\Users\景晟熙\.ssh\config
```

推荐配置形式：

```sshconfig
Host github.com
  HostName ssh.github.com
  User git
  Port 443
  IdentityFile ~/.ssh/<your_github_key>
```

配置完成后，将对应公钥添加到 GitHub 账号的 SSH Keys 中，再确认远端地址为：

```powershell
git remote set-url origin git@github.com:Asuna404-not-found/Personal-Homepage.git
```

后续维护时，只需要正常 `commit + push`，不需要重复配置 SSH 或 GitHub Pages。

## 后续维护建议

- 首页结构变更时，同时检查 `index.html` 和 `script.js` 是否一致
- 文案统一使用 UTF-8 编码保存
