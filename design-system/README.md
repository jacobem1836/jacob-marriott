# Design System — Jacob Marriott personal site

**Direction:** Terminal editorial with IDE accents. Prose-first, confident, software-professional. IDE cues are seasoning (mono labels, section numbers like `01 / about`, backtick highlights, blinking cursor accents) — *not* fake IDE chrome.

Audience: prospective employers/recruiters. Desired action: contact Jacob or forward CV. Differentiator: communication + personability. AI in the work, not the headline.

---

## Color — cool graphite + soft terminal green

| Token | Usage |
|---|---|
| `--color-bg` | Page base (~#17191c, slight blue undertone) |
| `--color-bg-raised` | Cards, code blocks, raised surfaces |
| `--color-bg-inset` | Deepest surface — status bar, inline code bg |
| `--color-border` | Hairline dividers (one-pixel rules, section gutters) |
| `--color-border-strong` | Emphasised dividers, focus rings on muted surfaces |
| `--color-text` | Primary prose |
| `--color-text-muted` | Metadata, captions, secondary copy |
| `--color-text-dim` | Line-number gutter, tertiary labels |
| `--color-accent` | Soft terminal green — links, cursor, active states |
| `--color-accent-muted` | Secondary accent — underlines, tag borders |
| `--color-accent-bg` | Accent-on-surface wash for highlights |

**Rules:**
- Single accent. Do **not** introduce a second hue.
- Accent is for signal, not decoration — links, the cursor, the one thing you want the visitor to notice per section.
- Dark mode only at launch. Light mode is a later decision.

## Typography

- **Body + headings:** Inter (variable, 400/500/600/700)
- **Mono:** Geist Mono (400/500) — labels, section numbers (`01 / about`), tags, inline code-style highlights, status bar

### Scale

| Token | Size | Use |
|---|---|---|
| `--text-xs` | 12 | Mono labels, section numbers |
| `--text-sm` | 14 | Metadata, captions |
| `--text-base` | ~16–17 fluid | Body prose |
| `--text-lg` | ~18–20 fluid | Lead paragraphs |
| `--text-xl` | ~22–28 fluid | Sub-heads |
| `--text-2xl` | ~28–38 fluid | Section titles |
| `--text-3xl` | ~36–56 fluid | Page titles |
| `--text-hero` | ~44–96 fluid | Hero statement |

Track hero/display type tight (`--tracking-tight`). Track mono labels open (`--tracking-mono`). All-caps labels use `--tracking-caps`.

## Spacing

8px-based scale (`--space-1` … `--space-24`) plus a fluid `--space-section` for vertical rhythm between sections. Prose measure capped at `--measure-prose` (62ch).

## Radius

Small and restrained — `--radius-sm` (4px) for inline chips, `--radius-md` (6px) for cards, `--radius-lg` (10px) for prominent surfaces only. No pill shapes unless intentional.

## Motion

- `--duration-fast` (140ms) — hover, focus
- `--duration-normal` (280ms) — reveal, state change
- `--duration-slow` (520ms) — scroll-linked emphasis
- Respect `prefers-reduced-motion` (already wired in `tokens.css`)
- Animate only `transform`, `opacity`, `clip-path`. Never `width/height/top/left`.

## Signature motifs

1. **Section numbers** in mono + muted colour: `01 / about`, `02 / work`
2. **Inline highlights** with `--color-accent-bg` wash + mono font for key phrases
3. **Blinking cursor** `▍` after the hero statement (respect reduced-motion)
4. **Status-bar footer** — thin bar at page bottom with mono metadata (location, current role, last updated)
5. **Hairline rules** (`--color-border`) instead of heavy dividers

## Anti-patterns (do not ship)

- Fake file trees, tabs, or VS Code chrome
- Centered hero with gradient blob
- Card grid with uniform spacing and no hierarchy
- Default shadcn styling passed off as finished
- Second accent colour
- All-mono body copy (mono is seasoning only)
