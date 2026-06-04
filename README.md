# AI Content Generator

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com/?color=45ffaa&size=40&width=900&height=80&lines=Welcome+to+AI+Content+Generator" alt="AI Content Generator Banner" />
</p>

<p align="center">
  <a href="https://github.com/iamkanhaiyakumar/ai-content-generator">
    <img src="https://badges.frapsoft.com/os/v1/open-source.svg?v=103" alt="Open Source Badge" />
  </a>
  <a href="https://github.com/iamkanhaiyakumar/ai-content-generator/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/MIT-License-blue.svg?v=103" alt="MIT License" />
  </a>
  <img src="https://img.shields.io/github/issues/iamkanhaiyakumar/ai-content-generator" alt="GitHub Issues" />
  <img src="https://img.shields.io/github/issues-pr/iamkanhaiyakumar/ai-content-generator" alt="GitHub Pull Requests" />
  <img src="https://img.shields.io/github/forks/iamkanhaiyakumar/ai-content-generator" alt="GitHub Forks" />
  <img src="https://img.shields.io/github/stars/iamkanhaiyakumar/ai-content-generator?style=social" alt="GitHub Stars" />
  <img src="https://img.shields.io/github/contributors/iamkanhaiyakumar/ai-content-generator" alt="Contributors" />
  <br/>
  <img src="https://img.shields.io/github/repo-size/iamkanhaiyakumar/ai-content-generator" alt="Repository Size" />
  <a href="https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github?af=5236ad">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat" alt="PRs Welcome" />
  </a>
  <br/>
  <img src="https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2Fiamkanhaiyakumar2023%2Fai-content-generator&label=visitors&countColor=%2337d67a&style=flat&labelStyle=upper" alt="Visitors Badge" />
</p>

---

## 📌 Overview

AI Content Generator is a modern AI-powered web application built using **Next.js**, **TypeScript**, and **TailwindCSS**. The platform is designed to streamline content creation workflows by leveraging intelligent AI-based text generation systems.

The project focuses on scalability, performance, responsive design, and a seamless developer experience while maintaining clean architecture and efficient deployment workflows.

---

## ✨ Key Features

* 🤖 AI-powered content generation workflows
* ⚡ Fast and scalable Next.js architecture
* 🔐 Authentication and user management using Clerk
* 🎨 Modern responsive UI built with TailwindCSS
* 📦 Easy deployment with Vercel
* 🧩 TypeScript support for better maintainability
* ☁️ Database integration using NeonDB
* 🚀 Optimized developer and contributor workflow

---

## 🛠️ Tech Stack

| Technology  | Description                                                  |
| ----------- | ------------------------------------------------------------ |
| React       | Frontend library for building interactive user interfaces    |
| Next.js     | React framework for SSR and optimized web applications       |
| TypeScript  | Strongly typed JavaScript superset for scalable development  |
| TailwindCSS | Utility-first CSS framework for responsive UI development    |
| Clerk       | Authentication and user management platform                  |
| Gemini      | AI-powered text generation and intelligent content workflows |
| NeonDB      | Serverless PostgreSQL database platform                      |
| Vercel      | Deployment and hosting platform                              |

---

## 📂 Project Structure

Check the detailed repository structure here:

📁 [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md)

---

# 📑 Table of Contents

