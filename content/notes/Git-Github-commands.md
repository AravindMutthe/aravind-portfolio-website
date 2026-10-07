# 1. GIT

* Git was designed and developed by Linus Torvalds for Linux kernel development.
* Git provides support for non-linear, distributed development, allowing multiple contributors to work on a project simultaneously.
* Git is the most popular distributed version control and source code management system.

# 2. GitHub

1. **FORK:** Forking a repository allows you to create a copy of the original repository to your account, enabling you to make changes without affecting the original project.
2. **BRANCH:** A branch is a parallel version of a repository. It is contained within the repository but does not affect the primary or master branch, allowing you to work freely without disrupting the "live" version.
3. **FETCH:** Fetching refers to retrieving data from a remote repository to update your local repository, including branches and commits that are new to your local repository.
4. **CLONE:** Cloning a repository means creating a copy of a repository from a remote server to your local machine.
5. **COMMIT:** A commit is a snapshot of changes made to files in a repository at a specific point in time.
6. **REPOSITORY:** A repository, or repo, is a collection of files and folders along with the history of their changes. It serves as a central location for storing and managing project files.
7. **INDEX:** Also known as the staging area, the index is where changes are marked for the next commit.
8. **MASTER:** The main branch in Git is often called master, and it typically represents the stable, production-ready version of the project.
9. **MERGING:** Merging is the process of combining changes from one branch into another branch.
10. **PULL:** Pulling refers to fetching changes from a remote repository and merging them into the local repository.
11. **PUSH:** Pushing involves sending local commits to a remote repository to update the repository with your changes.
12. **ORIGIN:** Origin is the default name for the remote repository from which a local repository was cloned.
13. **CHECKOUT:** Checking out allows you to switch between different branches or restore files to a previous state within a branch.

# 3. Git vs GitHub

1. **git:** Refers to the Git version control system, which is installed locally on a computer.
   **github:** Refers to GitHub, a cloud-based platform for hosting Git repositories and facilitating collaboration.

2. **git:** Focuses on version control and code sharing, primarily a distributed version control system (DVCS).
   **github:** Focused on centralized code hosting, providing features for collaboration (CVCS).

3. **git:** Creates a local repository to track changes locally.
   **github:** Stores repositories on centralized servers accessible by everyone.

4. **git:** Can function independently of GitHub.
   **github:** Alternatives to GitHub include GitLab and Bitbucket.

5. **git:** Manages versions of source code and repositories, providing functions like version control and source code management.
   **github:** A platform for hosting Git repositories, offering similar functions as Git with additional features.

# 4. Terminology

1. **repo:** A repository is a collection of files and folders along with the history of their changes. It can be created by turning a local directory into a version-controlled repository or by cloning from a Git repository.

   ```sh
   git add *.c
   git add LICENSE
   $ git commit -m 'Initial project version'

2. **Commit:** Changes are tracked through commits, which are snapshots of a file at various points in its history.

3. **Master:** The main branch, usually named master, is reserved for clean, working code.

4. **Branch:** Branches are used for editing files without disturbing the working portions of a project.

# 5. Git Local Repository Commands

```sh
git config --list  # To verify username and email.
git config --global core.editor editor-name  # Set your default text editor.
git init  # Creates a new .git subdirectory in the current directory.
git add file-name  # Add a file to the repository.
git rm file-name  # Remove a file from the repository.
git mv old-file new-file  # Move or rename a tracked file, directory, or symlink.
git branch  # List all the local and remote branches.
git commit -m 'commit message'  # Commit all staged changes.
git pull  # Download changes from the remote repository and merge them.
git push  # Publish changes to the remote repository.
```

# 6. github remote repository commands  

* GitHub, GitLab, and Bitbucket all provide ways to store Git repositories remotely and facilitate collaboration.

```sh
git clone repository-url  # Copy a remote repository to your local system.
git status  # Check the status of files within the current branch.
git remote  # Display the short names of remote repositories.
git remote add [remote-name] [url]  # Add a new remote repository.
git fetch [repository [refspec]]  # Gather data from a remote project.
git pull  # Obtain and merge a remote branch into your current branch.
git push [remote-name] [branch-name]  # Move data from your branch to your server.
```
