# Index

1. [Introduction](#introduction)
2. [Git configuration and commands](#git-configuration-and-commands)

3. [Git Branching](#git-branching)

4. [Working With GitHub](#working-with-github)

## Introduction

1. Git is a version control system.
2. Git helps you keep track of code changes.
3. It is used to collaborate on code.
4. Git is designed to be used by more than one person.
5. You can use `git config` to create a Git account profile.

- ProjectDirectory || StagingArea || GitDirecory

6. The Staging Area allows us to review our work before taking a snapshot or backup.
7. Once the project is completed in the staging area, we commit those changes to the Git directory (repository).
8. Creating a commit is like taking a snapshot of our project (backup).

**commands**

- `Add`: Used to add files into the staging area.
  - `add .`: Adds entire directory.
  - `add *.<text>`: Adds all files with that text.

- `commit`: Used to store files in the Git directory from the project directory. It contains:
  - Commit ID
  - Message
  - Date and time
  - Author

## Git configuration and commands

1. Install Git.
2. Once you have installed Git, list all available profiles/configurations in Git.

    ```
    git config --list
    ```

3. These accounts can be:

- **System-wide (--system)**: Settings apply to all users on the current system. These settings are typically stored in the system-wide config file and apply to all users and repos on the system.
  - Windows: `C:\ProgramData\Git\config`
  - Unix/Linux: `/etc/gitconfig`

- **User-specific (--global)**: Settings apply to all repos of the current user. Shows settings specific to the currently logged-in user. These settings are stored in the user's home directory in a file called `.gitconfig` and apply to all repos of that user.

- **Repo-specific**: Settings apply to all repos of the current user. It displays settings specific to the Git repos you are currently in. These settings are stored in `.git/config`.

4. If no profiles are showing, create one.
5. Configure/Create the Git profile to identify your commits,

    ```
    git config --global user.name "Aravind Mutte"
    git config --global user.email "<amutte@rivier.edu>"
    ```

6. Once your profile is created, set up the default editor for that profile to edit Git repo files. It can be:
    - VS Code
    - Notepad++
    - Sublime
    - etc.

    ```
    git config --global core.editor "VS Code"
    ```

7. Initialize Git repository by creating a new directory or navigate to an existing directory by using:

    ```bash
    git init
    ```

8. Git creates a hidden folder inside that repository called `.git`. This folder keeps track of changes.

9. Add files to staging area or workspace by using:

    ```bash
    git add <filename with extension>
    git add --all
    ```

10. Once you have made changes to files in the staging/workspace area, save/commit your changes to the repository by using:

    ```bash
    git commit -m "message"
    ```

11. To see the status of the working/staging area, use:

    ```bash
    git status
    ```

12. To see the logs of saved/commit history, use:

    ```bash
    git log
    ```

## Git Branching

- its a new separate version of the main repository.
- branches allows us to work on different parts of a project without impacting the main repository.

1. making a new git branch by using:

  ```bash
    git branch <branch name>
  ```

2. checking all available branches by using,

  ```bash
    git branch 
  ```

- to see all local and remote branches use,

``` bash
  git branch -a
```

3. switching to other branches in the repository by using,

  ```bash
    git checkout <branch name>
  ```

4. making new branch and directly switching to it by using:

  ```bash
    git checkout -b <branch name>
  ```

5. deleting a repository branch

  ```bash
    git branch -d <branch name>
  ```
  
## Working With Git hub

13. To clone a GitHub repository to your local system:

    ```bash
    git clone "github repo link"
    ```

15. push your local repository to github(repo/dir that we have created on github).

  ```bash
    git remote add origin <github repo link>
  ```

- Finally push our master branch to the origin URL(remote repo) and et it as the default remote branch.

  ```bash
  git push --upstream origin master
  ```

16. To push your local changes/commits to a remote repository (GitHub):

    ```bash
    git push origin "branchname"
    ```

17. To pull changes/to fetch & merge them from a remote (GitHub) repository to your local system:

    ```bash
    git pull origin "branchname"
    ```

18.To push branch to a remote/github branch/repository by using

```bash
    git push origin "branchname"
```

19. For viewing branchs from remote/github by using,

```bash
  git branch -r
```

- to see all local and remote branches use,

``` bash
    git branch -a
```

20. To list remote repositories associated with your local repository:

    ```bash
    git remote -v
    ```

21. To manage remote repositories:

    Remote repositories are versions of your project hosted on the internet or on a network, typically on a service like GitHub, GitLab, Bitbucket, or a private server. The `git remote` command allows you to view, add, rename, and remove remote repositories that your local Git repository can interact with.

    ```bash
    git remote
    ```

22. To fetch the latest changes/commits from a GitHub repository without merging them to the local repository:

    ```bash
    git fetch origin
    ```

23. To view information about a specific remote repository:

    ```bash
    git remote show "remote repo"
    ```

24. You can log in to GitHub via terminal or via Git:

- Generate an SSH key:

    ```bash
    ssh-keygen -t rsa -b 4096 -C "amutte@rivier.edu"
    ```

- SSH key saved in the user's home directory under `~/.ssh/`.
- Add SSH key to GitHub account.
- Configure Git profile locally:

    ```bash
    git config --global user.name "amutte"
    git config --global user.email "amutte@rivier.edu"
    ```
