
# Contributing to AI Content Generator

First off, thanks for taking the time to contribute! This document explains the process and guidelines for contributing to the **AI Content Generator** repository.

## Table of Contents
1. [How Can I Contribute?](#how-can-i-contribute)
   - [Reporting Issues](#reporting-issues)
   - [Submitting Pull Requests](#submitting-pull-requests)
   - [Improving Documentation](#improving-documentation)
2. [Code Style Guidelines](#code-style-guidelines)
3. [Commit Message Guidelines](#commit-message-guidelines)
4. [Git Workflow: Step-by-Step](#git-workflow-step-by-step)
5. [Setting Up Development Environment](#setting-up-development-environment)

## How Can I Contribute?

### Reporting Issues

If you've found a bug or have a suggestion for a new feature:
1. **Check existing issues** to ensure it hasn’t been reported yet.
2. **Create a new issue** and provide detailed information:
   - A clear title.
   - Detailed steps to reproduce the bug (if applicable).
   - Any relevant screenshots or logs.
   - Your environment (e.g., operating system, version of the AI Content Generator).
3. Use labels like `bug`, `enhancement`, `question`, etc. to categorize your issue.

### Submitting Pull Requests

If you're ready to submit code to fix an issue or add a new feature:
1. **Fork the repository** and clone it locally.
2. Create a new branch from the `main` branch for your changes.
3. **Make your changes** with clear and atomic commits.
4. **Test your changes** thoroughly.
5. Push your branch to your forked repo and open a Pull Request (PR) on the original repo.
6. Wait for feedback or approval from maintainers.

### Improving Documentation

If you notice a typo, missing information, or outdated content in the documentation:
1. **Create an issue** or **submit a pull request** directly with your changes.
2. Ensure any new sections follow the existing documentation style.

## Code Style Guidelines

To maintain consistency and readability, please follow these guidelines:
1. Use **consistent indentation** (e.g., 4 spaces for Python).
2. Ensure your code is **well-documented** with inline comments, especially for complex functions.
3. Adhere to the project's existing coding style and conventions.
4. Run **linters** and **code formatters** to avoid formatting errors.

For Python:
- Follow **PEP 8** coding standards.

For JavaScript (if applicable):
- Use **ESLint** and format your code according to **Prettier** guidelines.

## Commit Message Guidelines

- Use clear, descriptive commit messages.
- **Format**:
  - Capitalize the first letter.
  - Use imperative mood ("Add feature", not "Added feature").
  - Keep the commit message concise (under 72 characters).

Example:
```
Add support for generating multiple content types
Fix issue with AI response timeout
Update documentation for installation instructions
```

## Git Workflow: Step-by-Step

### Step 1: Fork the Repository
To contribute, first **fork** the repository to your own GitHub account.
1. Navigate to the repository on GitHub.
2. Click the `Fork` button at the top right corner.
3. This creates a copy of the repository under your own GitHub account.

### Step 2: Clone the Forked Repository
Once forked, clone the repository to your local machine:
```bash
git clone https://github.com/<your-username>/ai-content-generator.git
cd ai-content-generator
```

### Step 3: Add the Original Repository as a Remote
This ensures you can sync your fork with the original repository.
```bash
git remote add upstream https://github.com/iamkanhaiyakumar/ai-content-generator.git
```

### Step 4: Create a New Branch
Always create a new branch for your contributions instead of working directly on the `main` branch.
```bash
git checkout -b feature/your-feature-name
```

### Step 5: Make Your Changes
Make your changes locally. After making changes, check which files have been modified:
```bash
git status
```

### Step 6: Stage the Changes
Stage the files you’ve modified or added for commit:
```bash
git add <file-name>  # To add specific files
git add .            # To add all modified files
```

### Step 7: Commit Your Changes
Commit your changes with a clear and descriptive message:
```bash
git commit -m "Add feature to generate multiple content types"
```

### Step 8: Push Your Changes to Your Forked Repository
Once committed, push the changes to your forked repository:
```bash
git push origin feature/your-feature-name
```

### Step 9: Create a Pull Request (PR)
1. Visit your forked repository on GitHub.
2. Click the **Compare & Pull Request** button.
3. Provide a detailed description of what your pull request does and link to any related issues.

### Step 10: Sync Your Fork (Optional)
If the original repository has been updated since you forked it, you need to sync your fork:
1. Fetch the changes from the upstream repository:
   ```bash
   git fetch upstream
   ```
2. Merge the changes into your `main` branch:
   ```bash
   git checkout main
   git merge upstream/main
   ```

### Step 11: Push Merged Changes to Your Fork
After merging, push the updated `main` branch back to your fork:
```bash
git push origin main
```

## Setting Up Development Environment

To get started with the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/iamkanhaiyakumar/ai-content-generator.git
   cd ai-content-generator
   ```

2. **Install dependencies** (if applicable):
   ```bash
   pip install -r requirements.txt  # For Python dependencies
   npm install                      # For Node.js dependencies (if applicable)
   ```

3. **Run tests** to ensure everything is set up properly:
   ```bash
   pytest   # If using Python's pytest for testing
   npm test # If using JavaScript/Node.js
   ```

4. **Run the application** to verify your environment setup:
   ```bash
   python app.py     # For Python-based projects
   npm start         # For JavaScript-based projects
   ```

---

Feel free to submit an issue or a pull request if you need help! Thanks for contributing to **AI Content Generator**.
