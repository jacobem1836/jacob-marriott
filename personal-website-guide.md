# Building a Personal Website with Claude — Full Process Guide

A step-by-step workflow for creating an impactful, highly personal website using Claude, leveraging
installed MCPs and agents. Claude should ask clarifying questions at every stage rather than making
assumptions.

---

## Stage 0 — Personal Discovery

**Goal:** Build a profile rich enough that every design and copy decision is grounded in who you
actually are. Nothing should feel generic.

### Step A — Mine local files

Point Claude at your local files:

> "Scan my local files for anything that tells you about me — CV, resume, cover letters, project
> READMEs, bios, LinkedIn exports, university transcripts, notes. Start at ~/Documents/ and ~/dev/.
> Summarise what you find, then tell me what's missing."

Claude will use Glob and Read to find:
- `~/Documents/**/*.pdf` — CV, transcripts, cover letters
- `**/README.md` across project folders
- Any exported bios, portfolio drafts, or notes

### Step B — Structured interview

After scanning files, Claude should interview you one category at a time. Claude must **not** skip
this even if the files seem complete — documents rarely capture personality or goals.

Claude should ask questions across these dimensions:

| Dimension | What to ask |
|---|---|
| **Education** | What did you study and why? What coursework or project are you most proud of? What do you find genuinely interesting vs just required? |
| **Work & experience** | Internships, jobs, volunteer work. What did you *actually do*, not just your title? What problems did you solve? |
| **Projects** | For each project: what problem does it solve, what was hard about it, what are you most proud of technically or creatively? |
| **Skills & tools** | What do you reach for naturally? What are you learning right now? What do you want to be known for? |
| **Personality & voice** | How would your closest friend describe you? Are you serious, playful, dry, direct? What do you care about beyond code? |
| **Goals** | Who is this site *for*? Recruiters, collaborators, clients, curiosity? What do you want visitors to do or feel after visiting? |
| **Differentiators** | What makes you different from every other CS grad with a portfolio site? What's the one thing you want someone to remember? |
| **Taste & references** | Sites, designers, or brands you respect. What do you want yours to *feel* like? |

**Claude should ask follow-up questions freely.** Short or vague answers should be probed:
- "You said you're interested in distributed systems — is that something you want to lead with on
  the site, or keep in the background?"
- "You mentioned a project at work but didn't say what problem it solved — can you tell me more?"

### Step C — Synthesise into a brief

Once the interview is done, Claude produces:

1. **Who you are** — one clear paragraph
2. **Positioning statement** — what you do + for whom + why you
3. **Tone-of-voice guide** — 3–5 adjectives with examples of what they mean in copy
4. **Content inventory** — list of everything we have to work with (projects, bio, photos, links)
5. **Open questions** — anything still unclear that would affect design or content decisions

Claude should present this brief and ask:
> "Does this accurately represent you? Is there anything missing or wrong?"

Do not proceed to Stage 1 until the brief is confirmed.

---

## Stage 1 — Direction & Design System

**Goal:** Pick a real, specific visual direction. Do not default to generic minimal or dark mode.

### Step A — Pick a direction

Claude should not suggest a direction without asking first:

> "Based on your brief, here are three visual directions that could fit you: [X, Y, Z]. Which
> resonates, or do you have something else in mind?"

Worthwhile directions to consider:
- Editorial / magazine
- Neo-brutalism
- Dark luxury or light luxury
- Bento layout
- Swiss / International typographic
- Scrollytelling
- Retro-futurism

### Step B — Generate design system

Use **Stitch MCP** to codify the direction:
```
mcp__stitch__create_design_system   — colors, type scale, spacing tokens
mcp__stitch__generate_screen_from_text  — visualise key screens before writing code
mcp__stitch__create_project         — organise screens by section
```

Use **21st Magic MCP** for component inspiration:
```
mcp__magic__21st_magic_component_inspiration  — browse real patterns
mcp__magic__logo_search                       — wordmark or icon direction
```

### Banned patterns (your web rules enforce these)
- Default card grids with uniform spacing
- Centered headline + gradient blob hero
- Unmodified library defaults
- Safe gray-on-white with one accent colour
- Uniform radius, spacing, shadows everywhere

Every meaningful surface should demonstrate at least four of: hierarchy through scale contrast,
intentional rhythm in spacing, depth or layering, typography with character, colour used
semantically, designed hover/focus states, grid-breaking composition, texture or atmosphere,
motion that clarifies flow.

---

## Stage 2 — Content Inventory & Copy

**Goal:** Have real content ready before writing any code.

