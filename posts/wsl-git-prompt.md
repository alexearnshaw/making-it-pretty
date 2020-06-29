---
title: Customize your Git prompt on WSL
description: An easy way to add git branch and git status to WSL Ubuntu
date: 2020-06-29
tags:
  - wsl
layout: layouts/post.njk
featuredImage: /images/uploads/ali2019.JPG
---

If you've ever used Gitbash on Windows but are now using Git in an Ubuntu terminal under Windows Subsystem for Linux, you're probably missing the nice prompt that you had in Gitbash! In this post I'm going to show you an easy way to add the Git branch name and the state of your branch using the official Git script.

## Download the Git script

Download the file [`git-prompt.sh`](https://github.com/git/git/blob/master/contrib/completion/git-prompt.sh) and save it to your `Documents` directory on Windows. To download the file, right-click the **Raw** button at the top of the file and select **Save link as...**, and then open the file to check that it contains only the raw text and not HTML.

1. Download the file [`git-prompt.sh`](https://github.com/git/git/blob/master/contrib/completion/git-prompt.sh) and save it to your `Documents` directory on Windows. To download the file, right-click the **Raw** button at the top of the file and select **Save link as...**, and then open the file to check that it contains only the raw text and not HTML.
2. Open an Ubuntu WSL window.
3. Copy the `git-prompt.sh` file to the home directory in your Ubuntu file system and rename it as `.git-prompt.sh`:

    ```
    cd ~
    cp /mnt/c/Users/WINDOWS_USERNAME/Documents/git-prompt.sh .git-prompt.sh
    ```

4. Launch Visual Studio Code from Ubuntu:

    ```
    code .
    ```

5. Open the file `.bashrc` in VSCode. This file already exists in your Ubuntu home directory and is run each time you open an Ubuntu window to initialize your shell environment.
6. Paste the following lines at the end of the file:

    ```
    if [ -f ~/.git-prompt.sh ]; then
        source ~/.git-prompt.sh
        export GIT_PS1_SHOWDIRTYSTATE=1
        export PS1='\u@\h \[\033[38;5;11m\]\w\[\033[38;5;14m\]$(__git_ps1 " (%s)")\[\033[00m\]$ '
    fi
    ```

7. Close the current Ubuntu WSL window and open a new one. This forces Ubuntu to load the changes in `.bashrc`.

After completing these steps, the command prompt in Ubuntu shows useful information such as the current Git branch, the status of the working directory, and so on.
