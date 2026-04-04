import simpleGit from "simple-git";

const git = simpleGit();

export async function getDiff() {
  return await git.diff(["--staged"]);
}