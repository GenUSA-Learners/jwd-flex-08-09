# Class Repository: JWD National Flex 08 + 09
<!-- Adjusted Flex Curriculum Layout -->

## Table Of Contents

- [How to Use Your Class Repository](#how-to-use-your-class-repository)
  - [Clone Class Repo to Your Computer](#clone-class-repo-to-your-computer)
  - [Create a 'working' branch](#create-a-working-branch)
  - [Pulling New Changes](#pulling-new-changes)
  - [How to Fix Your Class Repository](#fixing-your-class-repository)
- [Navigating Your Class Repository](#navigating-your-class-repository)
- [Completing Assigned Codecademy Homework](#completing-assigned-codecademy-homework)

## Other References

- [Git Cheat Sheet 1](https://education.github.com/git-cheat-sheet-education.pdf)
- [Git Cheat Sheet 2](https://docs.google.com/document/d/16UxiLWYXl5pt6Ql6wZoNdNxFKmSqKbTC/copy)
- [Create Personal Access Token](https://docs.github.com/en/enterprise-server@3.4/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
- [`code .` Shortcut](./assets/installations/Code.shortcut/code.shortcut.md)

### How To Use Your Class Repository

***PSA: Please read the following directions carefully***

#### Clone Class Repo to Your Computer

- Navigate to the Repository on GitHub
- Use the green "Code" button in your repository, select HTTPS, then copy the url
- Go to your command line (terminal/gitbash), navigate to the directory/folder on your computer that you use to keep your projects (ex. `dev-projects` directory) and make sure you `cd` into that project folder
- Use the following command: `git clone repo_url`
  - This will create a new repository in your projects folder
  - Open your projects folder in VSCode by either selecting 'file > open' OR by using the `code .` shortcut
  - Then `cd` into the `root directory` of the repo you just cloned

#### Create a 'working' branch

Create a 'working' branch to work on in order to keep your code separate from the code on the Main branch.

This can be done by following the directions below:

- In the root directory of the repository, run the `git checkout -b working` command
**OR**
`git branch working` followed by
`git checkout working`.
- move to your new branch using the
`git checkout working` command.
  - notice that this new branch has the same code as your main branch. Use the command `git branch` to see all branches.

***You will be completing activities and making any other changes to the repository on your new `working` branch***

#### Pulling New Changes

When you need to pull new changes and activities, follow the steps below:

From your `working` branch, run:

- `git pull origin main`

This should pull all the new changes into your working branch

***NOTE:***
You will `NOT` be running any of the following commands on the Main branch of this repository:

- `git add`
- `git commit`
- `git push`

Using these commands on the `Main` branch will cause problems when pulling any new changes or activities.

#### Fixing Your Class Repository

*If you **were** working on the Main branch by accident, you may have to stash your changes so that you can pull.* You can do this by following the steps below:

- On the `Main branch` run `git stash` to stash the changes that are causing conflicts
- Then run `git pull` to pull the new changes from your instructor
- To get all the changes back into your working branch, run the following commands in order:
  - `git checkout working`
  - `git merge main`to merge the new changes from the instructor that you just pulled from GitHub
  - `git stash pop` to get your changes back
- To restore your local main branch to it's unchanged state so that it matches the main branch on github (`origin main` -- the remote main branch) and so that you don't have this problem in the future
  - Run `git checkout main`
  - Then `git fetch origin`
  - followed by `git reset --hard origin/main`

### Navigating Your Class Repository

The curriculum is divided into sections and sub-sections. In each sub-section (or 'module') within your class repository, you'll find some or all of the following folders:

- **`Activities`** - may contain practice, examples, and activities folders.
  - `practice` - This is where you'll work through the activities, mess around with examples, and experiment with code. You'll do this by copying the specific activity or example, and pasting it into this folder. *Interacting with the repository in this way reduces the chances of accidentally creating conflicts when you pull new changes each week*
  - `examples` - may contain examples of working code snippets or demos your instructor wants you to be able to use for reference when completing the activities
  - `activities` - most likely contains the activities you'll be working through in class, either peer coding in breakout rooms or as an individual assignment
- **`Homework`** - contains links to Codecademy homework and learning objectives for the module
- **`Resources`** - contains links to articles, videos, cheatsheets, and other items that you should use to learn and study if you get stuck, or supplement your learning

### Completing Assigned Codecademy Homework

Homework for each unit is listed in your class repository in the `Homework` folders followed by the learning objectives for that module.

***!! Note:*** **Each module assigned in Codecademy is expected to be completed in full*. This includes *all lessons, projects, quizzes, articles, and videos* if they appear in the module assigned. The link in your class repo only links to the first item in the module. Continue to click through the content until the assigned module is 100% complete, unless explicitly stated otherwise.*
