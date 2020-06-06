# Netlife Sprout 🌱

> 🌱 A CLI-based scaffolder that outputs tailored project starters.

[![Node Version](https://img.shields.io/badge/node-v12.14.0-brightgreen.svg)](https://github.com/nodejs/node/releases/tag/v12.14.0) [![MIT Licence](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/netliferesearch/create-sprout/blob/master/LICENSE)

**Netlife Sprout** is a tool created by folks at [Netlife.com][1], so that they could start new projects more effectively, with _best practices_, _reuse_ and _planet first_ in mind.

> 👉 _**The project is in ALPHA (work in progress)**_.

## Installation & Usage

Choose one of these methods:

1. `npm init sprout`
2. `npx create-sprout`
3. `npm install -g create-sprout`

...and then you'll be able to use the `create-sprout` command.

## Using the CLI

    create-sprout

By default, when running `create-sprout` without any option or flag, **you'll be presented with prompts**, so you can tailor the application to your needs without being familiar with available options or flags.

But for those interested in automation or simply in saving time, there are some pre-defined CLI commandos at your disposal:

#### 1. The first config option is the _template/project_ type

Currently `fullstack-gatsby-sanity` or `fullstack-next-sanity`.

    create-sprout fullstack-next-sanity

#### 2. `--yes` or `-y`

When passed, prompts will be skipped. Useful when passing both choices and chosen flags, making the prompt unnecessary.

> 👉 Without defining the first config option (template choice), it will default to `Fullstack Gatsby Sanity`.

    create-sprout --yes
    create-sprout fullstack-gatsby-sanity -y

#### 3. `--git` or `-g`

When passed, `git init` will be run, initialising a `git` repo with all files unstaged. Default is `false`.

    create-sprout fullstack-next-sanity --yes --git
    create-sprout fullstack-next-sanity -y -g

#### 4. `--install` or `-i`

When passed, `npm install` will be run, initialising all dependencies specified in the chosen / tailored `package.json` file.

    create-sprout fullstack-next-sanity --yes --git --install
    create-sprout fullstack-next-sanity -y -g -i

#### 5. `--gatsbyDefaultEnvironment`

    create-sprout --gatsbyDefaultEnvironment production

#### 6. `--nodeVersion`

    create-sprout --nodeVersion 12.18.0

#### 7. `--ownersName`

    create-sprout --ownersName 'Owner Inc.'

#### 8. `--projectName`

    create-sprout --projectName 'Nice Project Name'

#### 9. `--projectDescription`

    create-sprout --projectDescription 'Such Wow Description'

#### 10. `--repoOwner`

    create-sprout --repoOwner dreamyguy

#### 11. `--sanityAuthToken`

    create-sprout --sanityAuthToken lkasjflkjasldfjlkajsdkfjlkajsdfkljsalkjdfsomethingsomething

#### 12. `--sanityProjectId`

    create-sprout --sanityProjectId 701kayak107

#### 13. `--sanityDataset`

    create-sprout --sanityDataset production

#### 14. `--siteUrl`

    create-sprout --siteUrl http://thisistheurl.io

Using the full potential of the CLI, with all options, without even installing it first (using `npx`):

    npx create-sprout fullstack-gatsby-sanity --gatsbyDefaultEnvironment envelope --nodeVersion 12.18.0 --ownersName 'Owner Inc.' --projectName 'Naming Names in the Name' --projectDescription 'Such Wow Description' --repoOwner 'Dreamyguy' --sanityAuthToken lkasjflkjasldfjlkajsdkfjlkajsdfkljsalkjdfsomethingsomething --sanityDataset produccione --sanityProjectId 701kayak107 --siteUrl http://thisistheurl.io --yes --git --install

## What kind of apps are available?

_Currently only two_: **Fullstack Gatsby Sanity** and **Fullstack Next Sanity**. _None of them are fully functional at the moment. The project is in ALPHA (work in progress)._

Watch this space for highly configurable starters with **React**, **Sanity**, **Gatsby**, **NextJs**, **Bit** integration, extensive testing and many other goodies, all bundlet as options within **created-sprout**.

## Extended DOCS

- [TESTING](docs/TESTING.md)
- [TODO](docs/TODO.md)
- [IDEAS](docs/IDEAS.md)

## License

[MIT](LICENSE)

## Credits

Everyone involved in this project deserve a mention and a big thanks. If you got involved and are not listed, feel free to add your own name. Sorted alphabetically:

- [Aleksander Andersen - @lordaust](https://github.com/lordaust)
- [Haakon Borch - @haakonmb](https://github.com/haakonmb)
- [Kevin Bodi - @KevinBodi](https://github.com/KevinBodi)
- [Kristi Faye-Lund - @kfayelun](https://github.com/kfayelun)
- [Lars Tollefsen - @LarsTollefsen](https://github.com/LarsTollefsen)
- [Leo Toneff - @bragle](https://github.com/bragle)
- [Milosz Hygen - @miloszhygen](https://github.com/miloszhygen)
- [Sjur Bjørndalsæter - @kodehode](https://github.com/kodehode)
- [Wallace Sidhrée - @dreamyguy](https://github.com/dreamyguy)

## Sources

Certain parts of **Netlife Sprout** are based on, inspired by and/or borrowed from some great open-source projects. There were great researches done as well:

- **CLI**:
  - Heavily based on [Create Some App][2], by [Wallace Sidhrée](https://github.com/dreamyguy).
  - Inspired by [Pegmata][3], by [Milosz Hygen](https://github.com/miloszhygen).
- **Styles & components**:
  - Initial setup by [Kristi Faye-Lund](https://github.com/kfayelun), [Leo Toneff](https://github.com/bragle) & [Lars Tollefsen](https://github.com/LarsTollefsen).
- **Documentation**:
  - Initial research by [Haakon Borch](https://github.com/haakonmb) & [Lars Tollefsen](https://github.com/LarsTollefsen).
- **Error logging**:
  - Initial research by [Sjur Bjørndalsæter](https://github.com/kodehode).
- **Gatsby**:
  - Initial setup by [Wallace Sidhrée](https://github.com/dreamyguy).
- **Sanity**:
  - Initial setup by [Kevin Bodi](https://github.com/KevinBodi).
- **Testing rig**:
  - Heavily based on [Figmatron 2000][4], by [Wallace Sidhrée](https://github.com/dreamyguy).

[1]: https://netlife.com
[2]: https://github.com/dreamyguy/create-some-app
[3]: https://github.com/miloszhygen/pegmata
[4]: https://github.com/dreamyguy/figmatron2000
