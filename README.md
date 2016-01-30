[![Build Status](https://travis-ci.org/tonysneed/generator-tonysneed-vscode-typescript.svg?branch=master)](https://travis-ci.org/tonysneed/generator-tonysneed-vscode-typescript)
## Tony Sneed's Yeoman Generator for TypeScript Projects Using Visual Studio Code

### Using the Yeoman Generator

1. Install **Yeoman**.
  - Use **npm** to install Yeoman globally.

    ```shell
    npm install -g yo
    ```

2. Install the **tonysneed-vscode-typescript** generator.
  - Use **npm** to install the generator globally.
    ```shell
    npm install -g generator-tonysneed-vscode-typescript
    ```

3. Create a **directory** for your new TypeScript project.
  - Create the directory where you wish to place your TypeScript project.
  - `cd` into the directory you just created.
    ```shell
    mkdir MyCoolTypeScriptProject
    cd MyCoolTypeScriptProject
    ```

4. Use the **tonysneed-vscode-typescript** generator.
  - Run the `tonysneed-vscode-typescript` Yeoman generator.
    + For a list of optional parameters, add the `--help` parameter.
    + To prevent installation of **dependencies**, add the `--skip-install` parameter.
  
    ```shell
    ~/source/MyCoolTypeScriptProject $ yo tonysneed-vscode-typescript

         _-----_
        |       |    .--------------------------.
        |--(o)--|    |  Welcome to Tony Sneed's |
       `---------´   |    Visual Studio Code    |
        ( _´U`_ )    |   TypeScript generator!  |
        /___A___\    '--------------------------'
         |  ~  |     
       __'.___.'__   
     ´   `  |° ´ Y ` 

    ? Application Name (my-cool-type-script-project) 
    ```
    
### Using Visual Studio Code

1. Open the TypeScript project in **Visual Studio Code**.
  - Follow these instructions to set up VS Code:
    https://code.visualstudio.com/Docs/editor/setup
  - Launch VS Code from the command line and follow instructions in the project's **README.md** file.
    ```shell
    code .
    ```

2. **Compile** TypeScript files.
  - Pressing **Cmd+B** to compile TypeScript to JavaScript.
    + Notice that a **dist** folder appears with `.js` files in it.
    + Also included are sourcemaps and type defitions.
    
3. Run **tests**.
  - Run the tests by pressing **Cmd+T**.
    + You should see results displayed in the **Output** window.
    
4. **Debug** tests.
  - Set a **breakpoint** on line 15 in `greeter.spec.ts`, then press **Cmd+D**
    to view debugging options.
    + Select **Debug Current TypeScript Test** from the dropdown and press **F5**
      to launch the debugger.
    + You should hit the breakpoint.
    + Press **F11** to step into `greeter.greet()`.
    + Press **Shift+F5** to stop the debugger.
