# Clever's Frontend Coding Interview
👋 Hello!, Hola!, Witam!

Thank you for taking the time to interview with Clever. This coding challenge is meant to be a _short_ exercise to see how you code on the frontend. Please don't spend more than a couple hours, and certainly don't stress. Treat it like you would any other coding task. Throw on some tunes 🎶, sit back, relax 😌, and code!

### Requirements
- Create a small web app using React and Typescript.
- Our preference is with NextJs.
- However, please use either `npm` or `yarn`.
- It will utilize the Pexels API to pull in some photos. Details below.
- We'd like you to create two (mobile **responsive**) pages:
  1. Sign in
  2. All photos
- You can fork this repo and commit your code there. Once done, please add the following users as members so we can review:
  - James Crain (@imjamescrain)
  - Jimmy Lien (@jlien)
  - Nick Clucas (@nickcluc)
  - Ryan McCue (@rymccue)
- We'll circle back with you and review 1:1.

### Details
- Mocks for these pages are provided in Figma. You should have been sent an invite to access them, if not let us know.
  - [Figma Mocks](https://www.figma.com/file/wr1seCuhlRtoFGuz1iWgyF/Frontend-Coding-Mocks?type=design&node-id=0%3A1&mode=design&t=Uw1av3TypDUDcLAd-1)
  - We are looking for **attention to detail** when implementing these. If a font size is 14px in the mocks, please make sure it renders that way in your app.
- There is also a logo and an icon provided (SVGs) included in this repo.
- Pexels API Info
  - Api Key: `Mz0iC21IFLz9HuN8ypIbJ54l8OuGnpW2IsVoQrYBEyagQXt1YeBEA7H0`
  - Include an `Authorization` header with this value.
  - Endpoint: https://api.pexels.com/v1/search?query=nature&per_page=10
  - Documenation: https://www.pexels.com/api/documentation/#photos-search
- Make the "Sign in" page functional. However, you can spoof authentication any way you'd like (eg. save a value to local storage, etc).
- Make "All photos" require authentication to access.
- Only need to show 10 photos on the "All photos" page. Paging is not required.
- Photos should be like/unlikeable.
- We want to see that you have a basic understanding of React concepts (eg. contexts, callbacks, etc.).
- We also want to see you know how to write tests. Nothing fancy, just the basics are fine.

### Final Thoughts

Remember, please don't spend too much time on this. In fact, save a little time and **add a section to the README** outlining what else you'd do differently to make this a production ready app.

**Any questions**, just let us know. Send emails to <a href="mailto:james.crain@movewithclever.com">james.crain@movewithclever.com</a>. Good luck!

## Submission notes

### Alterations

1. The Figma mock specified that the height of the text content in the Photo component should be 16px. This caused letters such as `g` to have their bottom cut when clamping the `alt` content to fit into a single line. I opted for mantaining the height described in the mocks, even with the letter cutting, to mantain visual consistency between Figma and application.
2. The padding for the mobile version is, respectively, 35px horizontally/36px vertically for the login page, and 34px horizontally/36px vertically for the all photos page. To keep consistency in user experience, I opted for keeping the padding as 34px horizontally/36px vertically for both pages.

### Additional features to make the app production-ready

To make this app production ready, I would:

1. Implement a complete authentication solution, integrating the app with a back-end and handling and saving a JWT token.
2. Implement a pagination system for loading more photos.
3. Improve loading states and user experience by using `<Suspense>` where appropriate and making use of Next.js's `loading.tsx` special files.
4. Improve user experience by implementing hover, active and loading visual states for the "Sign In" button.