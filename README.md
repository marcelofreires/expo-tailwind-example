# expo-tailwind-example
This is an example to answer [question 71600495 at stackoverflow.com](https://stackoverflow.com/questions/71600495/why-is-my-tailwind-ract-native-not-working) about [tailwind-rn](https://github.com/vadimdemedes/tailwind-rn).

## See the project on a device
I published this project at Expo Dev Tools. Then you can scan the project QR Code to see the result on a device.

![expo-tailwind-example](./assets/expo-go.svg)

Or access the [this link](https://expo.dev/@marcelofreires/expo-tailwind-example) on your device.

## Run this project
To run this example you must install the dependencies.
```bash
yarn
```

Run the `tailwind-rn` to generate the styles.
```bash
yarn build:tailwind
```

or watch the changes with:
```bash
yarn dev:tailwind
```

And finally, to build the project you must run the following commands on your terminal.

To build for iOS.
```bash
yarn ios
```

And to build for Android.
```bash
yarn android
```
