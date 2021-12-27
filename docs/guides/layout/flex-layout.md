---
title: Layout
---

```js live=true
<Graph
  style={{ width: "100%", height: 250 }}
  nodes={[
    { id: 1, position: { x: 10, y: 10 } },
    { id: 2, position: { x: 300, y: 100 } },
  ]}
  edges={[{ id: 51, source: 1, target: 2 }]}
  renderNode={({ item }) => (
    <Graph.View
      width={100}
      height={100}
    >
      <Graph.Text>Heyy</Graph.Text>
    </Graph.View>
  )}
/>
```
