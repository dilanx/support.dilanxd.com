---
pagination_prev: paper/index
pagination_next: null
---

# Contributing to Paper

:::note

This page is intended for people that want to contribute to Paper itself. If you're looking to built your own application using Paper's APIs, see [Developing with Paper](./develop/index.md).

:::

## About contributing to Paper

Paper was created and is maintained just by me, Dilan! I still actively make updates, but I've built the system in a way where the data is automatically updated and can continue do be done so after I graduate. However, if you are familiar with software development and are interested in fixing bugs or adding features, I'd always be happy to take a look at what you can do!

## Paper issues

While some issues can be found on the [issues page in Paper's repository](https://github.com/dilanx/paper.nu/issues), this is by no means a full list of what's being worked on. Officially, feedback should be left by users following the instructions on the [feedback page](https://support.dilanxd.com/paper/feedback/), which is linked from Paper's **About** menu. Primarily, feedback is sent directly to me or to my support email address, so if you want to work on the project and don't have any bug fixes or feature additions in mind, you'd be best off asking me what there might be to do.

## Submitting updates for review

Updates to Paper should be submitted as a pull request to the [paper.nu GitHub repository](https://github.com/dilanx/paper.nu). After making a PR, a suite of checks will automatically be run to make sure your updated code builds and is styled according to my project styling standards (which should be automatic provided you follow the setup instructions). It'll also request a review from me, which I probably won't miss.

## Project tech stack

The Paper client-side web app runs on the following tech stack:

- All code is written in [**TypeScript**](https://www.typescriptlang.org/).
- The UI is built using [**React**](https://react.dev/).
- Styling is done with [**Tailwind CSS**](https://tailwindcss.com/).
- Icons are from [**Heroicons**](https://heroicons.com/).
- Animation is done with [**Framer Motion**](https://www.framer.com/motion/).

Working on the project assumes some prior knowledge of these libraries and frameworks. You can find a full list of project dependencies in the project's [`package.json`](https://github.com/dilanx/paper.nu/blob/main/package.json).

Paper's API (handling user data and course data) is built into my generic API ([api.dilanxd.com](https://api.dilanxd.com)), the source code of which is not public. You'll have to talk to me if you need anything updated there.

## Project structure

All source code lives within `src`.

- `app` contains some of the primary app functionality code (functions that update the app state like adding or removing courses and sections from your plans and schedules, etc.).
- `assets` contains any static images bundled with the app.
- `components` contains all React components. It's probably the most bulky part of the project.
- `types` contains TypeScript type definitions.
- `utility` contains utility functions used throughout the app.
- `App.tsx` is the root React component of the app.
- `PlanManager.ts` handles most of the logic for managing plans.
- `ScheduleManager.ts` handles most of the logic for managing schedules.
- `DataManager.ts` handles loading and parsing course data.
- `SaveDataManager.ts` handles loading and saving user data.
- `Account.ts` handles retrieving and updating plan and schedule data saved to an account.

The latest code is on the [`dev`](https://github.com/dilanx/paper.nu/tree/dev) branch, so I recommend working on your own branch built from that one. The [`main`](https://github.com/dilanx/paper.nu/tree/main) branch is auto-deployed to production, so it has the code that's currently live at [paper.nu](https://www.paper.nu).

## Getting started

You'll need to make sure you have JavaScript tooling installed like Node.js (including npm). I recommend installing using [nvm](https://github.com/nvm-sh/nvm) if you don't already have it. I use Node 18 when working with this project. You'll also need a good code editor, like [Visual Studio Code](https://code.visualstudio.com/).

1. Fork the [paper.nu GitHub repository](https://github.com/dilanx/paper.nu), then clone your generated repository.

2. Install dependencies with `npm ci`.

3. Ensure your code will be formatted properly, which is handled by [Prettier](https://prettier.io/). Follow installation instructions on their site to install into your editor. Make sure it's configured to format using the Prettier configuration file in the paper.nu repository, which should be done automatically. You can also enable formatting on save in your editor's settings. Tests will fail if the code isn't formatted properly.

4. Run `npm run dev`, then open the app using the localhost link provided in the console. Now, making any changes and saving should automatically refresh the local instance of the app in your browser!

5. When everything's working, you can submit a PR to the [paper.nu GitHub repository](https://github.com/dilanx/paper.nu)!

## Crediting

There has yet to be anyone who has contributed to Paper other than me, so I haven't had to think about this yet. It'll definitely be something I think about if people end up choosing to contribute.

## Questions

No one knows my own project better than me LOL (because I made it). Feel free to reach out any time! You can check out the [feedback page](https://support.dilanxd.com/paper/feedback/) to see good ways to do that.
