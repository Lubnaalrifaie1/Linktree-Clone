# LinkTree Clone

In an attempt to mirror Linktree's impressive system, I'm working on this project. Using Next.js and Tailwind CSS, my focus is on crafting the user admin side, incorporating features such as login, sign-up, and the user links page.

## Description

LinkTree stands out as a widely used platform enabling users to fashion a customized landing page featuring multiple links to their diverse social media profiles or websites. Through replicating LinkTree, my aim is to elevate my proficiency as a developer and cultivate a more profound comprehension of Next.js and Tailwind CSS.

## Features

- Authentication System: Establish a robust login and sign-up mechanism to ensure secure user access.
- Admin Dashboard for Users: Construct an intuitive interface, allowing users to effortlessly manage their links and personalize their profiles.
- Links Management Page: Formulate a dedicated page enabling users to add, modify, and organize their links, complete with custom names and descriptions.

## Technologies Used

1. **React Beautiful DnD:** A library for implementing drag and drop functionality in React.
2. **React Hot Toast:** A toast notification library for React.
3. **React Icons:** A collection of popular icons for React applications.
4. **Next.js:** A React framework for building server-rendered applications.
5. **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
6. **react-share:** Used to handle sharing user links to multiple social media platforms.
7. **qrcode.react:** Used to create a unique user QR Code.
8. **react-confetti:** Used to design the confetti theme background.
9. **js-cookie:** Used to help create, get, delete, and edit cookie data.
10. **crypto-js:** Used to encrypt my Cookie Session data.
11. **bad-words:** Used to filter out sensitive words from the Links Page (this only applies when no warning is issued).

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Lubnaalrifaie1/linktree-clone.git
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the following environment variables with your Firebase project configuration details:
   ```plaintext
   NEXT_PUBLIC_apiKey="YOUR_API_KEY"
   NEXT_PUBLIC_authDomain="YOUR_AUTH_DOMAIN"
   NEXT_PUBLIC_projectId="YOUR_PROJECT_ID"
   NEXT_PUBLIC_storageBucket="YOUR_STORAGE_BUCKET"
   NEXT_PUBLIC_messagingSenderId="YOUR_MESSAGING_SENDER_ID"
   NEXT_PUBLIC_appId="YOUR_APP_ID"
   NEXT_PUBLIC_measurementId="YOUR_MEASUREMENT_ID"
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

- Open your web browser and navigate to `http://localhost:3000` to access the application.

## Contribution

Contributions to this project are welcome. If you have any ideas, suggestions, or bug fixes, please submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- LinkTree for the inspiration and idea behind this project.
