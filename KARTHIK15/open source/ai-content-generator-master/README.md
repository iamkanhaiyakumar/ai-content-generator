<a id="top"></a>

<div align="center">
  <img src="https://readme-typing-svg.herokuapp.com/?color=45ffaa&size=40&width=900&height=80&lines=Welcome%20to%20AI%20Content%20Generator" alt="Typing SVG" />

  <p align="center">
    <strong>AI Content Generator</strong> is a powerful web-based application built using <strong>Next.js</strong> and <strong>TypeScript</strong>. It provides efficient and scalable content workflows, empowering creators with advanced AI-driven content generation tools.
  </p>

  <!-- Badges -->
  <p align="center">
    <a href="https://github.com/iamkanhaiyakumar/ai-content-generator"><img src="https://img.shields.io/badge/Open%20Source-%E2%9D%A4-brightgreen?style=for-the-badge" alt="Open Source"></a>
    <a href="https://github.com/iamkanhaiyakumar/ai-content-generator/blob/master/LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" alt="License"></a>
    <a href="https://github.com/iamkanhaiyakumar/ai-content-generator/issues"><img src="https://img.shields.io/github/issues/iamkanhaiyakumar/ai-content-generator?style=for-the-badge&color=red" alt="GitHub issues"></a>
    <a href="https://github.com/iamkanhaiyakumar/ai-content-generator/pulls"><img src="https://img.shields.io/github/issues-pr/iamkanhaiyakumar/ai-content-generator?style=for-the-badge&color=green" alt="GitHub pull requests"></a>
    <a href="https://github.com/iamkanhaiyakumar/ai-content-generator/stargazers"><img src="https://img.shields.io/github/stars/iamkanhaiyakumar/ai-content-generator?style=for-the-badge&color=yellow" alt="GitHub Repo stars"></a>
    <a href="https://github.com/iamkanhaiyakumar/ai-content-generator/network/members"><img src="https://img.shields.io/github/forks/iamkanhaiyakumar/ai-content-generator?style=for-the-badge&color=orange" alt="GitHub forks"></a>
    <a href="https://github.com/iamkanhaiyakumar/ai-content-generator/graphs/contributors"><img src="https://img.shields.io/github/contributors/iamkanhaiyakumar/ai-content-generator?style=for-the-badge" alt="GitHub contributors"></a>
    <a href="https://github.com/iamkanhaiyakumar/ai-content-generator/blob/master/CONTRIBUTING.md"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge" alt="PRs Welcome"></a>
    <br/>
    <img src="https://img.shields.io/github/repo-size/iamkanhaiyakumar/ai-content-generator?style=for-the-badge" alt="Repo Size">
    <img src="https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2Fiamkanhaiyakumar2023%2Fai-content-generator&label=visitors&countColor=%2337d67a&style=for-the-badge" alt="Visitors Count">
  </p>
</div>

---

