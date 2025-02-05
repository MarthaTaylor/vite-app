✅ You don’t need @types/jest when using Vitest! Just ensure "types": ["vitest/globals"] is in tsconfig.json.
✅ Vitest can support tests in a separate tests/ folder by updating vitest.config.ts.
✅ Adjust import paths in test files (import HelloWorld from "../../src/components/HelloWorld") when using a separate folder.
✅ Ensure setup.ts is in src/test/ for proper Jest DOM setup.


Diff btw two different TypeScript configurations:

A single tsconfig.json with everything in it (first example)
A modular approach with multiple tsconfig files (tsconfig.json, tsconfig.app.json, tsconfig.node.json)
Which is better?
➡️ For larger, scalable projects, the modular approach (option 2) is the better practice.
➡️ For small projects, a single tsconfig.json is fine.

Where Should the TypeScript Configuration Go?
Since we are using a modular TypeScript config setup (tsconfig.app.json and tsconfig.node.json), the "compilerOptions" settings should be distributed logically:
