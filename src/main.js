// Heavily based on:
// https://github.com/dreamyguy/create-some-app

import chalk from "chalk";
import execa from "execa";
import fs from "fs";
import kebabCase from "just-kebab-case";
import Listr from "listr";
import ncp from "ncp";
import path from "path";
import { projectInstall } from "pkg-install";
import { promisify } from "util";

const access = promisify(fs.access);
const copy = promisify(ncp);

async function copyTemplateFiles(options) {
  return copy(options.templateDirectory, options.targetDirectory, {
    clobber: false, // don't overwrite anything
  });
}

async function initGit(options) {
  const result = await execa("git", ["init"], {
    cwd: options.targetDirectory,
  });
  if (result.failed) {
    return Promise.reject(new Error("Failed to initialize Git"));
  }
  return;
}

export async function createSprout(options) {
  options = {
    ...options,
    targetDirectory: options.targetDirectory || process.cwd(),
  };

  const currentFileUrl = import.meta.url;
  const templateDir = path.resolve(
    decodeURI(new URL(currentFileUrl).pathname),
    "../../templates",
    kebabCase(options.template)
  );
  options.templateDirectory = templateDir;

  try {
    await access(templateDir, fs.constants.R_OK);
  } catch (err) {
    console.error("%s Invalid template name", chalk.red.bold("ERROR"));
    process.exit(1);
  }
  // Define tasks to be run
  const tasks = new Listr([
    {
      title: "Copy project files",
      task: () => copyTemplateFiles(options),
    },
    {
      title: `Initialize 'git'`,
      task: () => initGit(options),
      enabled: () => options.git,
    },
    {
      title: `Install dependencies`,
      task: () =>
        projectInstall({
          cwd: options.targetDirectory,
        }),
      skip: () =>
        !options.runInstall
          ? "Pass --install to automatically install dependencies"
          : undefined,
    },
  ]);
  // Now that all tasks are defined, run 'em!
  await tasks.run();
  // We're done here
  console.error("%s Project ready", chalk.green.bold("DONE"));
  // Make it a wrap
  return true;
}
