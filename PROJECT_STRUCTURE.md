## Project Structure ✨

<!-- START_STRUCTURE -->
```
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING .md
├── Dockerfile
├── LICENSE
├── PROJECT_STRUCTURE.md
├── README.md
├── SECURITY.md
├── app/
│   ├── (auth)/
│   │   ├── sign-in/
│   │   │   └── [[...sign-in]]/
│   │   │       └── page.tsx
│   │   └── sign-up/
│   │       └── [[...sign-up]]/
│   │           └── page.tsx
│   ├── (context)/
│   │   ├── TotalUsageContext.tsx
│   │   ├── UpdateCreditUsageContext.tsx
│   │   └── UserSubscriptionContext.tsx
│   ├── (data)/
│   │   └── Template.tsx
│   ├── api/
│   │   └── crate-subscription/
│   │       └── route.js
│   ├── dashboard/
│   │   ├── _components/
│   │   │   ├── Header.tsx
│   │   │   ├── MobileSidebar.tsx
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
│   ├── metadata.tsx
│   ├── not-found.tsx
│   └── page.tsx
├── button.tsx
├── components/
│   ├── ChatbaseEmbed.tsx
│   ├── public-footer.tsx
│   ├── public-header.tsx
│   └── ui/
│       ├── background-beams.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── faq.tsx
│       ├── input.tsx
│       ├── pricing.tsx
│       ├── sheet.tsx
│       ├── test.tsx
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
├── package.json
├── page.tsx
├── postcss.config.mjs
├── public/
│   ├── logo.svg
│   ├── robots.txt
│   └── sitemap.xml
├── repo_structure.txt
├── tailwind.config.ts
├── tsconfig.json
├── utils/
│   ├── AiModal.tsx
│   ├── db.tsx
│   └── schema.tsx
└── vercel.json
```
<!-- END_STRUCTURE -->