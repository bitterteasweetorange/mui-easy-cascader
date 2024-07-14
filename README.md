[demo](https://bitterteasweetorange.github.io/mui-easy-cascader/?path=/story/easycascaderinput--defalut)

mui-easy-cascader is a cascading selection component library based on [Material UI](https://mui.com/material-ui/).

## Feature

- flat data, connect by id
- search
- highlight keyword
- keyboard event

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
