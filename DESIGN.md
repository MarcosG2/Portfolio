# Design system — zinc / cyan

## Mode

**Experience** — projects and craft lead; chrome stays quiet.

## Scene

Late-evening desk work: deep zinc ground, cyan accent for key actions, high legibility for long reading.

## Color

| Role | Token / value |
|------|----------------|
| Ground | `--color-ground` `#09090b` |
| Surface | `--color-surface` `#18181b` |
| Primary text | `--color-ink` `#f4f4f5` |
| Muted text | `--color-ink-muted` |
| Meta | `--color-meta` |
| Accent | `--color-signal` `#06b6d4` |
| Border | `--color-line` `#65656d` (≥3:1 UI contrast) |

## Typography roles

| Role | Token / class | Use |
|------|----------------|-----|
| Display | `--text-display`, `.type-display` | Hero name |
| Role line | `--text-role`, `.type-role` | Job title under name |
| Section | `--text-section`, `.section-title` | H2 sections |
| Subsection | `.type-subsection` | H3 blocks |
| Project title | `.type-project-title` | Case study headings |
| Lead | `--text-lead`, `.type-lead` | Short intros |
| Body | `--text-body`, 1.72 leading | Default |
| Caption | `.type-caption` | Descriptions |
| Meta | `.type-meta` | Labels, dates, overlines |

- Body prose: `text-wrap: pretty`, max ~68ch
- Headings: `text-wrap: balance`
- Plus Jakarta Sans 400–700, `font-display: swap` (loaded in `index.html`)

## Motion

- One entrance on hero load (`fade-up`, ~650ms, ease-out)
- Respect `prefers-reduced-motion`
- No identical staggered reveal on every section

## Components

- Fixed nav with light blur over scroll (functional, not decorative glass)
- Projects: **showcase rows** for featured; **compact list** for archive; status labels only in the index grid
- Skills: `.chip` on dark surfaces
- Buttons: `.btn-primary`, `.btn-secondary`
- Forms: `.field-input`, `.field-label`
- Focus: `.focus-ring` with `--color-signal`

## Bans (Impeccable craft floor)

- No kickers above the hero name
- No decorative gradient halos or glow shadows on CTAs
- No gradient text
- No duplicate status/featured badges between index and case blocks

## Assets pending

- Project screenshots under `/public/projects/`
- CV PDF at `/public/cv-marcos-guerrero.pdf`
