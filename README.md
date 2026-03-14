# TARUKOTO Astro minimal sample

最小構成:
- Top
- About
- Works

## 使い方
1. Node.js をインストール
2. このフォルダで `npm install`
3. `npm run dev`
4. ブラウザで `http://localhost:4321`

## Works の更新方法
- `src/content/works/*.md`

Markdown ファイルを追加すると、一覧ページと詳細ページに反映されます。

## 公開の流れ
1. GitHub に push
2. Vercel または Cloudflare Pages と連携
3. ビルドコマンド: `npm run build`
4. 出力先: `dist`
