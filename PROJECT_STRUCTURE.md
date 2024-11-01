## Project Structure ✨

<!-- START_STRUCTURE -->
```
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING .md
├── Dockerfile
├── LICENSE
├── PROJECT_STRUCTURE.md
├── README.md
├── app/
│   ├── (auth)/
│   │   ├── sign-in/
│   │   │   └── [[...sign-in]]/
│   │   │       └── page.tsx
│   │   └── sign-up/
│   │       └── [[...sign-up]]/
│   │           └── page.tsx
│   ├── (context)/
│   │   └── TotalUsageContext.tsx
│   ├── (data)/
│   │   └── Template.tsx
│   ├── dashboard/
│   │   ├── _components/
│   │   │   ├── Header.tsx
│   │   │   ├── SearchSection.tsx
│   │   │   ├── SideNav.tsx
│   │   │   ├── TemplateCard.tsx
│   │   │   ├── TemplateListSection.tsx
│   │   │   └── UsageTrack.tsx
│   │   ├── billing/
│   │   │   └── page.tsx
│   │   ├── content/
│   │   │   └── [template-slug]/
│   │   │       ├── _components/
│   │   │       │   ├── FromSection.tsx
│   │   │       │   └── OutputSection.tsx
│   │   │       └── page.tsx
│   │   ├── history/
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── favicon.ico
│   ├── fonts/
│   │   ├── GeistMonoVF.woff
│   │   └── GeistVF.woff
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   └── page.tsx
├── components/
│   ├── ChatbaseEmbed.tsx
│   ├── public-footer.tsx
│   ├── public-header.tsx
│   └── ui/
│       ├── background-beams.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── sheet.tsx
│       ├── textarea.tsx
│       └── typewriter-effect.tsx
├── components.json
├── docker-compose.yml
├── drizzle.config.js
├── global.d.ts
├── lib/
│   └── utils.ts
├── middleware.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public/
│   └── logo.svg
├── repo_structure.txt
├── tailwind.config.ts
├── tsconfig.json
└── utils/
    ├── AiModal.tsx
    ├── db.tsx
    └── schema.tsx
```
<!-- END_STRUCTURE -->