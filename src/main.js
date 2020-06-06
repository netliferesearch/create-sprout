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
import defaults from "./defaults";
import shelljs from "shelljs";

export const getDefaultValue = (type) =>
  defaults.find((f) => f.name === type && f.default).default;
export const escapeAllSpaces = (str) => str.replace(/\s/g, "\\ ");

const access = promisify(fs.access);
const copy = promisify(ncp);

async function copyTemplateFiles(options) {
  return copy(options.templateDirectory, options.targetDirectory, {
    clobber: false, // don't overwrite anything
  });
}

async function replaceStrings(options) {
  const replaceWithDefault = (de, type) => {
    if (de.name === type) {
      const strReplace = de.replace;
      const strInput = options[de.name];
      const cmd = `grep -rl --exclude-dir={node_modules,dist} --exclude=*.{lock,png,jpg,svg,woff} --exclude=package-lock.json "${strReplace}" * | xargs sed -i '' 's/${strReplace}/${strInput}/g'`;
      if (shelljs.exec(cmd).code !== 0) {
        shelljs.echo(`Error: Failed replaceStrings() for '${type}'`);
        shelljs.exit(1);
      }
      shelljs.exec(cmd);
    }
  };
  defaults.map(async (def) => {
    replaceWithDefault(def, "gatsbyDefaultEnvironment");
    replaceWithDefault(def, "nodeVersion");
    replaceWithDefault(def, "ownersName");
    replaceWithDefault(def, "projectName");
    replaceWithDefault(def, "projectDescription");
    replaceWithDefault(def, "repoOwner");
    replaceWithDefault(def, "sanityAuthToken");
    replaceWithDefault(def, "sanityProjectId");
    replaceWithDefault(def, "sanityDataset");
    replaceWithDefault(def, "siteUrl");
    return;
  });
  return;
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
    gatsbyDefaultEnvironment:
      options.gatsbyDefaultEnvironment ||
      getDefaultValue("gatsbyDefaultEnvironment"),
    nodeVersion: options.nodeVersion || getDefaultValue("nodeVersion"),
    ownersName: options.ownersName || getDefaultValue("ownersName"),
    projectName: options.projectName || getDefaultValue("projectName"),
    projectDescription:
      options.projectDescription || getDefaultValue("projectDescription"),
    repoOwner: options.repoOwner || getDefaultValue("repoOwner"),
    sanityAuthToken:
      options.sanityAuthToken || getDefaultValue("sanityAuthToken"),
    sanityProjectId:
      options.sanityProjectId || getDefaultValue("sanityProjectId"),
    sanityDataset: options.sanityDataset || getDefaultValue("sanityDataset"),
    siteUrl: options.siteUrl || getDefaultValue("siteUrl"),
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
      title: "Replace strings",
      task: () => replaceStrings(options),
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
