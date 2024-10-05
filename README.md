# star-destroyer-react-app
- practice: useEffect, useRef

an application that scans space for stars. Every 2.5 seconds, it finds a new star in a random position. With the power vested in your application, you will be able to click on these stars and destroy them on contact.

## Component Design
The Spacecraft Builder application will consist of several components, each dedicated to handling a distinct segment of the application's functionality. Here's a breakdown of the components you'll develop and their roles:

- `Space` represents the vast expanse of space. It is responsible for generating stars at random locations within its bounds every 2.5 seconds and manages the lifecycle of these stars.
- `Star` represents individual stars that are randomly placed in space. These components need to be focusable and destructible upon user interaction.