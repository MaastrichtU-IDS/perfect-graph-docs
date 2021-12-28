---
title: View
---

To use View on Graph

## Examples

```js live=true
<Graph
  style={{ width: "100%", height: 250 }}
  nodes={[
    {
      id: '1',
      position: { x: 10, y: 10 },
      data: { color: 10066329 },
    },
    {
      id: '2',
      position: { x: 300, y: 10 },
      data: { color: 4149685 },
    },
  ]}
  edges={[{ id: 'edge:1', source: '1', target: '2' }]}
  renderNode={({ item: { data } }) => (
    <Graph.View
      width={100}
      height={100}
      fill={data.color}
    />
  )}
/>
```



---

# Reference

## Props

[PIXI.Graphics React Component](https://reactpixi.org/components/graphics)

Ƭ **ViewProps**: `React.ComponentProps`<typeof `InletGraphics`\> & { `children?`: `React.ReactNode` ; `fill?`: `number` ; `radius?`: `number`  }

