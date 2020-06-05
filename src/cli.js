// Heavily based on:
// https://github.com/dreamyguy/create-some-app

import arg from "arg";
import inquirer from "inquirer";
import { createSprout } from "./main";
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
      "-i": "--install"
    },
    {
      argv: rawArgs.slice(2)
    }
  );
  return {
    skipPrompts: args["--yes"] || false,
    git: args["--git"] || false,
    template: args._[0],
    runInstall: args["--install"] || false
  };
}

async function prompForMissingOptions(options) {
  // Skip prompts if that choice is taken
  if (options.skipPrompts) {
    return {
      ...options,
      template: options.template || defaultTemplate
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
      default: defaultTemplate
    });
  }
  if (!options.git) {
    questions.push({
      type: "confirm",
      name: "git",
      message: "Initialize a git repository",
      default: false
    });
  }

  // TODO: These strings should be set through the CLI, with gracious fallbacks
  questions.push({
    type: "input",
    name: "defaults",
    message: "Get default-values for each value to be replaced"
  });
  // gatsby active environment - develop
  // node version - 12.14.0
  // owners name - Client Inc.
  // project description - Client Inc. is blah blah
  // project name - The Project Name
  // project name kebab-case - the-project-name
  // project repo base url - user/the-project-name
  // project repo full url - https://github.com/user/the-project-name
  // sanity token - a lengthy hash string that allows making requests to Sanity Studio through the frontend
  // sanity project id - a short hash string that connects the local Sanity Studio to the remote one
  // sanity current dataset - production
  // site url - https://the-project-name.com

  // Retrieve answers
  const answers = await inquirer.prompt(questions);
  // Return everything
  return {
    ...options,
    template: options.template || answers.template,
    git: options.git || answers.git
  };
}

export async function cli(args) {
  let options = parseArgumentsIntoOptions(args);
  options = await prompForMissingOptions(options);
  await createSprout(options);
  // console.log(options);
}
