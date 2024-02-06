typescript-cucumber-bdd-demo
==

A demo of how to test a TypeScript library with Cucumber BDD.

## Usage 

```sh
npm test
```

* * *

## Notes

Command line steps for creating the project:

```sh
mkdir typescript-cucumber-bdd-demo
cd typescript-cucumber-bdd-demo
touch README.md
npm init -y
npm install typescript --save-dev
mkdir src
touch tsconfig.json
touch src/index.ts
```

### Setup Cucumber

Command line step for setting up testing:

```sh
npm install --save-dev @cucumber/cucumber ts-node 
touch cucumber.js
mkdir -p test/features
mkdir -p test/step-definitions
touch test/features/add.feature
touch test/step-definitions/add.steps.ts
```

* * *

## References

* https://github.com/cucumber/cucumber-js/blob/main/docs/configuration.md
* https://github.com/cucumber/cucumber-js/blob/main/docs/support_files/world.md
