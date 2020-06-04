const shell = require('shelljs');

const currentDir = __dirname.split('/').pop();

shell.echo(`Initiating Web (Gatsby) from project's root 🚀`);

if (currentDir === 'lib') {
  shell.cd('web');
  shell.exec('yarn start');
} else {
  shell.echo(`We could not initiate Web (Gatsby) correctly from project's root`);
}
