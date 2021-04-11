---
title: Graph Editor
---

## Usage

To create a GraphEditor easily, you can just pass data and render methods.
Check example

```js live=true
function MyGraphEditor() {
  const [data, setData] = React.useState({
    nodes: [
      { id: 1, position: { x: 10, y: 10 } },
      { id: 2, position: { x: 300, y: 100 } },
    ],
    edges: [{ id: 51, source: 1, target: 2 }],
  });
  return (
    <GraphEditor
      style={{ width: "100%", height: 250 }}
      configExtractor={({ item }) => ({ data: { data: item } })}
      nodes={data.nodes}
      edges={data.edges}
    />
  );
}
```
