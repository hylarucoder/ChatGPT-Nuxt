/**
 * This is the API-handler of your app that contains all your API routes.
 * On a bigger app, you will probably want to split this file up into multiple files.
 */
import { createNuxtApiHandler } from "trpc-nuxt"
import { z } from "zod"
import { publicProcedure, router } from "~/server/trpc/trpc"

export const appRouter = router({
  hello: publicProcedure
    // This is the input schema of your procedure
    .input(
      z.object({
        text: z.string().nullish(),
      })
    )
    .query(({ input }) => {
      // This is what you're returning to your client
      return {
        greeting: `hello ${input?.text ?? "world"}`,
      }
    }),
})

// export only the type definition of the API
// None of the actual implementation is exposed to the client
export type AppRouter = typeof appRouter

// export API handler
export default createNuxtApiHandler({
  router: appRouter,
  createContext: () => ({}),
})
