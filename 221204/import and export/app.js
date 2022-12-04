// In your own capsules work as a group and do the following:
// What is the difference between import and require?
//--------------------------------------------------------------------------
// * require() can be called from anywhere inside the program whereas import() can be called at the beginning of the file.
// * To use the require() statement, a module must be saved with .js extension as opposed to .mjs when the import() statement is used.
//   ES modules can be loaded dynamically via the import() function unlike require().
//==========================================================================
// How can you enable using the import syntax using node js
//--------------------------------------------------------------------------
// Importing an entire module:
// import * as name from 'module-name'
//--------------------------------------
// Import default export from a module:
// import name from 'module-name'
//--------------------------------------
// Importing a single export from a module:
// import { name } from 'module-name'
//--------------------------------------
// Importing multiple exports from a module:
// import { nameOne , nameTwo } from 'module-name'
//--------------------------------------
// Importing a module for side effects only
// import './module-name'
//--------------------------------------
//==========================================================================
// To enable using the import syntax, uncomment the line below:
//==========================================================================
// import * as app from './app.js';
//==========================================================================
// Give 2 node.js environment variables that are not available
// when using the import syntax.
// Create 3 functions using the export/import syntax.
// Import the file system module using the import syntax.