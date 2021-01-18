# Zemoga-Test
This file contains general information about the project that was implemented according to the propposed rules [here](https://github.com/zemoga/ui-test).
## Get started
1. Download the repo:

    `git clone https://github.com/YilverMolina/Zemoga-Test.git`

2. Go to the project:

    `cd Zemoga-Test`

3. Open the file `index.html` in a browser, which contains the main access page of the project.

OPTIONAL STEPS:

4. To see the code, open the project with any code editor (VS Code, Sublime, Notepad).

5. To run the project in a local server, an extension of `Live Server` must be installed in the code editor and run any HTML file.

## Project structure

The project was created using the basic structure as follow:

* `css`: SCSS and CSS (generated) files, which have been separated by specific functionalities using partial SASS files.
IMPORTANT: CSS files have been preprocessed from SCSS using the extension `Live Sass Compiler` of Visual Studio Code.
* `fonts`: source files of the font `Lato`.
* `img`: all photos of the characters, logo and others needed for the project.
* `js`: all JS files used for interactive events in the website.
* HTML files for `index`, `how-it-works`, `login` and `past-trials`.

## Branches
* `layout`: contains the layout part: CSS, Fonts, images and HTML files.
* `interactive`: contains the interactive part: JS files.
* `master`: contains both of the previous ones.

## Deployment
The proyect has been deployed in an own server, which can be accessed [here](http://yilvermolinah.com/zemoga/).

## Storage
Project information about votes is being stored using `localStorage` of the browser.
