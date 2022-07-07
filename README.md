# Common angular components for Cqube!
Contains common UI components powered by angular. These components are designed to be used in cqube *(mobile app, web portal, offline desktop app)* to drive reusability, maintainability hence reducing the redundant development effort significantly.

# Getting Started
For help getting started with a new Angular app, check out the Angular CLI.
For existing apps, follow these steps to begin using .

## Step 1: Install the package

    npm install cqube-library --save

## Step 2: Include the assets in angular.json
   
  Add following under architect.build.assets

     {
	    ...
	    "build": {
	    
	    "builder": "@angular-devkit/build-angular:browser",
	    
	    "options": {
		    ...
		    ...
    
		    "assets": [
		    
			   ...
			   ...
			    
			    {
				    "glob": "**/*.*",
				    "input": "./node_modules/cqube-library/assets",
				    "output": "./assets/cqube-library"
			    }
		    
		    ],
	    
	    ...
	    ...
    
    },

  

## Step 3: Import the modules and components
Import the NgModule for each component you want to use:
       
import { CqubeLibraryModule } from 'cqube-library';
    
    @NgModule({
	    ...
	    
	    imports: [CqubeLibraryModule],
	    
	    ...
    })

  
    export class TestAppModule { }

## Available components
