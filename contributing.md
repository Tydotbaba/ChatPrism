# Contributing guidelines
	note on contributing

## What type of pull request do we accept?
- Bug fixes
- Feature fixes
- Documentation fixes

## Tools

We have chosen to use the following tools based on major team members skills strength.

Frontend:
- react
- bootstrap 4

Backend:
- python
- django


## Pushing Code
	note on how to push

The main branch is reserved for main stable app.
&nbsp;
To push your code to this repo, please push to the develop branch.

Thus to contribute, follow the steps below strictly:
1. Pick a todo to work on
    - go to the project page and move the todo to the in-progress column. This will let others know what you are currently working on.
    - If you are working on an issue or todo, please create a feature branch.
    
    &nbsp;
    E.g. say you are working on create login/register page,
    - in your command prompt, enter 
    &nbsp;
	```
		git branch login-feature 
	``` 

2. Merge your feature branch to develop branch.
	- when you are done with your testing and sure everything is working,
	- merge like this:
	&nbsp;
	```
		git checkout develop
		git merge login-feature
	```


3. push your code to the develop branch
more like:
	```
		git push origin develop
	```
