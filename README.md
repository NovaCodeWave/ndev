# Novadev Monorepo

## 项目使用说明

### 克隆项目

- https 克隆方式

```bash
git clone https://gitlab.com/novadev/ndev.git
```

- ssh 克隆方式 (多账号，根据config配置的账号进行克隆)

```bash
\\ 基础克隆 源地址：git@gitlab.com:novadev/ndev.git
git clone git@gitlab.com:novadev/ndev.git
或
\\ 多账号克隆 目标地址：git@nova.gitlab.com:novadev/ndev.git
git clone git@nova.gitlab.com:novadev/ndev.git
```

### 安装依赖

- 安装公共包

> -w 表示安装到共公模块的 packages.json 中，也就是根目录下的 packages.json。

```bash
pnpm install @nova/ui -w
pnpm install @nova/utils -w
```

## 项目规范说明

## gitlab 使用说明

### Add your files（添加您的文件）

- [创建或上传文件] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [使用命令行添加文件或使用以下命令推送现有的Git存储库] [Add files using the command line](https://docs.gitlab.com/ee/gitlab-basics/add-file.html#add-a-file-using-the-command-line) or push an existing Git repository with the following command:

```bash
cd existing_repo
git remote add origin https://gitlab.com/novadev/ndev.git
git branch -M main
git push -uf origin main
```

### Integrate with your tools （与您的工具集成）

- [设置项目集成] [Set up project integrations](https://gitlab.com/novadev/ndev/-/settings/integrations)

### Collaborate with your team（与你的团队合作）

- [邀请团队成员和合作者] [Invite team members and collaborators](https://docs.gitlab.com/ee/user/project/members/)
- [创建一个新的合并请求] [Create a new merge request](https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html)
- [自动关闭合并请求中的问题] [Automatically close issues from merge requests](https://docs.gitlab.com/ee/user/project/issues/managing_issues.html#closing-issues-automatically)
- [启用合并请求审批] [Enable merge request approvals](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/)
- [设置自动合并] [Set auto-merge](https://docs.gitlab.com/ee/user/project/merge_requests/merge_when_pipeline_succeeds.html)

### Test and Deploy （测试和部署）

Use the built-in continuous integration in GitLab. （使用GitLab内置的持续集成。）

- [开始使用GitLab CI/CD] [Get started with GitLab CI/CD](https://docs.gitlab.com/ee/ci/quick_start/index.html)
- [使用静态应用程序安全测试(SAST)分析代码中的已知漏洞] [Analyze your code for known vulnerabilities with Static Application Security Testing (SAST)](https://docs.gitlab.com/ee/user/application_security/sast/)
- [自动部署到Kubernetes,Amazon EC2或Amazon ECS] [Deploy to Kubernetes, Amazon EC2, or Amazon ECS using Auto Deploy](https://docs.gitlab.com/ee/topics/autodevops/requirements.html)
- [使用pull-based部署来改进Kubernetes管理] [Use pull-based deployments for improved Kubernetes management](https://docs.gitlab.com/ee/user/clusters/agent/)
- [设置受保护环境] [Set up protected environments](https://docs.gitlab.com/ee/ci/environments/protected_environments.html)