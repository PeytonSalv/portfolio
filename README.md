# Peyton Salvant — Portfolio Site

Personal portfolio site built with Astro and MDX. Visual extension of resume for recruiting.

## Routes

| Path | Description |
|------|-------------|
| `/` | Home — intro, work history, case studies, research, contact |
| `/case-studies` | Case study index |
| `/case-studies/[slug]` | Individual case study pages |
| `/research` | Research index |
| `/research/[slug]` | Individual research pages |
| `/resume` | Resume page |
| `/contact` | Contact page |

## Content

### Case Studies

| Title | Date | Status |
|-------|------|--------|
| Gemini Sports AI Platform | July 2025 | Active |
| OpenAI Assistants Integration for Player Lookup | Nov 2025 | Active |
| Cascade Core Solutions | Aug 2023 | Active |
| Event-Driven NLP for Earnings Call Analysis | May 2024 | Deprecated |

### Research

| Title | Date | Status |
|-------|------|--------|
| Streaming UI Architecture for Data-Intensive Products | Sep 2025 | Published |
| AI-Native UI Design | Oct 2025 | Published |

## Layout

### Rail Navigation Pattern

Long-form pages (home, case studies, research) use a left rail navigation:

```
┌──────────────────────────────────────────────────┐
│  [TopNav]                                        │
├─────────┬────────────────────────────────────────┤
│ RAIL    │ CONTENT                                │
│         │                                        │
│ • Intro │ [Section content scrolls vertically]  │
│   Work  │                                        │
│   Cases │                                        │
│   ...   │                                        │
│         │                                        │
├─────────┴────────────────────────────────────────┤
│  [Footer]                                        │
└──────────────────────────────────────────────────┘
```

- Rail is fixed on desktop, collapses on mobile
- Active section highlights as user scrolls
- Scroll-position-based tracking with edge case handling

### Components

| Component | Purpose |
|-----------|---------|
| `RailLayout.astro` | Two-column layout with sticky left rail navigation |
| `BaseLayout.astro` | Global wrapper: head, TopNav, Footer |
| `TopNav.astro` | Site header with nav links |
| `Footer.astro` | Site footer |
| `Section.astro` | Scrollable section with ID for rail tracking |
| `Prose.astro` | Typography wrapper for MDX content |
| `Figure.astro` | Image/diagram with caption |
| `Kicker.astro` | Uppercase label text |
| `AbstractList.astro` | List of case studies or research entries |
| `AbstractEntry.astro` | Individual entry card |

## Diagrams

Hand-coded SVGs in `/public/figures/`:

| File | Used By | Description |
|------|---------|-------------|
| `system-architecture.svg` | Gemini Sports case study | Full platform architecture |
| `streaming-pipeline.svg` | OpenAI Assistants case study | Assistants API flow |
| `streaming-ui.svg` | Streaming UI research | WebSocket → render pipeline |
| `attention-mechanism.svg` | AI-Native UI research | Frontend architecture |
| `earnings-pipeline.svg` | Earnings Call NLP case study | Event-driven pipeline (FIG 1) |
| `nlp-analysis-flow.svg` | Earnings Call NLP case study | Streaming NLP analysis (FIG 2) |

## Styles

Vanilla CSS with design tokens. No Tailwind.

### Tokens (`src/styles/tokens.css`)

```css
--bg: #FFFFFF;
--text: #111111;
--accent: #1F3A8A;           /* Deep indigo, used sparingly */
--accent-soft: rgba(31, 58, 138, 0.06);

--font-heading: 'Inter', sans-serif;
--font-body: 'Source Serif 4', serif;
--font-mono: 'IBM Plex Mono', monospace;

--rail-width: 140px;
--content-max: 640px;
```

### Global Styles (`src/styles/global.css`)

Base typography, links, code blocks, tables, responsive breakpoints.

## File Structure

```
src/
├── components/
│   ├── RailLayout.astro      # Left rail layout
│   ├── BaseLayout.astro      # Global wrapper
│   ├── TopNav.astro
│   ├── Footer.astro
│   ├── Section.astro
│   ├── Prose.astro
│   ├── Figure.astro
│   ├── Kicker.astro
│   ├── AbstractList.astro
│   └── AbstractEntry.astro
├── content/
│   ├── case-studies/
│   │   ├── gemini-sports-ai-platform.mdx
│   │   ├── rag-scouting-pipeline.mdx
│   │   ├── cascade-core-solutions.mdx
│   │   └── earnings-call-nlp.mdx
│   └── research/
│       ├── streaming-ui-architecture.mdx
│       └── ai-native-ui-design.mdx
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro
│   ├── resume.astro
│   ├── contact.astro
│   ├── case-studies/
│   │   ├── index.astro
│   │   └── [...slug].astro
│   └── research/
│       ├── index.astro
│       └── [...slug].astro
└── styles/
    ├── tokens.css
    └── global.css

public/
└── figures/
    ├── system-architecture.svg
    ├── streaming-pipeline.svg
    ├── streaming-ui.svg
    ├── attention-mechanism.svg
    ├── earnings-pipeline.svg
    └── nlp-analysis-flow.svg
```

## Commands

```sh
npm install          # Install dependencies
npm run dev          # Start dev server at localhost:4321
npm run build        # Build to ./dist/
npm run preview      # Preview production build
```

## Stack

- **Framework**: Astro
- **Content**: MDX with frontmatter
- **Styling**: Vanilla CSS with design tokens
- **Fonts**: Inter, Source Serif 4, IBM Plex Mono
- **Diagrams**: Hand-coded SVG
