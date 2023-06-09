## Selected functionality demo

All users can view all posts, ordered by most recent post edit, in the home feed. However, the my posts and make post routes are protected unless a user logs in with a Google account. Once logged in, a user can then make posts and also heart and comment on other posts. Users are prevented from hearting a post more than once.

![Image](/demo_images/Photo_Sharing_App.png)

## TODO

High priority

- Allow user to upload image for a post
- Allow sign in with email and password
- Make nav bar responsive
- Check XSS concerns with using display name in UI in conjunction with Google authentication. Seems to be just the person's name, so not sure if the concern is warranted in this auth scenario
- Security rules for Firestore once deploying to Vercel
- Implement ability to heart comments - once per signed in user - and disable button as appropriate

Low priority

- Consider refactoring any pages to server side rendering (consider tradeoffs)
- Add try catch where appropriate to handle errors - looking to get basic functionality implemented first
- Consider ways to rerender page after CRUD operation rather than refreshing the page (only occuring for some pages with next router refresh) - could use optimistic UI or explore other techniques
- Review code and consider refactoring any repeated MUI component patterns into custom components
- Clean up typescript types
- See if less verbose solution to passing props from Comments component to Comment components
- Make nav bar sticky using position prop for AppBar component versus current implementation that overlays nav bar over an empty nav bar with extra padding to prevent covering page content
- Double check for other solutions in sign-up page to prevent use of "!" to assert that the credential cannot be null

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
