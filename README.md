# React Window Size Hook

A React hook that re-renders a component when the browser window is resized.

## Usage

```
import React from 'react';
import { useWindowSize } from 'react-window-size-hook';

function MyComponent() {
  const [width, height] = useWindowSize();

  return (
    <div>
      Window width is {width}px and height is {height}px
    </div>
  )
}
```

It's pretty straightforward - it takes no arguments and returns an array containing the dimensions of the window. Bam. Done.

## Live testing

The root of this project has been created using `create-react-app`, and it's an app that simply displays the window dimensions. To run it:

```
npm start
```

## Unit Testing
```
npm test
```

## Who did this?
Carlos Zanella. I'll update this with a link to my online portfolio as soon as it's done (don't hold your breath).

## License
MIT
