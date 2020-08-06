---
title: Customize your Git prompt
description: An easy way to add git branch and git status to WSL Ubuntu or MacOS
date: 2020-06-29
tags:
  - wsl
  - macOS
layout: layouts/post.njk
---

If you've ever used Gitbash on Windows but are now using Git in an Ubuntu terminal under Windows Subsystem for Linux (WSL), or in the MacOS terminal, you're probably missing the nice prompt that you had in Gitbash! In this post I'm going to show you an easy way to add the Git branch name and the state of your branch using the `git-prompt.sh` script from the official Git project.

## Download the Git script

Download the file [`git-prompt.sh`](https://github.com/git/git/blob/master/contrib/completion/git-prompt.sh) and save it to your `Documents` directory on Windows or your user home directory on MacOS.

To download the file, right-click the **Raw** button at the top of the file and select **Save link as...**. This ensures that the file contains only the raw text and not HTML.

Tip: To save the file to your WSL Ubuntu home directoy, save it to your `Documents` directory on Windows first and then move it to your Ubuntu home directory in your WSL terminal:

``` bash
mv /mnt/c/Users/WINDOWS_USERNAME/Documents/git-prompt.sh ~/
```

## Rename the file

Rename the file as `.git-prompt.sh`:

``` bash
cd ~
mv git-prompt.sh .git-prompt.sh
```

## Edit `.bashrc` or `.zshrc` file


Open the file `.bashrc` or `.zshrc` in an editor. This file already exists in your home directory and is run each time you open a terminal window to initialize your shell environment.

Paste the following lines at the end of the file.

If you are using `bash`:

``` bash
if [ -f ~/.git-prompt.sh ]; then
    source ~/.git-prompt.sh
    export GIT_PS1_SHOWDIRTYSTATE=1
    export PS1='\u@\h \[\033[38;5;11m\]\w\[\033[38;5;14m\]$(__git_ps1 " (%s)")\[\033[00m\]$ '
fi
```

If you are using `zsh`:

``` bash
if [ -f ~/.git-prompt.sh ]; then
    source ~/.git-prompt.sh
    export GIT_PS1_SHOWDIRTYSTATE=1
    setopt PROMPT_SUBST ; PS1='[%n@%m %c$(__git_ps1 " (%s)")]\$ '
fi
```

## Source `.bashrc` or `.zshrc`

Enter the following command to apply the changes in your current terminal:

``` bash
source ~/.bashrc
```

Or for `zsh`:

``` bash
source ~/.zshrc
```

Alternatively, you can close the current terminal window and open a new one to force the terminal to load the changes.

## Here's our nice prompt!

After completing these steps, the command prompt shows useful information such as the current Git branch, the status of the branch, and so on.

Prompt when not in a Git folder:

``` bash
[alexearnshaw@Alexs-MacBook-Air ~]$ 

```

Prompt when in a Git folder on the master branch:

``` bash
[alexearnshaw@Alexs-MacBook-Air ~]$ cd docsy
[alexearnshaw@Alexs-MacBook-Air docsy (master)]$ 
```

Prompt when in a Git folder on a feature branch with unstaged changes:

``` bash
[alexearnshaw@Alexs-MacBook-Air ~]$ cd making-it-pretty
[alexearnshaw@Alexs-MacBook-Air making-it-pretty (postswip *)]$ 
```