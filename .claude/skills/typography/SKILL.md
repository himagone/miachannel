---
name: typography
description: タイポグラフィ（フォントサイズ、行間、文字間、ウェイト、階層設計）に関する設計・修正・レビューを行うスキル。フォントサイズの設定、テキスト階層の構築、可読性の改善、タイプスケールの選定に使う。「文字が読みにくい」「フォントサイズを見直したい」「見出しと本文のバランスが悪い」「タイポグラフィを整えたい」「テキストの階層がわかりにくい」といった要求のほか、UI実装時にfont-size、line-height、letter-spacing、font-weightの値を決める場面でも必ずこのスキルを参照すること。
---

# タイポグラフィ設計ガイドライン

> **目的**: UI実装時にフォントサイズ・行間・文字間・ウェイトを一貫性のある形で設定するためのルール集。
> **対象**: Web / モバイルアプリケーションのUI（特にカード型UI、チャットUI、ダッシュボード）。
> **根拠**: WCAG 2.2、Material Design 3 Typography、Apple Human Interface Guidelines、実務上のベストプラクティスに基づく。

---

## 1. フォント階層の原則

フォントサイズだけで、情報の優先度が視覚的に判別できなければならない。

### 悪い例と良い例

**悪い階層（避けるべきパターン）:**
- Headline 26px / Subheadline 11px / Body 12px / Button 18px
- 問題: Headline→Subheadlineの落差が大きすぎ（比率2.36倍）、SubheadlineとBodyの差がほぼない（11→12）ため階層が崩壊。Buttonが不釣り合いに大きい。

**良い階層:**
- Headline 24px / Subheadline 16px / Body 14px / Button 16px
- 各階層間の比率が均等に近く、段階的にサイズが下がるため視線の流れが自然。

### 階層設計の4原則

1. **明確なフォント階層を設定する (Set a Clear Font Hierarchy)**
   - サイズだけで見出し・小見出し・本文・補足の区別がつくこと
   - 隣接する階層間のサイズ比は最低1.2倍以上を確保する

2. **ボタンテキストのバランスを取る (Balance Button Text)**
   - ボタンのフォントサイズはBody以上、Headline未満に収める
   - ボタンが本文より目立ちすぎない、かつ読めないほど小さくならない

3. **可読性を保つ (Keep It Readable)**
   - Body textの最小サイズは14px（モバイルでも同様）
   - Caption/補足テキストでも12px未満にしない

4. **一貫したスケーリングを使う (Use Consistent Scaling)**
   - タイプスケール（後述）を採用し、恣意的なサイズ値を避ける
   - プロジェクト内で同じスケールを統一して使う

---

## 2. タイプスケール

フォントサイズを感覚で決めず、数学的な比率（スケール）に基づいて決定する。

### 推奨スケール比率

| スケール名 | 比率 | 特徴 | 適用場面 |
|---|---|---|---|
| Minor Third | 1.200 | 差が穏やか、密度が高いUI向き | ダッシュボード、管理画面、チャットUI |
| Major Third | 1.250 | 汎用的でバランスが良い | 一般的なWebアプリ |
| Perfect Fourth | 1.333 | メリハリが出る | ランディングページ、ブログ |
| Golden Ratio | 1.618 | 階層が非常に明確 | ヒーローセクション、プレゼン資料 |

### スケール適用の具体例（Major Third / 比率1.250、Base 16px）

```
Caption:     12px  (16 ÷ 1.25 ÷ 1.06 ≒ 12, 実用的に丸め)
Body:        16px  (base)
Subheadline: 20px  (16 × 1.25)
Headline:    25px  (16 × 1.25²)
Display:     31px  (16 × 1.25³)
```

実装時はこの計算値をそのまま使うのではなく、4pxグリッド（12, 16, 20, 24, 28, 32...）に丸めて使うとレイアウトとの整合性が取れる。

---

## 3. line-height（行間）

フォントサイズに応じてline-heightを調整する。大きい文字ほどline-heightの比率は小さくて良い。

| フォントサイズ | line-height比率 | 例 |
|---|---|---|
| 12–14px (Caption/Body小) | 1.5–1.6 | 14px → line-height: 22px |
| 16–20px (Body/Subheadline) | 1.4–1.5 | 16px → line-height: 24px |
| 24–32px (Headline) | 1.2–1.3 | 24px → line-height: 30px |
| 36px以上 (Display) | 1.1–1.2 | 48px → line-height: 56px |

**日本語の場合**: 英語より行間を広めに取る。Body textでline-height 1.7–1.8程度が読みやすい。混植（日英混在）の場合はline-height 1.6–1.75を目安にする。

---

## 4. letter-spacing（文字間）

| 用途 | letter-spacing | 備考 |
|---|---|---|
| Display/大見出し | -0.02em ~ -0.01em | 大きい文字は詰めると締まる |
| Headline | -0.01em ~ 0 | 微調整程度 |
| Body | 0 (デフォルト) | 基本は触らない |
| Caption/小さい文字 | 0.01em ~ 0.03em | 小さい文字は広げると読みやすい |
| ボタン/ラベル（大文字） | 0.05em ~ 0.1em | 全大文字は広げないと潰れる |

**日本語の場合**: 本文のletter-spacingは0.04em–0.08em程度が読みやすい。見出しは0–0.04em。

---

## 5. font-weight（太さ）

