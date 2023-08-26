Typescript Compiler

- To avoid manually recompiling a TS file, this is the terminal command
tsc app.ts -w or tsc app.ts --watch

- To keep track of the entire project or multiple files
tsc --init (to make directory managed by TypeScript) (Creates a tsconfig.json file)

- After keeping track of the directory, we can now use
tsc (This compiles all of the .ts files in the directory)

tsc -w or tsc --watch (This will run watch mode with all of the .ts files and auto recompiles)