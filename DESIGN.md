# Portfolio Design System

This repo uses a document-first portfolio system for a junior frontend developer portfolio at `gongpalmuhan.com`.

## Subject

- Audience: recruiters, frontend engineers, and collaborators reviewing project evidence.
- Job: help readers scan representative projects quickly, then read MDX case studies without inflated claims.
- Tone: editorial and utilitarian. It should feel like a careful project notebook, not a marketing landing page.

## Locked Tokens

All production UI colors and font-family declarations should come from `tokens.css`.

- `--color-ink`: black text. This is an explicit project preference from the owner.
- `--color-storm`: `#6A89A7`, used for primary document rules and the left rail accent.
- `--color-mist`: `#BDDDFF`, used only as a quiet wash, selection color, or hover background.
- `--color-rain`: `#88BDF2`, used for light link underlines and soft separators.
- `--color-graphite`: `#384959`, used for links, focus, and compact action controls.
- `--color-paper` and `--color-surface`: white reading backgrounds that keep the portfolio document-like.

## Typography

- Display, body, and utility type all use the same restrained stack for now: Pretendard, Inter, system UI, sans-serif.
- Headings stay roman, with normal letter spacing.
- Long-form MDX should use 16px body text and generous line-height.
- Interface labels stay short and literal.

## Layout

- Desktop: fixed 260px side rail plus a single reading column.
- Mobile: fixed top navigation and content-first layout.
- Main content max width is 860px.
- Cards, callouts, and chips use 6px radius.
- No nested cards. Project cards are repeated index items, not decorative panels.

## Signature

The distinctive element is a restrained "stormy morning document" treatment: black text, blue-grey rule lines, graphite focus/link affordances, and pale blue wash surfaces used sparingly. The palette must be balanced across storm, mist, rain, and graphite so no single color dominates.

## Copy Rules

- Do not invent metrics, outcomes, testimonials, or team claims.
- Team projects must describe the user's role without implying sole ownership.
- Project MDX content can remain draft-like when details are not finalized.
- Buttons and links should state the destination or action plainly.

## Anti-Patterns

- No giant gradient hero sections.
- No glow, orb, bokeh, 3D, fake browser chrome, or typing animation.
- No meaningless badges. Badges should be stack or project metadata.
- No generic landing-page rhythm when a document/case-study structure is enough.
- No inline hex color in components; add a token first.

## Hallmark / Frontend Design Use

- Hallmark is installed at `.codex/skills/hallmark`.
- Frontend Design is installed at `.codex/skills/frontend-design`.
- Future design work should start from this file, then update `tokens.css` and `.hallmark/log.json` when the visual system intentionally changes.
