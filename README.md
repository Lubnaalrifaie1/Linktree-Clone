# LinkTree Clone

This project is my attempt at recreating the amazing system that Linktree has developed. I aim to use Next.js and Tailwind CSS to build the user admin side, including login and sign-up functionality, as well as the user links page.

## Description

LinkTree is a popular platform that allows users to create a personalized landing page with multiple links to their various social media profiles or websites. By cloning LinkTree, I hope to enhance my skills as a developer and gain a deeper understanding of Next.js and Tailwind CSS.

## Features

- User authentication: Implement a secure login and sign-up system for users.
- User admin dashboard: Develop a user-friendly interface where users can manage their links and customize their profiles.
- User links page: Create a page where users can add, edit, and organize their links with custom names and descriptions.

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
   git clone https://github.com/fabiconcept/linktree.git
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
