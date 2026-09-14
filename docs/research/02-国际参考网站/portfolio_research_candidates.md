# Portfolio Research Candidates

> Access date: 2026-09-12.
> Scores are research scores for this project, not ratings from the source sites. Compare entries only within the same category.

## Scoring

| Dimension | Weight | Question |
| --- | ---: | --- |
| Long-term extensibility | 30 | Can a new section reuse tokens, components, schemas, and page patterns? |
| Audience fit | 20 | Can visitors understand identity, ability, and collaboration value? |
| Content capacity | 20 | Can it hold projects, writing, experience, tags, media, and updates? |
| Anti-template fit | 15 | Can it avoid warm serif templates, vague copy, and decorative excess? |
| Current technical fit | 15 | Can it live in the current static Astro project? |

A means official page, repository, or live page. B means an independent case or workflow. C means a community source. D means an inference that needs further testing.

## 1. Structure and content architecture

| Rank | Candidate | Link | Subscores | Total | Evidence | Useful for | Main limitation |
| ---: | --- | --- | --- | ---: | --- | --- | --- |
| 1 | Astro Content Collections | [Docs](https://docs.astro.build/en/guides/content-collections/) | 30/16/20/15/15 | 96 | A | Content schemas, type checking, queries, routes, and new sections | Architecture guidance without a visual system |
| 2 | hmbldv/portfolio-template | [GitHub](https://github.com/hmbldv/portfolio-template) | 29/18/20/13/14 | 94 | A | Project versions, commit changelog, Wiki, TOC, Mermaid, and collections | README feature list does not prove maintenance quality |
| 3 | SDBurt/astro-portfolio | [GitHub](https://github.com/SDBurt/astro-portfolio) | 28/18/18/14/15 | 93 | A | Vanilla CSS tokens, 4px spacing, project/blog/work collections | Small repository and community footprint; claims need independent checks |
| 4 | Astro Kami | [GitHub](https://github.com/automann/astro-kami) | 28/16/20/11/15 | 90 | A | Bilingual content, archives, tags, Showcase, RSS, Pagefind, Chinese typography | Writing-first editorial style needs to be separated from the site structure |
| 5 | Astro Rocket | [Theme page](https://astro.build/themes/details/astro-rocket/) | 27/16/19/10/15 | 87 | A | Components, themes, search, blog, project pages, and static organization | A complete theme can also produce template sameness |
| 6 | Kepler | [GitHub](https://github.com/kpab/astro-kepler) | 29/15/19/8/14 | 85 | A | One token system across blog, portfolio, landing, search, and RSS | Navy, orange, hard shadows, and orbit motif are not a default visual direction |
| 7 | lonestone/astro-template | [GitHub](https://github.com/lonestone/astro-template) | 27/14/20/10/13 | 84 | B | Multiple content types, MDX/YAML, TOC, and documentation pages | May pull a personal site toward product documentation |
| 8 | APortfolio | [GitHub](https://github.com/damien220/APortfolio) | 24/14/14/15/15 | 82 | A/C | Markdown project content, plain CSS, small vanilla scripts, and zero-runtime thinking | Mainly project-focused; section extensibility needs testing |

Astro Content Collections is an architectural reference, not an installable template. SDBurt is stronger for tokens and content folders; hmbldv is stronger for project history and version records.

## 2. Components and behavior

| Rank | Candidate | Link | Reference score | Evidence | Useful for | Check before adoption |
| ---: | --- | --- | ---: | --- | --- | --- |
| 1 | Starwind UI | [Docs](https://starwind.dev/docs/getting-started/) / [GitHub](https://github.com/starwind-ui/starwind-ui) | 84 | A | Source-first ownership, Astro support, editable components, primitive/runtime layers, themes, and states | Current version, Tailwind dependency, bundle cost, default motion, and visual distinctiveness |
| 2 | Web Awesome | [Website](https://webawesome.com/) | 76 | A | Web Components, HTML/CSS/JS, themes, layout, forms, navigation, and localization | Default styling, Shadow DOM behavior, free/Pro boundary, and Astro integration |
| 3 | React Aria | [Website](https://react-aria.adobe.com/) | 70 | A/C | Keyboard behavior, focus, accessibility, and internationalization | Current project has no React integration |
| 4 | Radix Primitives | [Website](https://www.radix-ui.com/primitives) | 68 | A | Unstyled composition, gradual adoption, and behavior separation | React-only; needs an Astro island boundary |
| 5 | shadcn/ui | [Website](https://ui.shadcn.com/) | 61 | A/C | Copying component source into the project and retaining modification rights | Default look can converge with common AI-generated sites |
| 6 | Headless UI / Base UI | [Headless UI](https://headlessui.com/) / [Base UI](https://base-ui.com/) | 60 | A/C | Unstyled components, composition APIs, and state behavior | React/Vue dependency and current Astro integration cost |

## 3. Design-system and workflow cases

| Rank | Candidate | Link | Score | Evidence | Useful for | Main limitation |
| ---: | --- | --- | ---: | --- | --- | --- |
| 1 | Ronald Lopez Portfolio Design System | [Case](https://www.ronglopez.com/projects/ronglopez-portfolio.html) | 91 | B | Research, principles, tokens, components, accessibility, Storybook, and page patterns as one process | Stack is not Astro; method needs an Astro/CSS translation |
| 2 | Andrew Aarestad Design Process | [Case](https://www.andrewaarestad.com/design-process) | 79 | B | Brand foundation, visual system, mood boards, feedback, implementation, and deployment | Less evidence about content schemas |
| 3 | Jason Tello Style Guide | [Case](https://jasontello.com/design-system.html) | 75 | B | Recording tokens, components, layout, and interaction boundaries | A checklist and method reference, not an Astro implementation |

## 4. Specific site patterns

| Rank | Site | Link | Score | Evidence | Extractable pattern | Do not copy directly |
| ---: | --- | --- | ---: | --- | --- | --- |
| 1 | bueno.fyi | [Site](https://bueno.fyi/) | 83 | A | Narrow directory, categories, search, bookmarks, and long lists | Strong directory model, weak project narrative |
| 2 | Robert Feasley | [Site](https://rfeasley.io/) | 80 | A | Projects, strategic context, impact, and CV in one system | Detail pages and long-term writing still need checking |
| 3 | Specia1ne | [Site](https://specia1ne.com/) | 75 | A | Continuous structural axis, numbered navigation, service/process sections, and scroll continuity | One-page narrative makes new content harder to add |
| 4 | Justin Lerner | [Site](https://jlern.com/) | 72 | A | Tiled grid, year archive, images mixed with projects | Experimental layout and motion need mobile testing |
| 5 | Tiffany Devos | [Site](https://tiffanydevos.be/) | 70 | A | Whitespace, grid, and non-warm graphic language | Identity depends on personal graphic assets |
| 6 | Ayush Halder | [Site](https://www.thoughtsofayush.com/) | 68 | B | Manifesto, bio, project categories, experience, awards, and client row | Bento, parallax, and video background cost more to maintain |

## 5. Discovery sources

These sources help collect samples and local patterns. They are not final architectures.

| Source | Link | Use |
| --- | --- | --- |
| One Page Love Personal | [Category](https://onepagelove.com/genre/personal) | Personal sections, functions, and live links |
| SiteInspire Personal | [Category](https://www.siteinspire.com/websites/category/personal) | Grid, typography, and visual directions |
| Minimal Gallery | [Website](https://minimal.gallery/) | Minimal, Blog, Editorial, and Research directions |
| Siiimple | [Website](https://siiimple.com/) | Whitespace, typography, and restraint |
| PersonalWebsites.org | [Website](https://personalwebsites.org/) | Variety of real personal-site structures |
| Land-book | [Website](https://land-book.com/) | Websites, Sections, Mobile, and Motion |
| Godly | [Website](https://godly.design/sites/) | Non-template motion and visual experiments |
| Mobbin | [Website](https://mobbin.com/) | Real product flows and control states; some content may require an account |

## Next gate

1. Use Astro Content Collections, SDBurt, and hmbldv to study content models.
2. Use Ronald Lopez to study how tokens, components, and page patterns connect.
3. Test Starwind UI against native Astro/CSS components.
4. Study bueno.fyi, Robert Feasley, and Specia1ne for directory, evidence narrative, and local interaction.
5. Study Astro Kami for long-form writing, Chinese typography, archives, and search.

For each selected candidate, inspect a home page, index page, detail page, mobile behavior, keyboard focus, reduced motion, license, dependency activity, and build cost.
## Page-level verification status

| Candidate | Current status |
| --- | --- |
| Astro Kami | Home and article detail checked through public page and mobile viewport; navigation, tags, code/math blocks, sharing, previous/next post, and skip link observed |
| Kepler | Work index checked through public page and mobile viewport; category filter clicked and result set changed |
| Starwind UI | Component overview checked through public page and mobile viewport; component categories, source-copy installation, class overrides, mobile menu dialog, and skip link observed |
| SDBurt | Home, projects index, Astro project detail, and mobile viewport checked through public page |
| Ronald Lopez | Case page checked; design strategy, token foundations, accessibility, components, page patterns, and Storybook link observed |
| hmbldv | Repository README checked; no live demo link found in the README during this pass |

The checks above establish page structure and visible behavior. They do not establish local build success, complete keyboard traversal, reduced-motion behavior under emulation, or license compatibility.