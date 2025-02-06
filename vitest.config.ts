// vitest.config.ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
    plugins: [react()], // ✅ Use the SWC plugin for tests as well
    test: {
      environment: 'jsdom', // ✅ Use jsdom for DOM testing (for React components)
      globals: true,        // ✅ Enable globals like `describe`, `it`, `expect` (like Jest)
      setupFiles: ['./src/test/setup.ts'], // ✅ Optional: For global test setup
      include: ["__tests__/**/*.test.ts*"] // ✅ Ensures Vitest runs tests from the `__tests__/` folder
    },
  });
  // If you're using Vitest, you only need to configure the test files in the vitest.config.ts for your testing environment. You don't need to include the __tests__ directory in the tsconfig.app.json file unless you specifically need TypeScript to treat the test files as part of the application (which is uncommon for testing purposes).

  // If you want TypeScript to type-check your test files and include them in the overall compilation, you would need to keep the "include": ["__tests__/**/*"] in your tsconfig.app.json.

// Vite and Vitest integrate (or rather, don't fully integrate in the way you might initially expect).

//     The Difference Between vite.config.ts and vitest.config.ts:

//     While both configuration files use a similar structure and might seem redundant at first glance, they serve distinct purposes:

//     vite.config.ts: This file is the configuration file for Vite itself. It controls how Vite bundles your application for development and production.  It handles things like:

//     Plugins (like @vitejs/plugin-react-swc)
//     Build options (output directory, asset handling, etc.)
//     Server configuration (port, proxy settings, etc.)
//     vitest.config.ts: This file is the configuration file for Vitest. It controls how Vitest runs your tests. It handles things like:

//     Test environment (jsdom, node)
//     Global setup and teardown
//     Reporters (how test results are displayed)
//     Coverage configuration
//     Transforming code for tests (this is where the overlap with Vite used to be more significant, but Vitest now handles this itself)
//     Why Two Separate Files?

//     The key reason for having two separate configuration files is that Vite and Vitest, while designed to work well together, are separate tools.  They are not just different modes of the same tool. They have different responsibilities.

//     Vite's Focus: Vite's primary concern is building and serving your application code efficiently.
//     Vitest's Focus: Vitest's primary concern is running your tests and providing a good developer experience for testing.
//     The Overlap (and Why It's Less Now):

//     Historically, there was more overlap.  Vitest used to rely heavily on Vite's transform pipeline to process your code for testing.  This meant that your vite.config.ts played a larger role in how your tests were executed.

//     However, Vitest has evolved. It now has its own built-in transformer based on SWC (the same one used by the React SWC plugin). This means Vitest can now handle code transformation independently of Vite.  This is a good thing because it makes Vitest more robust and less dependent on the specifics of your Vite configuration.

//     In Practice:

//     Even though Vitest has its own transformer, there are still cases where you might want to coordinate configurations.  For example, if you have custom resolvers or aliases in your vite.config.ts, you might need to replicate some of that configuration in your vitest.config.ts so that your tests can find your modules correctly.  However, the core configuration for testing (environment, reporters, etc.) will always reside in vitest.config.ts.

//     In short:  Think of vite.config.ts as configuring your application and vitest.config.ts as configuring your tests. They are related but separate.  You need both.
