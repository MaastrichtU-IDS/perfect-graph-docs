---
title: Image
---

To use Image on Graph

## Examples

```js live=true
<Graph
  style={{ width: "100%", height: 250 }}
  nodes={[
    {
      id: 1,
      position: { x: 10, y: 10 },
      data: {
        image:
          "https://www.biography.com/.image/t_share/MTE4MDAzNDEwNTEzMDA0MDQ2/thomas-edison-9284349-1-402.jpg",
      },
    },
    {
      id: 2,
      position: { x: 300, y: 10 },
      data: {
        image:
          "https://images.unsplash.com/photo-1552529232-9e6cb081de19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      },
    },
  ]}
  edges={[{ id: 51, source: 1, target: 2 }]}
  renderNode={({ item: { data } }) => (
    <Graph.Image
      style={{ width: 100, height: 100 }}
      source={{ uri: data.image }}
    />
  )}
/>
```

---

# Reference

## Props

### `style`

| Type | Required |
| ---- | -------- |
| [PIXIBasicStyle](/docs/type#pixibasicstyle) & [PIXIShapeStyle](/docs/type#pixishapestyle) | No      |

---

### `source`

| Type | Required |
| ---- | -------- |
| { uri: string} | Yes      |

---