ウェイトは階層の補助として使う。サイズだけで階層が伝わらない場合にウェイトで補強する。

### ウェイト割り当ての基本パターン

```
Display/Hero:  700 (Bold) or 800 (ExtraBold)
Headline:      700 (Bold)
Subheadline:   600 (SemiBold)
Body:          400 (Regular)
Caption:       400 (Regular)
Button:        600 (SemiBold) or 700 (Bold)
Label:         500 (Medium)
```

### ルール
- 1つの画面で使うウェイトは3種類以内に抑える（例: 400, 600, 700）
- Regular(400)とBold(700)の2種類だけでも十分機能する
- Light(300)以下は小さいサイズでは可読性が落ちるため、Display以上でのみ使用する
- ウェイトだけで階層を作ろうとしない。サイズが主、ウェイトは従。

---

## 6. レスポンシブタイポグラフィ

画面幅に応じてフォントサイズを段階的に調整する。

### CSS clamp()の推奨パターン

```css
/* Body */
font-size: clamp(14px, 1rem + 0.2vw, 18px);

/* Headline */
font-size: clamp(20px, 1.5rem + 1vw, 36px);

/* Display */
font-size: clamp(28px, 2rem + 2vw, 56px);
```

### ブレークポイント別の調整目安

| 要素 | ~640px (モバイル) | 641–1024px (タブレット) | 1025px~ (デスクトップ) |
|---|---|---|---|
| Body | 14–16px | 16px | 16–18px |
| Subheadline | 16–18px | 18–20px | 20px |
| Headline | 20–24px | 24–28px | 28–32px |

---

## 7. アクセシビリティ要件

WCAG 2.2に基づく最低要件。

- **コントラスト比**: 通常テキスト（18px未満）は4.5:1以上、大きいテキスト（18px以上Bold、または24px以上Regular）は3:1以上
- **最小フォントサイズ**: 操作可能なテキスト（リンク、ボタン）は最低14px
- **リサイズ対応**: px固定ではなくrem/emを使い、ユーザーのブラウザ設定（フォントサイズ拡大）を阻害しない
- **行の長さ**: 1行あたり45–75文字（英語）、20–40文字（日本語）が読みやすい。max-widthで制御する

---

## 8. 実装チェックリスト

コードレビューやタイポグラフィ修正時に確認する項目。

### 階層
- [ ] 隣接する階層間のフォントサイズ比が1.2倍以上あるか
- [ ] サイズだけ（色やウェイトなしで）で階層が読み取れるか
- [ ] SubheadlineとBodyのサイズが近すぎないか（最低2px以上の差）
- [ ] Buttonのサイズが他要素と不釣り合いに大きく/小さくなっていないか

### 可読性
- [ ] Body textが14px未満になっていないか
- [ ] line-heightがフォントサイズに応じて適切に設定されているか
- [ ] 1行の文字数が長すぎないか（max-widthまたはch単位で制御）
- [ ] コントラスト比がWCAG要件を満たしているか

### 一貫性
- [ ] フォントサイズがタイプスケールまたはデザイントークンに基づいているか
- [ ] プロジェクト内で恣意的なサイズ値（13px, 17px, 22px等）が使われていないか
- [ ] 同じ役割のテキストに異なるサイズが適用されていないか
- [ ] font-weightの種類が3つ以内に収まっているか

### 技術的
- [ ] CSS変数またはデザイントークンで一元管理されているか
- [ ] rem/emが使われているか（px固定になっていないか）
- [ ] レスポンシブ対応（clamp, media query等）が適切か
- [ ] 日英混植の場合、line-heightが日本語に合わせて調整されているか

---

## 9. CSS変数テンプレート

プロジェクトに適用する際の出発点。値はタイプスケールとプロジェクト要件に応じて調整する。

```css
:root {
  /* Type Scale (Major Third, base 16px) */
  --font-size-caption: 0.75rem;    /* 12px */
  --font-size-body:    1rem;       /* 16px */
  --font-size-sub:     1.25rem;    /* 20px */
  --font-size-h3:      1.5rem;     /* 24px */
  --font-size-h2:      1.875rem;   /* 30px */
  --font-size-h1:      2.25rem;    /* 36px */
  --font-size-display: 3rem;       /* 48px */

  /* Line Heights */
  --leading-tight:   1.2;
  --leading-snug:    1.3;
  --leading-normal:  1.5;
  --leading-relaxed: 1.6;
  --leading-loose:   1.75; /* 日本語向け */

  /* Font Weights */
  --weight-regular:  400;
  --weight-medium:   500;
  --weight-semibold: 600;
  --weight-bold:     700;

  /* Letter Spacing */
  --tracking-tight:  -0.01em;
  --tracking-normal:  0;
  --tracking-wide:    0.03em;
  --tracking-wider:   0.06em;
}
```

### Tailwind CSS設定の場合

```js
// tailwind.config.js
module.exports = {
  theme: {
    fontSize: {
      'caption': ['0.75rem', { lineHeight: '1.5' }],
      'body':    ['1rem',    { lineHeight: '1.5' }],
      'sub':     ['1.25rem', { lineHeight: '1.4' }],
      'h3':      ['1.5rem',  { lineHeight: '1.3' }],
      'h2':      ['1.875rem',{ lineHeight: '1.25' }],
      'h1':      ['2.25rem', { lineHeight: '1.2' }],
      'display': ['3rem',    { lineHeight: '1.1' }],
    },
  },
}
```