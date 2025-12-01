const faqs = [
  {
    question: '1. LOONOOL 是什么？',
    answer:
      'LOONOOL 是一款帮助你判断图片是否适合商用（Safe-to-Use）的工具。你上传一张图片，我们会自动分析视觉、文案和基础行业规则，并生成一份清晰易懂的可用性报告。'
  },
  {
    question: '2. LOONOOL 和普通相似度工具有什么不同？',
    answer: `大多数相似度工具只告诉你“这张图和别人像不像”。LOONOOL 的关注点不是“像”，而是：这张图是否适合商用？有没有可能造成视觉混淆或误解？

我们会从可用性的角度分析图片：
- 是否存在让人看不清、误读、误解的视觉结构
- 是否有容易和常见图形混淆的关键元素
- 图形的稳定度、辨识度是否足够
- 哪些部分可能在应用场景中出现问题

简单来说：相似度工具告诉你像不像；LOONOOL 告诉你“能不能用、哪里要注意、怎么改更稳”。`
  },
  {
    question: '3. LOONOOL 适合谁使用？',
    answer: `- 正在做品牌图形 / Logo 的设计团队
- 需要频繁制作产品图、电商图的运营团队
- 想降低视觉“撞脸”概率的品牌方
- 需要判断图片能否用于广告或包装的市场部门

任何想要“稳一点再用图”的人，都用得到 LOONOOL。`
  },
  {
    question: '4. Safe-to-Use 报告里面有什么？',
    answer: `Safe-to-Use 报告不是相似度报告，而是一份 “图片可用性体检”，包含：

- 视觉稳定性分析
- 潜在混淆点提醒（非法律判定）
- 独特性 / 辨识度表现
- 可视化标注（重点亮点和注意点）
- 总体可用性等级

报告的目的不是告诉你有没有撞图，而是告诉你这张图在实际使用中是否“稳健好用”。`
  },
  {
    question: '5. LOONOOL 会保存我的图片吗？',
    answer:
      '不会长期保存。原图仅用于分析，最多保留 72 小时，之后自动删除。开启“保存历史”时，保存的也只是报告和缩略图，不是原图。'
  },
  {
    question: '6. 图片可以商用吗？你们会给结论吗？',
    answer:
      '我们提供的是技术层面的可用性分析与提示，最终能否商用，还需要结合你的使用场景、地区、文案和实际业务决定。'
  },
  {
    question: '7. 支持哪些类型的图片？',
    answer: `- 支持 JPG / PNG / WebP
- 适用于 Logo、图形主视觉、包装图、电商主图等
- 不支持文档、视频、人脸识别或违法违规图像`
  },
  {
    question: '8. 需要登录才能生成报告吗？',
    answer: '需要。登录后可保存报告、同步历史记录、持续跟踪你的修改版本。'
  },
  {
    question: '9. 一张图片可以生成几种报告？',
    answer: `默认会生成 Safe-to-Use 报告。你也可以选择查看：

- 原创度报告（Originality，逐步开放）
- 行业报告（如 Amazon / Food / Beauty 等，逐步开放）`
  },
  {
    question: '10. 报告可以分享和下载吗？',
    answer: `可以。支持：

- PDF 下载
- 分享只读链接给团队、客户、供应商查看`
  },
  {
    question: '11. 如果分析失败会怎么处理？',
    answer:
      '系统会给出明确提示，你可以重新上传或稍后重试。不会影响你的其他图片或报告。'
  },
  {
    question: '12. 之后会增加哪些功能？',
    answer: `我们正在开发：

- 更多行业规范检测
- 更深入的原创度/差异度分析
- 团队协作和企业版
- 私有图库比对（企业专属）`
  }
]

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-10">
          <h1 className="mb-3 text-3xl font-bold tracking-tight">LOONOOL 常见问题（FAQ）</h1>
          <p className="text-sm text-gray-500">
            帮助你快速了解 LOONOOL 如何判断图片是否适合商用（Safe-to-Use）。
          </p>
        </header>

        <div className="space-y-8">
          {faqs.map((item) => (
            <article
              key={item.question}
              className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-gray-100"
            >
              <h2 className="mb-3 text-base font-semibold text-gray-900">{item.question}</h2>
              <div className="whitespace-pre-wrap text-sm leading-relaxed text-gray-700">
                {item.answer}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}


