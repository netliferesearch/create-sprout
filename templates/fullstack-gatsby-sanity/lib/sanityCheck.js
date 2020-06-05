const shell = require('shelljs');

const currentDir = __dirname.split('/').pop();

shell.echo('Checking Sanity Studio ☔');

if (currentDir === 'lib') {
  shell.cd('server/sanity');
  shell.exec('yarn test');
} else {
  shell.echo(`We could not check Sanity Studio correctly from project's root`);
}
