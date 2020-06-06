export default [
  {
    name: "gatsbyDefaultEnvironment",
    message: "What will be the name of the default Gatsby environment?",
    replace: "<% replace with gatsby default environment %>",
    default: "develop",
  },
  {
    name: "nodeVersion",
    message: "Which 'node' version this project should be based on?",
    replace: "<% replace with node version %>",
    default: "12.14.0",
  },
  {
    name: "ownersName",
    message: "Who owns this project (for copyright purposes)?",
    replace: "<% replace with owners name %>",
    default: "Client Inc.",
  },
  {
    name: "projectName",
    message: "What's the project's name?",
    replace: "<% replace with project name %>",
    default: "The Project Name",
  },
  {
    name: "projectDescription",
    message: "What's the project's description?",
    replace: "<% replace with project description %>",
    default: "This project is about this and that",
  },
  {
    name: "repoOwner",
    message: "What's the name of the repo owner (user/organisation)?",
    replace: "<% replace with project repo base url %>",
    default: "netliferesearch",
  },
  {
    name: "sanityAuthToken",
    message: "What's the Sanity auth token?",
    replace: "<% replace with sanity token %>",
    default:
      "a-lengthy-hash-string-that-allows-making-requests-to-Sanity-Studio-through-the-frontend",
  },
  {
    name: "sanityProjectId",
    message: "What's the Sanity project id?",
    replace: "<% replace with sanity project id %>",
    default:
      "a-short-hash-string-that-connects-the-local-Sanity-Studio-to-the-remote-one",
  },
  {
    name: "sanityDataset",
    message: "What's the name for Sanity's default dataset?",
    replace: "<% replace with sanity current dataset %>",
    default: "production",
  },
  {
    name: "siteUrl",
    message: "What's the name for the website in production?",
    replace: "<% replace with site url %>",
    default: "https://the-project-name.com",
  },
];
