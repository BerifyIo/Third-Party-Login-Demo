This is an example project demonstrating how to implement third-party login using Berify with the Next.js framework. Please adjust the steps according to your project structure.

## Step 1.Install Packages:

```bash
npm install
# or
yarn
```

## Step 2.Install Berify Package:

```bash
npm install @bytexbyte/berify-app-api
# or
yarn add @bytexbyte/berify-app-api
```
## Step 3.Import the package and configure the parameters (example: pages/api/callback/berify.ts)

`host`: Your domain name (For testing, please use https://sandbox-staging-app.berify.io)
`secretKey`: Fixed as "App-Berify-Secret"
`secret`: Your API key (If not obtained yet, please inform us to generate one for you)

## Step 4.Start the Project by running

```bash
npm run dev
# or
yarn dev
```

## Step 5.
Once the project is running at http://localhost:3000, navigate to the Home page. This page is the first step for third-party login. Follow the provided steps to complete the login process.

If you need to connect to projects on other domains, please inform us. We will assist in configuring domain and redirect_url settings to ensure the proper functioning of third-party login.