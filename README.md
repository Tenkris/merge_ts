1. setup dependencies 
1.1 Initialize a new Node.js project: `npm init -y`
1.2 Install TypeScript and Jest for testing: `npm install typescript jest ts-jest @types/jest @types/node --save-dev`
1.3 Initialize TypeScript configuration: `npx tsc --init`
2. setup tsconfig.json  
3. setup jest in package.json 
<!-- "scripts": {
  "test": "jest"
},
"jest": {
  "transform": {
    ".(ts|tsx)": "ts-jest"
  },
  "testEnvironment": "node",
  "testRegex": "/tests/.*\\.(test|spec)?\\.(ts|tsx)$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ]
} -->
4. Run the Tests: `npm test`

--> you can Clone the Repository: 
1. git clone 
2. cd merge_ts 
3. npm install
4. npm test 