## 📖 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [⚙️ Prerequisites](#️-prerequisites)
- [🚀 Installation & Setup](#-installation--setup)
- [💡 Usage](#-usage)
- [📂 Project Structure](#-project-structure)
- [🤝 Contributing](#-contributing)
- [🛡️ Code of Conduct](#️-code-of-conduct)
- [🌟 Outreach](#-outreach)
- [👥 Maintainers](#-maintainers)
- [💖 Support](#-support)
- [📄 License](#-license)

---

## ✨ Features

- 🤖 **AI-Driven Content Generation:** Create high-quality content using advanced AI models (Gemini API).
- ⚡ **Scalable Workflows:** Efficient and automated workflows designed specifically for content creators.
- 🏗️ **Modern Architecture:** Employs Server-Side Rendering (SSR) and Static Site Generation (SSG) with Next.js for maximum performance and SEO.
- 🔐 **Seamless User Management:** Secure authentication, protected routes, and user management powered by Clerk.
- 📱 **Responsive Design:** A stylish, fully responsive, and accessible user interface built using TailwindCSS and Shadcn UI.
- 💾 **Database Integration:** Reliable, serverless data storage and management using NeonDB and Drizzle ORM.
- 🚀 **Easy Deployment:** Optimized for one-click, hassle-free deployment on platforms like Vercel.

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **Framework** | [Next.js](https://nextjs.org/) (React) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **AI Integration** | [Google Generative AI (Gemini)](https://ai.google.dev/) |
| **Authentication** | [Clerk](https://clerk.com/) |
| **Styling** | [TailwindCSS](https://tailwindcss.com/) & [Framer Motion](https://www.framer.com/motion/) |
| **Database** | [NeonDB](https://neon.tech/) (Serverless Postgres) |
| **ORM** | [Drizzle ORM](https://orm.drizzle.team/) |

## ⚙️ Prerequisites

Before you begin, ensure you have the following installed and configured:

1. **Node.js**: [v18 or higher](https://nodejs.org/en/) installed on your machine.
2. **Package Manager**: [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/), or [pnpm](https://pnpm.io/).
3. **Clerk Account**: A [Clerk](https://clerk.com/) account for authentication.
4. **NeonDB Account**: A [NeonDB](https://neon.tech/) account for the database.
5. **Gemini API Key**: A valid [Google Gemini API Key](https://aistudio.google.com/app/apikey).
6. **Git**: [Version control system](https://git-scm.com/) installed to clone the repository.

## 🚀 Installation & Setup

Follow these step-by-step instructions to set up the project locally:

### 1. Clone the Repository
Open your terminal and clone the repository using the following command:
```bash
git clone https://github.com/iamkanhaiyakumar/ai-content-generator.git
cd ai-content-generator
```

### 2. Install Dependencies
Install all required Node.js packages by running:
```bash
npm install
# or yarn install
# or pnpm install
```

### 3. Setup Environment Variables
Create a `.env.local` file in the root directory of your project. Copy the template from `.env.example` (if provided) and fill in your keys:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Neon Database
DATABASE_URL=your_neon_database_url

# Gemini API
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key

# Other (if applicable)
SOCKET_IO_SERVER_URL=http://localhost:3001
```

> **🔑 How to get these API Keys:**
> - **Clerk:** Go to [Clerk Dashboard](https://dashboard.clerk.com/), create a Next.js application, and copy your API keys from the API Keys section.
> - **NeonDB:** Go to [Neon Console](https://console.neon.tech/), create a project & database, and copy the `DATABASE_URL` from the dashboard.
> - **Gemini:** Go to [Google AI Studio](https://aistudio.google.com/), and generate a new API key.

### 4. Database Setup
Initialize and push the schema to your Neon database using Drizzle ORM:
```bash
npm run db:push
```
> *Note: Ensure your `DATABASE_URL` is correctly set in `.env.local` before running this command.*

### 5. Run the Application

**For Local Development:**
```bash
npm run dev
# or yarn dev
# or pnpm dev
```
The application will be accessible at [http://localhost:3000](http://localhost:3000).

**For Production Build:**
```bash
npm run build
npm start
```

## 💡 Usage

Once the application is running locally:
1. **Sign Up/In**: Navigate to the homepage and authenticate using the Clerk-powered login system.
2. **Dashboard**: After logging in, you will be redirected to your dashboard where you can view your content generation history and available templates.
3. **Select a Template**: Choose an AI template based on the type of content you want to generate (e.g., Blog Post, Social Media Caption, Code Snippets).
4. **Generate Content**: Provide the required inputs or prompts in the form, and click "Generate". The Gemini API will process your request and return the result.
5. **Manage Usage**: Keep track of your usage credits via the dashboard sidebar.

## 📂 Project Structure

A clean, modular architecture is maintained to ensure scalability and ease of development.

```text
ai-content-generator/
├── app/               # Next.js 14 App Router, Pages, and Layouts
├── components/        # Reusable UI components (Shadcn UI, Custom)
├── lib/               # Utility functions and configurations
├── public/            # Static assets like images and fonts
├── utils/             # Database schemas and core utilities
├── .env.example       # Environment variables template
├── drizzle.config.js  # Drizzle ORM configuration
├── next.config.mjs    # Next.js configuration
├── tailwind.config.ts # Tailwind CSS configuration
└── README.md          # Project documentation
```

For a detailed overview of the project's file and folder structure, refer to the [`PROJECT_STRUCTURE.md`](./PROJECT_STRUCTURE.md) file.

## 🤝 Contributing

We welcome contributions from everyone! Whether it's a bug fix, new feature, or documentation improvement, your help makes the **AI Content Generator** project better.

### Contribution Workflow:
1. **Fork** the repository by clicking the "Fork" button at the top right of this page.
2. **Clone** your forked repository:
   ```bash
   git clone https://github.com/<your-username>/ai-content-generator.git
   cd ai-content-generator
   ```
3. **Add the original repository as an upstream remote:**
   ```bash
   git remote add upstream https://github.com/iamkanhaiyakumar/ai-content-generator.git
   ```
4. **Create a new branch** for your feature or bug fix:
   ```bash
   git checkout -b feature/your-awesome-feature
   ```
5. **Make your changes** and ensure everything works correctly.
6. **Commit your changes** following standard conventional commit guidelines:
   ```bash
   git commit -m 'feat: add awesome new feature'
   ```
7. **Push to your branch:**
   ```bash
   git push origin feature/your-awesome-feature
   ```
8. **Open a Pull Request** from your branch to our `master` branch.

Please review our comprehensive [Contributing Guidelines](./CONTRIBUTING.md) before getting started for more detailed instructions.

## 🛡️ Code of Conduct

This project and everyone participating in it are governed by our [Code of Conduct](./CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

## 🌟 Outreach

We actively participate in global open-source initiatives to engage with passionate developers from all around the world:

| Program | Logo | Purpose |
|---------|------|---------|
| **GSSoC '24 Extd** | <img src="https://github.com/user-attachments/assets/1bd8ab15-604e-4ac9-a33e-dc753a07be23" width="50" alt="GSSoC"> | The coding period is from Oct 1 to Oct 30. Contributors make PRs and earn points on the platform. |
| **Hacktoberfest 2024** | <img src="https://github.com/user-attachments/assets/027eb349-43f2-4834-9343-1e8ba0bf54ed" width="50" alt="Hacktoberfest"> | A month-long October event welcoming all skill levels to join the open-source community. |

## 👥 Maintainers

<div align="center">
  <table>
    <tr>
      <td align="center">
        <a href="https://github.com/iamkanhaiyakumar">
          <img src="https://avatars.githubusercontent.com/iamkanhaiyakumar" width="100px;" alt="Kanhaiya Kumar" style="border-radius: 50%;"/>
          <br />
          <sub><b>Kanhaiya Kumar</b></sub>
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/GauravKesh">
          <img src="https://avatars.githubusercontent.com/GauravKesh" width="100px;" alt="Gaurav Kesh" style="border-radius: 50%;"/>
          <br />
          <sub><b>Gaurav Kesh</b></sub>
        </a>
      </td>
    </tr>
  </table>
</div>

## 💖 Support

If you found this project helpful or want to support our open-source efforts, please consider:
- ⭐ **Star this repository** to show your appreciation and help others discover it!
- 💰 **Sponsor:** Become a [Sponsor on GitHub](https://github.com/sponsors/iamkanhaiyakumar).
- 🐦 **Connect:** [Follow on Twitter/X](https://x.com/Kanhaiyakr01) or [LinkedIn](https://www.linkedin.com/in/kanhaiyakumar01/).

## 📄 License

This project is licensed under the terms of the **MIT License**. See the [LICENSE](./LICENSE) file for full details.

---

<div align="center">
  <h3>🫱🏼‍🫲🏼 Big thanks to all our incredible contributors! 🫱🏼‍🫲🏼</h3>
  <a href="https://github.com/iamkanhaiyakumar/ai-content-generator/graphs/contributors">
    <img src="https://contrib.rocks/image?repo=iamkanhaiyakumar/ai-content-generator" />
  </a>
</div>

<p align="right"><a href="#top">⬆️ Back to Top</a></p>