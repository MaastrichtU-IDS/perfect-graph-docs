---
title: Text
---

## Usage

To use Text on Graph
Check example

```js live=true
<Graph
  style={{ width: "100%", height: 250 }}
  nodes={[
    {
      id: 1,
      position: { x: 10, y: 10 },
      data: { city: "Amsterdam" },
    },
    {
      id: 2,
      position: { x: 300, y: 10 },
      data: { city: "Maastricht" },
    },
  ]}
  edges={[{ id: 51, source: 1, target: 2 }]}
  renderNode={({ item: { data } }) => (
    <Graph.View style={{ width: 100, height: 100 }}>
      <Graph.Text style={{ fontSize: 20 }}>{data.city}</Graph.Text>
    </Graph.View>
  )}
/>
```
