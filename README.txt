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

TESTING APIS
npm install -D vitest msw axios-mock-adapter

CMDS RAN TODAY
 npm i --save-dev @types/jest allows test be found
 npm test
 npm run test:watch
 clear
 npm run dev
 npm install -D vitest msw axios-mock-adapter to test apis
 //
npm install --save-dev @testing-library/react vitest msw
npm install --save-dev axios-mock-adapter
npm install zod  Sanitize API Responses

Use Zod for runtime validation:




Count Functionality:
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App



Security & UX Considerations:
1. API key is stored securely in .env.
2. Error messages are user-friendly.
3. GIFs persist using localStorage.
4. Responsive layout using TailwindCSS.
5. Unit tests with Vitest ensure reliability.
