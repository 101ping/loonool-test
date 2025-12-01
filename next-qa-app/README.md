# Next.js 14 产品问答页面（App Router + TypeScript）

这是一个为 `doct/v1-prd.md` 准备的基础问答页面工程脚手架，基于 **Next.js 14 + TypeScript + App Router**。

> 当前仓库中暂未检测到 `doct/v1-prd.md` 文件，因此问题列表为示例数据。你可以后续补充该文档并将内容映射为真实问答。

## 使用方式

```bash
cd next-qa-app
npm install   # 或 pnpm install / bun install
npm run dev   # 默认 http://localhost:3000
```

## 主要技术栈

- Next.js 14（App Router 模式）
- TypeScript 严格模式
- 简单的全局样式（`app/globals.css`），支持暗色背景 + 卡片式问答展示

## 关键文件

- `app/layout.tsx`：根布局与基础 metadata
- `app/page.tsx`：产品问答首页（当前为静态示例数据）
- `app/globals.css`：全局样式
- `next.config.mjs`：Next.js 配置（开启 `appDir`）
- `tsconfig.json`：TypeScript 配置

## 下一步建议

1. 在仓库中创建 `doct/v1-prd.md`，或将该文件内容提供给助手。
2. 定义一个 PRD → 问答列表的数据结构（例如把 MD 转换为 JSON 或在代码中直接维护数组）。
3. 将 `app/page.tsx` 中的 `questions` 替换为根据 PRD 生成的真实数据。

如果你愿意，我可以在拿到 `doct/v1-prd.md` 内容后，进一步帮你自动抽取问题和答案并填充到页面中。



