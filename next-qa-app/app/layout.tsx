import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '产品问答中心',
  description: '基于 PRD 文档的产品问答页面（Next.js 14 + App Router）'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}



