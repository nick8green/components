# Nick8Green Components

## Usage

Within your repository create an `.npmrc` file pointing to the GitHub registry for the relevant scoped packages.

```
@nick8green:registry=https://npm.pkg.github.com
```

Due to the package being hosted within GitHub, you must be authenticated with GitHub in order to use the library. This requires having a personal access token with the relevant scopes.

```
$ npm login --scope=@nick8green --auth-type=legacy --registry=https://npm.pkg.github.com

> Username: USERNAME
> Password: TOKEN
```

In order to persist within the repository only, create an `.npmrc` file withing the project with the following content but with your personal access token in place of `<ACCESS TOKEN>`.

```
@nick8green:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=<ACCESS TOKEN>
```

## Installation

```
$ npm install @nick8green/components
```

The components can then be utilised as per the examples in Storybook.

## Documentation

Storybook documentation is hosted in GitHub at [http://nick8green.github.io/components](http://nick8green.github.io/components).

Each component with example usage can be found here.

## Reporting Issues

Please raise an issue to the repository or [click here](https://github.com/nick8green/components/issues).

## Useful Links

* [Building a Component Library with React, Typescript, and Storybook: A Comprehensive Guide](https://medium.com/simform-engineering/building-a-component-library-with-react-typescript-and-storybook-a-comprehensive-guide-ba189accdaf5)
* [Building a Modern React Component Library: A Guide with Vite, TypeScript, and Tailwind CSS](https://medium.com/@mevlutcantuna/building-a-modern-react-component-library-a-guide-with-vite-typescript-and-tailwind-css-862558516b8d)
* [Setup Storybook for your frontend projects, now!](https://medium.com/@rikiphukon/setup-storybook-for-your-react-projects-8120366a4acc)
* [https://blog.logrocket.com/how-to-build-component-library-react-typescript/](https://blog.logrocket.com/how-to-build-component-library-react-typescript/)