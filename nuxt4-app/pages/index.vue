<template>
  <main class="hero">
    <img src="/nuxt.svg" alt="Nuxt" width="96" height="96" />
    <p class="eyebrow">Nuxt 4 Starter</p>
    <h1>你好，Nuxt 4！</h1>
    <p class="lede">
      这是一个在离线环境中手动搭建的 Nuxt 4 示例项目，你可以立即运行
      <code>npm install</code> 然后 <code>npm run dev</code> 开始开发。
    </p>
    <NuxtLink class="cta" to="https://nuxt.com" target="_blank">
      查看 Nuxt 文档
    </NuxtLink>
  </main>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
  text-align: center;
}

.eyebrow {
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-size: 0.85rem;
  color: #6366f1;
  margin-bottom: 0;
}

h1 {
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  margin: 0;
}

.lede {
  max-width: 42rem;
  line-height: 1.7;
  color: #475569;
}

code {
  background: #e2e8f0;
  padding: 0.15rem 0.35rem;
  border-radius: 0.35rem;
}

.cta {
  margin-top: 0.5rem;
  background: linear-gradient(120deg, #10b981, #14b8a6);
  color: #fff;
  padding: 0.85rem 1.6rem;
  border-radius: 999px;
  font-weight: 600;
  text-decoration: none;
  transition: opacity 0.2s ease;
}

.cta:hover {
  opacity: 0.85;
}
</style>


