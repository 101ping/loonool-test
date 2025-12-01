# Nuxt 4 Starter

手动搭建的 Nuxt 4 项目骨架。在无法使用 `nuxi init` 的环境下，也可以快速开始 Nuxt 开发。

## 使用方式

```bash
cd nuxt4-app
npm install   # 或 pnpm install / bun install
npm run dev   # http://localhost:3000
```

## 脚本命令

- `npm run dev`：开发调试，默认端口 3000
- `npm run build`：生产构建
- `npm run generate`：静态生成
- `npm run preview`：本地预览生产构建
- `npm run lint`：基于 `@antfu/eslint-config` 的 ESLint 检查
- `npm run typecheck`：使用 `vue-tsc` 进行类型检查

## 目录结构

- `app.vue`：应用入口
- `pages/`：路由页面示例
- `assets/css/main.css`：全局样式
- `nuxt.config.ts`：Nuxt 4 配置（启用 devtools + 兼容模式 4）

如需扩展，可直接添加组件、插件或模块，并在 `nuxt.config.ts` 中进行配置。


