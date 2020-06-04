# TESTING

We have two testing approaches: **Unit Testing** and **Integration Testing**.

### 1. Unit Tests

While developing locally, one is encouraged to open an extra terminal window and run:

```
npm run test
```

This will start our unit test rig (courtesy of [**Jest**](https://jestjs.io/). This way you can both write tests and ensure that what you just wrote hasn't broken any unit test. :umbrella:

### 2. Integration Tests

While developing locally, one is encouraged to open an extra terminal window and run:

```
npm run test:e2e:open
```

This will start our integration test rig (courtesy of [**Cypress**](https://cypress.io/)), firing up a **cy** binary, which in turn will enable you to fire-up a stripped-up version of Chrome that will tests all pre-defined _specs_.

Here you can choose to run the whole test suite or only the _spec_ file you're working on. This process is "watched", so changes made to the _spec_ file will reflect on the test output.

One can also run tests in a "headless" fashion, by running:

```
npm run test:e2e:run
```

This mode is especially designed to be integrated into CI processes, and a slight variation of it is run by **Travis**. This mode does not feature a "watch" flag, so tests will run only once.

### Noteworthy observations

> Unlike **Unit Tests**, **Integration Tests** are very time-consuming. **`run`** runs a bit faster than the **`open`** variant, so it's a good mode to use while not working on anything that has an integration test related to it - or simply wanting to check if everything is still fine locally.

> _Both **Unit Tests** and **Integration Tests** are run at [Travis](https://travis-ci.com/github/netliferesearch/)'s end, and failure on any of them will abort the deployment to the respective environment, breaking the build._
