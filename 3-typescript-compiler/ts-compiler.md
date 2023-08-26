Typescript Compiler

- To avoid manually recompiling a TS file, this is the terminal command
tsc app.ts -w or tsc app.ts --watch

- To keep track of the entire project or multiple files
tsc --init (to make directory managed by TypeScript) (Creates a tsconfig.json file)

- After keeping track of the directory, we can now use
tsc (This compiles all of the .ts files in the directory)

tsc -w or tsc --watch (This will run watch mode with all of the .ts files and auto recompiles)

- Top exclude a file from compilation
Go to tsconfig.json and add a new key value pair after the first curly bracket and comma named "exclude": []
Inside the array, you can add the name of the file
"exclude": [
  (If you want to exclude all files with a certain extension)
  "analytics.dev.ts",

  "*.dev.ts",

  (If you want to exclude all files with this extension pattern in any folder will be ignored)
  "**/*.dev.ts",

  (node_modules is automatically excluded if "exclude" is not specified)
  "node_modules",
],

"files": [
  "app.ts",
],