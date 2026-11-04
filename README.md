# 🤖 aiagents: The Open-Source AI Agent Registry

[![Validate Agent Manifests](https://github.com/ashishcsingh/aiagents/actions/workflows/validate.yml/badge.svg)](https://github.com/ashishcsingh/aiagents/actions/workflows/validate.yml)
[![Live Registry](https://img.shields.io/badge/Live_App_Store-aiagent.org/agents-3b82f6.svg)](https://aiagent.org/agents)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/ashishcsingh/aiagents/pulls)

Welcome to **aiagents**, the community-driven registry and specification for autonomous AI agents, multi-agent frameworks, and developer tools.

Every approved manifest in this repository is automatically indexed and featured on the live [**aiagent.org Agent Registry & App Store**](https://aiagent.org/agents).

---

## 🚀 How to Submit Your AI Agent

Adding your open-source agent or tool takes less than 3 minutes:

### Step 1: Fork this Repository
Click **Fork** at the top right of this page and clone your fork locally:
```bash
git clone https://github.com/<your-username>/aiagents.git
cd aiagents
```

### Step 2: Copy the Template
Copy `template.json` into the `agents/` folder with your agent's slug:
```bash
cp template.json agents/my-awesome-agent.json
```

### Step 3: Fill Out Your Manifest
Edit `agents/my-awesome-agent.json` with your agent's details:

```json
{
  "id": "my-awesome-agent",
  "name": "My Awesome Agent",
  "slug": "my-awesome-agent",
  "tagline": "Autonomous agent for database schema migrations and query optimization.",
  "category": "data",
  "categoryLabel": "Data & SQL",
  "framework": "standalone",
  "frameworkLabel": "Python / Standalone",
  "author": "YourGitHubUsername",
  "github": "https://github.com/your-username/my-awesome-agent",
  "stars": "500+",
  "license": "Apache-2.0",
  "verified": true,
  "featured": false,
  "recommendedModels": ["claude-3-5-sonnet", "gpt-4o"],
  "toolsRequired": ["PostgreSQL CLI", "Schema Linter"],
  "tags": ["sql", "database", "migrations", "postgresql"],
  "description": "My Awesome Agent analyzes slow queries and generates migration scripts autonomously.",
  "quickstart": {
    "type": "Python Pip",
    "command": "pip install my-awesome-agent && my-agent run"
  }
}
```

### Step 4: Validate Your Manifest Locally
Run the validation script to verify that your JSON is properly formatted:
```bash
node scripts/validate.js
```

### Step 5: Submit a Pull Request
Commit your changes, push to your fork, and open a Pull Request against `main`:
```bash
git add agents/my-awesome-agent.json registry.json
git commit -m "feat: submit my-awesome-agent manifest"
git push origin feat/my-awesome-agent
```

Once CI passes and the pull request is merged, your agent will appear live on [**aiagent.org/agents**](https://aiagent.org/agents)!

---

## 📂 Repository Structure

```
aiagents/
├── agents/                  # Individual agent manifests (*.json)
│   ├── openhands.json
│   ├── browser-use.json
│   ├── aider.json
│   └── ...
├── scripts/
│   └── validate.js          # Automated schema validator & registry compiler
├── .github/workflows/
│   └── validate.yml         # CI workflow for pull requests
├── template.json            # Blank template for new submissions
├── registry.json            # Bundled registry compiled from agents/
├── LICENSE
└── README.md
```

---

## 🏷️ Supported Categories

| Category Key | Category Label | Description |
|:---|:---|:---|
| `coding` | **Coding & SWE** | Code assistants, autonomous engineers, test generators |
| `research` | **Research & Web** | Deep research, web scraping, multi-source synthesis |
| `multiagent` | **Multi-Agent Systems** | Orchestration frameworks, agent-to-agent communication |
| `productivity` | **Productivity & Docs** | Document intelligence, email triage, personal workflows |
| `devops` | **DevOps & Cloud** | SRE, Kubernetes debugging, AWS/GCP IaC automation |
| `data` | **Data & SQL** | Text-to-SQL, query optimization, analytics pipelines |

---

## 📄 License
This project is licensed under the [MIT License](LICENSE).