1. [Overview](#-overview)
2. [Key Features](#-key-features)
3. [Tech Stack](#️-tech-stack)
4. [Project Structure](#-project-structure)
5. [Installation Guide](#️-installation-guide)
6. [Environment Variables](#️-environment-variables)
7. [Database Setup](#-database-setup-neondb)
8. [Clerk Authentication Setup](#-clerk-authentication-setup)
9. [Contributing Guide](#️-contributing-guide)
10. [Outreach Programs](#-outreach-programs)
11. [Project Maintainers](#-project-maintainers)
12. [Code of Conduct](#-code-of-conduct)
13. [Deployment](#-deployment)
14. [License](#-license)
15. [Support](#-support)
16. [Contributors](#-contributors)

---

# 🧑🏻‍💻 Installation Guide

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/ai-content-generator.git
cd ai-content-generator
```

---

## 2️⃣ Install Dependencies

```bash
npm install
```

---

## 3️⃣ Configure Environment Variables

Create a `.env.local` file in the root directory.

Example:

```env
SOCKET_IO_SERVER_URL=http://localhost:3001
```

---

## 4️⃣ Run the Application

### Development Mode

```bash
npm run dev
```

### Production Build

```bash
npm run build
npm start
```

---

# ⚙️ Environment Variables

Add the following variables inside your `.env.local` file:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key
NEXT_PUBLIC_DATABASE_URL=your_neondb_url
SOCKET_IO_SERVER_URL=http://localhost:3001
```

---

# 🗄️ Database Setup (NeonDB)

## Step 1: Create a NeonDB Account

1. Visit [Neon](https://neon.tech/)
2. Sign up or log in to your account
3. Create a new project/database

---

## Step 2: Configure Database

1. Click **Create Database**
2. Select your preferred region
3. Choose **Next.js** integration
4. Copy the generated `DATABASE_URL`
5. Add it to your `.env.local` file

Example:

```env
NEXT_PUBLIC_DATABASE_URL=your_neondb_connection_url
```

---

# 🔐 Clerk Authentication Setup

## Step 1: Create a Clerk Application

1. Visit [Clerk](https://clerk.com/)
2. Create a new application
3. Select **Next.js** as your framework

---

## Step 2: Configure Clerk Environment Variables

Copy the generated environment variables and paste them into your `.env.local` file.

Example:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key
```

---

# 🛠️ Contributing Guide

We welcome contributions to the **AI Content Generator** project.

## Steps to Contribute

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Add your message"
```

4. Push your branch

```bash
git push origin feature-name
```

5. Create a Pull Request

---

For more detailed contribution guidelines, refer to:

📄 [CONTRIBUTING.md](CONTRIBUTING.md)

---

# 🌍 Outreach Programs

AI Content Generator proudly participates in various open-source contribution initiatives.

| Program            | Description                                                                           |
| ------------------ | ------------------------------------------------------------------------------------- |
| GSSoC'24 Extended  | Open-source contribution program encouraging developers to contribute and collaborate |
| Hacktoberfest 2024 | Global open-source event encouraging meaningful pull requests                         |

---

# 👨‍💻 Project Maintainers

## Project Admin

<p align="center">
  <a href="https://github.com/Soumojitshome2023">
    <img src="https://avatars.githubusercontent.com/iamkanhaiyakumar" width="140" alt="Project Admin" />
  </a>
</p>

<p align="center">
  <a href="https://x.com/Kanhaiyakr01" target="blank">
    <img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="Twitter" height="30" width="40" />
  </a>

  <a href="https://www.linkedin.com/in/kanhaiyakumar01/" target="blank">
    <img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="LinkedIn" height="30" width="40" />
  </a>
</p>

---

## 👥 Maintainers

<p align="center">
  <a href="https://github.com/GauravKesh" target="_blank">
    <img src="https://avatars.githubusercontent.com/GauravKesh" alt="Gaurav Kesh" width="60" height="60" style="border-radius:50%;"/>
  </a>
</p>

---

# 📜 Code of Conduct

This project and everyone participating in it are expected to follow the repository's Code of Conduct.

Please read:

📄 [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md)

---

# 📚 Learn More

To learn more about the technologies used in this project:

* 📘 [Next.js Documentation](https://nextjs.org/docs)
* 🎓 [Learn Next.js](https://nextjs.org/learn)
* 💻 [Next.js GitHub Repository](https://github.com/vercel/next.js)

---

# 🧠 AI Workflow Overview

The AI Content Generator platform follows a structured content-generation workflow designed to provide efficient, scalable, and user-friendly AI-assisted experiences.

## Workflow Architecture

1. User authentication using Clerk
2. User request submission through frontend interface
3. Backend request processing and validation
4. AI-powered content generation using Gemini APIs
5. Database storage and workflow management
6. Real-time response rendering to users
7. Deployment and scaling through Vercel infrastructure

---

# 📈 Why This Project?

AI Content Generator aims to simplify and accelerate content creation workflows for developers, creators, students, and businesses by integrating modern AI technologies into an intuitive and scalable web platform.

The project emphasizes:

* Developer-friendly architecture
* Scalable AI workflows
* Modern UI/UX standards
* Open-source collaboration
* Beginner-friendly contribution experience
* Maintainable TypeScript codebase

---

# 🧪 Development Workflow

## Recommended Development Process

1. Fork the repository
2. Create a dedicated feature branch
3. Follow coding and formatting standards
4. Test your changes locally
5. Commit clean and descriptive changes
6. Push updates to your fork
7. Create a pull request with proper descriptions

---

# 📋 Contribution Best Practices

To maintain repository quality and consistency:

* Write meaningful commit messages
* Keep pull requests focused and clean
* Follow markdown and formatting consistency
* Test features before submitting PRs
* Avoid unnecessary dependency additions
* Maintain responsive and accessible UI standards

---

# 🧰 Developer Tools and Utilities

The repository utilizes multiple modern development tools to improve scalability, maintainability, and developer productivity.

| Tool        | Purpose                                              |
| ----------- | ---------------------------------------------------- |
| ESLint      | Maintains code quality and consistency               |
| TypeScript  | Improves scalability and type safety                 |
| TailwindCSS | Accelerates responsive UI development                |
| Clerk       | Handles authentication workflows                     |
| NeonDB      | Provides scalable serverless database infrastructure |
| Vercel      | Simplifies deployment and hosting workflows          |

---

# 📱 Responsive Design Goals

The platform is designed with responsiveness and accessibility in mind.

## UI/UX Goals

* Mobile-friendly layouts
* Clean component hierarchy
* Consistent spacing and typography
* Accessible navigation patterns
* Modern visual structure
* Smooth contributor onboarding experience

---

# 🔍 Future Improvements

Potential future enhancements for the project may include:

* AI template generation workflows
* Multi-language content support
* Advanced analytics dashboards
* AI prompt customization tools
* Content export and sharing utilities
* Improved caching and optimization workflows
* Enhanced accessibility support

---

# 🚀 Deployment

The recommended deployment platform for this project is **Vercel**.

Deploy quickly using:

🔗 [Vercel](https://vercel.com/)

For deployment guidance:

📘 [https://nextjs.org/docs/deployment](https://nextjs.org/docs/deployment)

---

# 📝 License

This project is licensed under the MIT License.

For more information:

📄 [LICENSE](./LICENSE)

---

# ⭐ Support

If you find this project useful:

* ⭐ Star the repository
* 💖 Sponsor the project
* 🤝 Contribute to the repository

---

# 🫱🏼‍🫲🏼 Contributors

Big thanks to all contributors who helped improve this project.

<a href="https://github.com/iamkanhaiyakumar/ai-content-generator/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=iamkanhaiyakumar/ai-content-generator" />
</a>

---

<p align="right">
  <a href="#top">⬆️ Back to Top</a>
</p>


