mui-easy-cascader is a cascading selection component library based on [Material UI](https://mui.com/material-ui/).

[Demo](https://bitterteasweetorange.github.io/mui-easy-cascader/?path=/story/easycascaderinput--defalut)

## Install

```
npm install mui-easy-cascader
```

## Usage

```jsx
<EasyCascaderInput<{
    id:string,
    name:string,
    childrenId:string[]
    pathId:string
}>
  data={[
    {
      id: "a",
      name: "a",
      childrenId: ["b"],
    },
    {
      id: "b",
      name: "b",
      childrenId: ["c"],
      pathId: ["a"]
    },
    {
      id: "c",
      name: "c",
      pathId: ["a","b"]
    },
  ]}
  getNodeLabel={(node) => node.name}
  value={value}
  onChange={onChange}
/>
```

## Development

### Scripts

- `dev`: Starts the local Storybook server, use this to develop and preview your components.
- `test`: Runs all your tests with vitest.
- `test:ui`: Runs tests in watch mode.
- `build`: Builds your Storybook as a static web application.
- `build:lib`: Builds your component library with Vite.
- `lint`: Runs ESLint.
- `format`: Formats your code with Prettier.
