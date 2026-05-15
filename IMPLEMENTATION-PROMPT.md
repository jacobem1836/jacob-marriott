# jacobmarriott.com – Implementation Prompt

> Paste this into Claude Code at the start of a dedicated session for this work.
> Read BRIEF.md first, then execute the changes below.

---

## Context

`jacobmarriott.com` is a live Astro site. It's a single scrolling page with sections: Hero, About, Work, Experience, Contact. The design is intentional – typography-led, monospace section labels, muted palette, minimal. **Do not redesign it.** All changes must feel like natural extensions of the existing aesthetic.

The site is currently framed as a CV for recruiters. We are broadening it to serve multiple audiences – employers, consulting clients, and web dev clients – by making `jacobmarriott.com` the hub and adding two subpages.

Read the full brief at `BRIEF.md` before making any changes.

---

## Changes Required

### 1. Update Hero copy

**File:** `src/components/Hero.astro`

The hero currently reads:
> "Jacob Marriott / software engineering student at UQ."

Update the subtitle line to reflect that Jacob is a student *and* a working professional – not just a student. Something like:

> "software engineer, consultant & UQ student."

Or similar – keep it short, lowercase, in the same style. The point is it shouldn't read as purely a student anymore.

Update the `hero__meta` line. Currently it says "available for 2026/27 internships". Add a brief secondary signal – something like a second item that hints at consulting/freelance work. Example:

```
Brisbane · Queenstown · available for 2026/27 internships · taking consulting clients
```

Keep the same formatting (dot separators, monospace, lowercase).

Update the lede paragraph to broaden the framing. Currently it mentions "a hospitality operator running end-of-service, a record collector chasing a second-hand pressing." It should also hint at the consulting and AI work. Preserve the voice – warm, specific, first person. Do not rewrite from scratch; extend what's there.

---

### 2. Add AI Consulting as a work entry

**File:** `src/components/Work.astro`

Add a new project entry to the `projects` array. Insert it as the new `01` (first/headline entry), pushing the existing items down.

```ts
{
  index: "01",
  title: "AI Systems Consulting",
  status: "active – AU & NZ clients",
  body: "I set up personalised AI systems for professionals and businesses – structured Claude Code environments, custom skills, knowledge graphs, and automation workflows, tailored to how they actually work. Current clients include a barrister and a travel industry consultant. The goal is always the same: an AI setup that knows you, not just a chat window.",
  tags: ["claude code", "ai systems", "automation", "graphify"],
  href: "/consult",
}
```

Adjust the existing item indexes to `02`, `03`, `04`, `05` accordingly.

---

### 3. Add navigation links to subpages

**File:** `src/layouts/Base.astro` (or wherever the nav/header lives – check first)

Add two navigation items pointing to the subpages:
- `/consult` – label: `consult`
- `/web` – label: `web`

Match the existing nav style exactly – don't introduce new classes or visual patterns.

---

### 4. Create `/consult` subpage

**File:** `src/pages/consult.astro`

This page is for prospective consulting clients. Keep the same layout, design system, and aesthetic as the main site – use the same Base layout, same CSS variables, same section label style.

Content:

**Section 1 – What I do**
Heading label: `01 / what i do`

Body copy (adapt voice to match the site):
> I build personalised AI systems for professionals and business owners – structured setups that know your work, your clients, and how you operate. Not just a chat window. A real working layer on top of your day.
>
> This means a Claude Code environment built around you: a profile that persists across every session, custom shortcuts for the tasks you repeat, a knowledge graph that maps your documents and finds connections, and an automation roadmap for what to tackle next.

**Section 2 – Who it's for**
Heading label: `02 / who it's for`

Body:
> Professionals who spend too much time on things that should be faster – drafting, summarising, researching, preparing. Solo operators and small teams. People who've used ChatGPT through a browser and want something that actually knows them.
>
> Current clients include a barrister and a travel industry consultant. I work with clients across Australia and New Zealand.

**Section 3 – How it works**
Heading label: `03 / how it works`

Present as a numbered list in the same style as the existing site (not a table, not cards – text-based):

1. **Fit Check** – free, 15 minutes. I ask about your work, your tools, and what takes too long. We figure out if this is worth doing.
2. **Build** – one focused session where I set up your full AI environment: profile, rules, skills, knowledge graph. You leave with a working system.
3. **Check-in** – one week later I review what you've actually used, tune what isn't working, and add anything that emerged.
4. **Retainer (optional)** – monthly support, new skills as your work evolves, graph updates, advanced automations.

**Section 4 – Get in touch**
Heading label: `04 / get in touch`

> If this sounds relevant, email me at jacobemarriott@icloud.com or use the contact form on the main site. Happy to have a quick call first.

Link back to main site: `← jacobmarriott.com`

---

### 5. Create `/web` subpage

**File:** `src/pages/web.astro`

This page is for prospective web dev clients – primarily hospitality businesses. Same layout, design system, aesthetic.

Content:

**Section 1 – What I build**
Heading label: `01 / what i build`

Body:
> Custom websites and operational dashboards for hospitality businesses – built to actually work for how you run things, not a template with your logo swapped in.
>
> I come from hospitality. Four years in professional kitchens, currently Chef de Partie alongside software engineering work. I know what end-of-service looks like, what a Sunday night reconciliation feels like, and what information actually matters when you're running a venue.

**Section 2 – Work**
Heading label: `02 / work`

Reference the Chef Jon Dashboard (already on the main site) and note the `web.jacobmarriott.com` site as an example of the web work. Link to `https://web.jacobmarriott.com`.

**Section 3 – Get in touch**
Heading label: `03 / get in touch`

Simple: email + link back to main site.

---

### 6. Hero meta – update internship availability

Once the subpages exist, update the `hero__meta` in `Hero.astro`:

```
Brisbane · Queenstown · available for 2026/27 internships · <a href="/consult">consulting</a> · <a href="/web">web</a>
```

Style the links to match the existing meta text – same font, same case, no underline by default, subtle accent on hover.

---

## What NOT to do

- Do not redesign anything. CSS changes should be additions only, not modifications to existing rules.
- Do not change the color palette, typography scale, or spacing tokens.
- Do not add new visual patterns (cards, grids, icons, illustrations) that don't already exist on the site.
- Do not change the Work section layout for existing projects.
- Do not alter the About, Experience, or Contact sections.
- Do not introduce Tailwind, new component libraries, or additional dependencies.
- Do not rename or restructure existing files.

---

## Verification

After all changes, verify:
- [ ] Main page still looks identical except for hero copy and the new first work entry
- [ ] `/consult` loads, matches site aesthetic, all sections present
- [ ] `/web` loads, matches site aesthetic, all sections present
- [ ] Nav links to both subpages work
- [ ] No broken links on any page
- [ ] Mobile layout is correct on all three pages (test at 375px)
- [ ] Run `npm run build` – zero errors

---

## Files to touch

| File | Change |
|---|---|
| `src/components/Hero.astro` | Update hero copy, subtitle, meta |
| `src/components/Work.astro` | Add consulting entry, reindex existing |
| `src/layouts/Base.astro` | Add nav links (check nav exists here first) |
| `src/pages/consult.astro` | Create new |
| `src/pages/web.astro` | Create new |

No other files should need touching.
