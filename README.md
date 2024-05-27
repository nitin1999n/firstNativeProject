This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.

## If Error occure 
FAILURE: Build failed with an exception.
Where:
Settings file 'D:\Native Project\android\Styling\secondProject\android\settings.gradle' line: 2

What went wrong:
A problem occurred evaluating settings 'secondProject'.
> Could not read script 'D:\Native Project\android\Styling\secondProject\node_modules\@react-native-community\cli-platform-android\native_modules.gradle' as it does not exist.

Try:
> Run with --stacktrace option to get the stack trace.
> Run with --info or --debug option to get more log output.
> Run with --scan to get full insights.
> Get more help at https://help.gradle.org.

BUILD FAILED
Then try this

The error message indicates that the build process is failing because it cannot find the `native_modules.gradle` file in the specified path. This issue often arises due to an incomplete or corrupted installation of the project dependencies.

Step-by-Step Solution
1. Ensure Correct Project Setup:
   Make sure you have followed all the steps in setting up your development environment as outlined in the React Native documentation.

2. Clean the Project:
   Sometimes, residual files can cause issues. Clean the project by running the following commands in the project directory:

```sh
   cd android
   ./gradlew clean
   cd ..
```
3. Reinstall Node Modules:
   Delete the `node_modules` folder and reinstall the dependencies.
   
   ```sh
   rm -rf node_modules
   npm install
   ```
   Alternatively, if you're using Yarn:
   ```sh
   yarn install
   ```
4. Ensure All Dependencies are Installed Correctly:
   Sometimes dependencies might not install properly. Run:
   ```sh
   npm install @react-native-community/cli-platform-android
   ```
   or if using Yarn:
   ```sh
   yarn add @react-native-community/cli-platform-android
   ```
5. Update React Native CLI:
   Ensure you're using the latest version of React Native CLI.
   ```sh
   npm install -g react-native-cli
   ```
6. Run React Native Doctor:
   This command helps identify common issues in your environment.
   ```sh
   npx react-native doctor
   ```
   Follow the recommendations provided by the doctor command.
7. Check `settings.gradle` File:
   Open `android/settings.gradle` and ensure it includes the correct path to `native_modules.gradle`. It should look something like this:
   ```sh
   rootProject.name = 'secondProject'
   apply from: file("$rootDir/../node_modules/@react-native-community/cli-platform-android/native_modules.gradle") // This should match your file structure
   ```
8. Check for Gradle Wrapper:
   Ensure you have the correct Gradle version. In the `android/gradle/wrapper/gradle-wrapper.properties` file, verify the distribution URL:
   ```properties
   distributionUrl=https\://services.gradle.org/distributions/gradle-6.9-all.zip
   ```
9. Run the Build Command Again:
   After following the steps above, try running the project again.
   ```sh
   npx react-native run-android
   ```
#Additional Tips:
   >Verbose Logging: If the problem persists, run the build command with verbose logging to get more detailed output:
   ```sh
   npx react-native run-android --verbose
   ```
   >Check for Platform-Specific Issues: Ensure your Android SDK and emulator are properly configured and that your environment variables are correctly set.

If you follow these steps and ensure everything is correctly set up, your project should build successfully. If you continue to face issues, providing more detailed logs can help in diagnosing the problem further.
