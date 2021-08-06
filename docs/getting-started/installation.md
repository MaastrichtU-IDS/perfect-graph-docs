---
title: Installation
---

Please make sure you have a proper setup for a React project.

```js
yarn add perfect-graph @emotion/react @emotion/styled @material-ui/core @material-ui/icons semantic-ui-css semantic-ui-react colay colay-ui immer react-beautiful-dnd @rjsf/core @rjsf/material-ui @rjsf/semantic-ui jsoneditor jsoneditor-react brace
```

So let's start coding

```js
import { Graph } from "perfect-graph";

function MyGraph() {
  return (
    <Graph
      style={{ width: "100%", height: 250 }}
      nodes={[
        { id: 1, position: { x: 10, y: 10 } },
        { id: 2, position: { x: 300, y: 100 } },
      ]}
      edges={[{ id: 51, source: 1, target: 2 }]}
    />
  );
}
```

Furthermore please refer to the Components Section.
