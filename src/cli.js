// Heavily based on:
// https://github.com/dreamyguy/create-some-app

import arg from "arg";
import inquirer from "inquirer";
import kebabCase from "just-kebab-case";
import { createSprout, getDefaultValue } from "./main";
import defaults from "./defaults";

// TODO: This should preferably come from a config, with sensible default values
const defaultTemplate = "Fullstack Gatsby Sanity";

function parseArgumentsIntoOptions(rawArgs) {
  const args = arg(
    {
      "--git": Boolean,
      "--yes": Boolean,
      "--install": Boolean,
      "-g": "--git",
      "-y": "--yes",
      "-i": "--install",
      "--gatsbyDefaultEnvironment": String,
      "--nodeVersion": String,
      "--ownersName": String,
      "--projectName": String,
      "--projectDescription": String,
      "--repoOwner": String,
      "--sanityAuthToken": String,
      "--sanityProjectId": String,
      "--sanityDataset": String,
      "--siteUrl": String,
    },
    {
      argv: rawArgs.slice(2),
    }
  );
  return {
    skipPrompts: args["--yes"] || false,
    git: args["--git"] || false,
    template: args._[0],
    runInstall: args["--install"] || false,
    gatsbyDefaultEnvironment: args["--gatsbyDefaultEnvironment"],
    nodeVersion: args["--nodeVersion"],
    ownersName: args["--ownersName"],
    projectName: args["--projectName"],
    projectDescription: args["--projectDescription"],
    repoOwner: args["--repoOwner"],
    sanityAuthToken: args["--sanityAuthToken"],
    sanityProjectId: args["--sanityProjectId"],
    sanityDataset: args["--sanityDataset"],
    siteUrl: args["--siteUrl"],
  };
}

async function prompForMissingOptions(options) {
  // Skip prompts if that choice is taken
  if (options.skipPrompts) {
    return {
      ...options,
      template: options.template || defaultTemplate,
      gatsbyDefaultEnvironment:
        options.gatsbyDefaultEnvironment ||
        getDefaultValue("gatsbyDefaultEnvironment"),
      nodeVersion: options.nodeVersion || getDefaultValue("nodeVersion"),
      ownersName: options.ownersName || getDefaultValue("ownersName"),
      projectName: options.projectName || getDefaultValue("projectName"),
      projectDescription:
        options.projectDescription || getDefaultValue("projectDescription"),
      repoOwner: kebabCase(options.repoOwner) || getDefaultValue("repoOwner"),
      sanityAuthToken:
        options.sanityAuthToken || getDefaultValue("sanityAuthToken"),
      sanityProjectId:
        options.sanityProjectId || getDefaultValue("sanityProjectId"),
      sanityDataset: options.sanityDataset || getDefaultValue("sanityDataset"),
      siteUrl: options.siteUrl || getDefaultValue("siteUrl"),
    };
  }
  // Define prompt questions
  const questions = [];
  if (!options.template) {
    questions.push({
      type: "list",
      name: "template",
      message: "Please choose which project template to use",
      choices: ["Fullstack Gatsby Sanity", "Fullstack Next Sanity"],
      default: defaultTemplate,
    });
  }
  defaults.map((def) => {
    if (
      !options.gatsbyDefaultEnvironment &&
      def.name === "gatsbyDefaultEnvironment" &&
      questions.some((e) => e.name !== def.name)
    ) {
      questions.push({
        type: "input",
        name: def.name,
        message: def.message,
        default: def.default,
      });
    }
    if (
      !options.nodeVersion &&
      def.name === "nodeVersion" &&
      questions.some((e) => e.name !== def.name)
    ) {
      questions.push({
        type: "input",
        name: def.name,
        message: def.message,
        default: def.default,
      });
    }
    if (
      !options.ownersName &&
      def.name === "ownersName" &&
      questions.some((e) => e.name !== def.name)
    ) {
      questions.push({
        type: "input",
        name: def.name,
        message: def.message,
        default: def.default,
      });
    }
    if (
      !options.projectName &&
      def.name === "projectName" &&
      questions.some((e) => e.name !== def.name)
    ) {
      questions.push({
        type: "input",
        name: def.name,
        message: def.message,
        default: def.default,
      });
    }
    if (
      !options.projectDescription &&
      def.name === "projectDescription" &&
      questions.some((e) => e.name !== def.name)
    ) {
      questions.push({
        type: "input",
        name: def.name,
        message: def.message,
        default: def.default,
      });
    }
    if (
      !options.repoOwner &&
      def.name === "repoOwner" &&
      questions.some((e) => e.name !== def.name)
    ) {
      questions.push({
        type: "input",
        name: def.name,
        message: def.message,
        default: kebabCase(def.default),
      });
    }
    if (
      !options.sanityAuthToken &&
      def.name === "sanityAuthToken" &&
      questions.some((e) => e.name !== def.name)
    ) {
      questions.push({
        type: "input",
        name: def.name,
        message: def.message,
        default: def.default,
      });
    }
    if (
      !options.sanityProjectId &&
      def.name === "sanityProjectId" &&
      questions.some((e) => e.name !== def.name)
    ) {
      questions.push({
        type: "input",
        name: def.name,
        message: def.message,
        default: def.default,
      });
    }
    if (
      !options.sanityDataset &&
      def.name === "sanityDataset" &&
      questions.some((e) => e.name !== def.name)
    ) {
      questions.push({
        type: "input",
        name: def.name,
        message: def.message,
        default: def.default,
      });
    }
    if (
      !options.siteUrl &&
      def.name === "siteUrl" &&
      questions.some((e) => e.name !== def.name)
    ) {
      questions.push({
        type: "input",
        name: def.name,
        message: def.message,
        default: def.default,
      });
    }
    return null;
  });
  if (!options.git) {
    questions.push({
      type: "confirm",
      name: "git",
      message: "Initialize a git repository",
      default: false,
    });
  }
  // Retrieve answers
  const answers = await inquirer.prompt(questions);
  // Return everything
  return {
    ...options,
    template: options.template || answers.template,
    git: options.git || answers.git,
    gatsbyDefaultEnvironment:
      options.gatsbyDefaultEnvironment || answers.gatsbyDefaultEnvironment,
    nodeVersion: options.nodeVersion || answers.nodeVersion,
    ownersName: options.ownersName || answers.ownersName,
    projectName: options.projectName || answers.projectName,
    projectDescription:
      options.projectDescription || answers.projectDescription,
    repoOwner: kebabCase(options.repoOwner) || kebabCase(answers.repoOwner),
    sanityAuthToken: options.sanityAuthToken || answers.sanityAuthToken,
    sanityProjectId: options.sanityProjectId || answers.sanityProjectId,
    sanityDataset: options.sanityDataset || answers.sanityDataset,
    siteUrl: options.siteUrl || answers.siteUrl,
  };
}

export async function cli(args) {
  let options = parseArgumentsIntoOptions(args);
  options = await prompForMissingOptions(options);
  await createSprout(options);
  // console.log(options);
}
