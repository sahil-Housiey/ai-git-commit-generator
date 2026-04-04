# AI Commit Generator 🚀

An AI-powered CLI tool that generates **conventional commit messages** based on your staged changes using **OpenRouter**.

Stop struggling to remember what you changed. Let AI write your commit messages for you!

## ✨ Features

- 🧠 **AI-Powered**: Uses advanced LLMs via OpenRouter to analyze your `git diff`.
- 📝 **Conventional Commits**: Generates messages in the `type(scope): description` format.
- 🚀 **One-Command Commit**: Use the `--commit` flag to generate and commit in one go.
- 🛠️ **Developer Friendly**: Written in modern ESM Node.js.

## 🚀 Installation

You can install it globally using your favorite package manager:

### Using npm
```bash
npm install -g ai-git-commit-generator
```

### Using pnpm
```bash
pnpm add -g ai-git-commit-generator
```

### Using yarn
```bash
yarn global add ai-git-commit-generator
```

## ⚙️ Configuration

1. Get an API key from [OpenRouter](https://openrouter.ai/).
2. You can either:
   - Create a `.env` file in your project root with:
     ```env
     OPENROUTER_API_KEY=your_key_here
     ```
   - Or set it as a global environment variable in your system.

## 📖 Usage

### 1. Stage your changes
```bash
git add .
```

### 2. Generate a message
```bash
ai-commit
```

### 3. Generate and Commit automatically
```bash
ai-commit --commit
```

## 📄 License

MIT © [sahil-Housiey](https://github.com/sahil-Housiey)
