import { Command } from "commander";
import { getDiff } from "./git.js";
import { generateCommit } from "./ai.js";

const program = new Command();

program
  .name("ai-commit")
  .description("Generate commit messages using AI")
  .option("--commit", "Auto commit")
  .action(async (options) => {
    const diff = await getDiff();

    if (!diff) {
      console.log("❌ No staged changes found.");
      return;
    }

    const message = await generateCommit(diff);

    console.log("\n✨ Suggested Commit:\n");
    console.log(message);

    if (options.commit) {
      const { execSync } = await import("child_process");
      execSync(`git commit -m "${message}"`, { stdio: "inherit" });
    }
  });

program.parse();