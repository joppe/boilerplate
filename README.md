# Boilerplate

I use this project as a boilerplate for projects that use TypeScript.
For testing I use Webpack, Karma, Jasmine and Istanbul to generate code coverage reports.
For compiling TypeScript to JavaScript I use the Typescript 2.2.

There is a Makefile included, with the following tasks:

- setup, create folder structure
- webpack, compile TypeScript to JavaScript
- lint, lint the TypeScript
- karma, apply all tests
- clean, remove node_modules directory and the compiled JavaScript

Start a project by doing:

- `mkdir <project_name>`
- `cd <project_name>`
- `git clone https://github.com/joppe/boilerplate.git .`
- `rm -rf .git`
- ... do the steps to create a new project described as on github.com