Claude should ask:
> "Do you have copy written for any sections, or should we write it together? Which sections do you
> definitely want — hero, about, projects, contact, blog, anything else?"

For each section, Claude should ask what the *goal* of that section is before suggesting structure:
- Hero: what's the one thing a visitor should understand in 5 seconds?
- Projects: are you trying to show depth on one project or breadth across many?
- About: professional-focused or personal-focused?

All copy should be written using the tone-of-voice guide from the brief.

---

## Stage 3 — Tech Stack

Claude should ask before recommending:
> "A few quick questions before recommending a stack: Do you want a blog or CMS at some point? Do
> you have a preference for a framework? Do you want it fully static or do you need any server-side
> functionality?"

Good defaults for a personal site:
- **Next.js + Tailwind** — flexible, deploys to Vercel naturally
- **Astro** — mostly static, minimal JS, fast
- **SvelteKit** — lean and performant

Use **Context7 MCP** to pull current docs for the chosen framework:
```
mcp__plugin_ecc_context7__resolve-library-id
mcp__plugin_ecc_context7__query-docs
```

---

## Stage 4 — Build

### Scaffolding
Claude scaffolds empty files first. No boilerplate unless explicitly asked.

### Component generation
Use the **GAN harness** for iterative section-by-section building:
- `gan-planner` — spec out each section against the brief
- `gan-generator` — implement it
- `gan-evaluator` — test against visual rubric in a real browser via Playwright

Use **21st Magic** for individual components:
```
mcp__magic__21st_magic_component_builder   — generate components
mcp__magic__21st_magic_component_refiner   — iterate
```

Before generating any section, Claude should confirm:
> "For the hero, I'm planning [describe layout]. Does that match the direction you had in mind?"

### Prompting each section
Be specific. Example:
> "Build a hero section. Direction: editorial. No centered headline. Use large type contrast,
> asymmetric layout, and a subtle scroll cue. Here's the copy: [real copy from brief]."

---

## Stage 5 — Review & Quality

Run these agents in parallel once a section is built:

| Agent | Purpose |
|---|---|
| `ecc:typescript-reviewer` | Type safety, async patterns |
| `ecc:performance-optimizer` | Bundle size, CLS, image optimisation |
| `ecc:seo-specialist` | Meta tags, structured data, sitemap |
| `ecc:security-reviewer` | CSP headers, no exposed keys |
| `ecc:e2e-runner` | Key flows at 320/768/1440px breakpoints |

### Performance targets (web rules)
| Metric | Target |
|---|---|
| LCP | < 2.5s |
| CLS | < 0.1 |
| FCP | < 1.5s |
| JS bundle (gzipped) | < 150kb |
| CSS | < 30kb |

---

## Stage 6 — Deployment

**GitHub MCP** — create repo and push:
```
mcp__plugin_ecc_github__create_repository
mcp__plugin_ecc_github__push_files
```

**Vercel MCP** — deploy directly from Claude:
```
mcp__claude_ai_Vercel__deploy_to_vercel
mcp__claude_ai_Vercel__check_domain_availability_and_price
mcp__claude_ai_Vercel__get_deployment_build_logs   — if build fails
```

---

## Key Principles

### Claude should ask, not assume
At every stage, if something is unclear, Claude asks before proceeding. Common points where
assumptions go wrong:
- Visual direction — never pick one without confirmation
- Section structure — ask what the goal of each section is
- Copy tone — confirm against the brief
- Stack choice — ask about future needs before recommending

### Real content over placeholders
Generic placeholder text leads to generic layouts. Feed Claude your real bio, real project
descriptions, and real goals as early as possible.

### Iterate section by section
Build one section at a time. Test it in a real browser before moving on. Use the Stitch screens as
visual references when prompting the generator.

### The brief is the reference
Every design decision, copy choice, and layout call should be checked against the personal brief
from Stage 0. If it drifts, pull it back.

---

## Suggested First Prompts

1. `"Scan ~/Documents/ and ~/dev/ for anything about me — CV, READMEs, bios. Tell me what you find and what's missing."`
2. `"Now interview me to fill the gaps. Go one category at a time."`
3. `"Synthesise everything into a personal brief. Ask me to confirm it before we move on."`
4. `"Based on the brief, suggest three visual directions that could fit me. Don't pick one — ask me."`
5. `"Create a design system in Stitch using the direction I choose."`
6. `"Scaffold a [framework] project — empty files only."`
7. `"Build the hero section. Here's the copy: [copy]. Check the brief before suggesting a layout."`
8. `"Run a performance, SEO, and security review on what we have."`
9. `"Deploy to Vercel and set up the GitHub repo."`
