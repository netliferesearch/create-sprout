export default {
  "gatsby-environment": {
    message: "which gatsby environment?",
    replace: "<% replace with gatsby active environment %>",
    default: "develop"
  },
  "node-version": {
    replace: "<% replace with node version %>",
    default: "12.14.0"
  },
  "owners-name": {
    replace: "<% replace with owners name %>",
    default: "Client Inc."
  },
  "project-description": {
    replace: "<% replace with project description %>",
    default: "Client Inc. is blah blah"
  },
  "project-name": {
    replace: "<% replace with project name %>",
    default: "The Project Name"
  },
  "project-kebab-case": {
    replace: "<% replace with project name kebab-case %>",
    default: "the-project-name"
  },
  "repo-base-url": {
    replace: "<% replace with project repo base url %>",
    default: "user/the-project-name"
  },
  "repo-full-url": {
    replace: "<% replace with project repo full url %>",
    default: "https://github.com/user/the-project-name"
  },
  "sanity-auth-token": {
    replace: "<% replace with sanity token %>",
    default:
      "a lengthy hash string that allows making requests to Sanity Studio through the frontend"
  },
  "sanity-project-id": {
    replace: "<% replace with sanity project id %>",
    default:
      "a short hash string that connects the local Sanity Studio to the remote one"
  },
  "sanity-dataset": {
    replace: "<% replace with sanity current dataset %>",
    default: "production"
  },
  "site-url": {
    replace: "<% replace with site url %>",
    default: "https://the-project-name.com"
  }
};
