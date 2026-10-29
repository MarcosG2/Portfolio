# Design system — incumbent (refinement baseline)

## Mode

**Experience** — projects and craft lead; chrome stays quiet.

## Scene

Late-evening desk work: deep slate ground, cool blue-violet ambient light, high legibility for long reading.

## Color

| Role | Value |
|------|--------|
| Ground | `#0f172a` (slate-900) |
| Surface | `slate-800/50`–`slate-900/40` |
| Primary text | `slate-100` / white |
| Accent | blue-500–600 (`#3b82f6`, `#2563eb`) |
| Secondary copy | tint from accent (`#87aada`, `#a2c4fd`) — not neutral gray alone |
| Border | `slate-700` / `slate-800` |

## Typography roles

| Role | Token / class | Use |
|------|----------------|-----|
| Display | `--text-display`, `.type-display` | Hero name |
| Role line | `--text-role`, `.type-role` | Job title under name |
| Section | `--text-section`, `.section-title` | H2 sections |
| Lead | `--text-lead` | Short intros |
| Body | `--text-body`, 1.7 leading | Default |
| Caption | `.type-caption`, `--color-copy` | Descriptions |
| Meta | `.type-meta` | Labels, dates, overlines |

- Body prose: `text-wrap: pretty`, max ~70ch
- Headings: `text-wrap: balance`
- Onest variable 400–700, `font-display: swap`

## Motion

- One entrance on hero load (`fade-up`, ~600ms, ease-out)
- Respect `prefers-reduced-motion`
- No identical staggered reveal on every section

## Components

- Fixed nav with readable blur over scroll (functional, not decorative glass)
- Projects: **showcase rows** for featured/WIP; **compact list** for the rest (avoid uniform card grid)
- Skills: tagged chips on dark surfaces (consistent with project tags)
- Focus: visible rings (`blue-400`), themed selection and scrollbars

## Bans (Impeccable craft floor)

- No kickers above the hero name
- No decorative gradient halos without depth
- No gradient text

## Assets pending

- Project screenshots under `/public/projects/`
- CV PDF at `/public/cv-marcos-guerrero.pdf`
