# react-hook-recorder

> 

[![NPM](https://img.shields.io/npm/v/react-hook-recorder.svg)](https://www.npmjs.com/package/react-hook-recorder) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-hook-recorder
```

## Usage

```jsx
import React, { Component } from 'react'

import { useMyHook } from 'react-hook-recorder'

const Example = () => {
  const example = useMyHook()
  return (
    <div>{example}</div>
  )
}
```

## License

MIT © [vieduogn](https://github.com/vieduogn)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
