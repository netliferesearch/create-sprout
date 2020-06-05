const shell = require('shelljs');

const currentDir = __dirname.split('/').pop();

shell.echo(`Initiating Sanity Studio from project's root 🚀`);

if (currentDir === 'lib') {
  shell.cd('server/sanity');
  shell.exec('yarn start');
} else {
  shell.echo(`We could not initiate Sanity Studio correctly from project's root`);
}
