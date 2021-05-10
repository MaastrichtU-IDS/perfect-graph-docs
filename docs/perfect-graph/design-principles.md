---
title: Design Principles
---

Declarative Rendering: We can get benefit React for declarative UIs. You can design views with JSX code. It is way more easier than imperative style. Think about we have a button and we want to attach some properties.

Imperative Way:
```js
button.onclick = function(event) {
  ...
};
button.style.height = 100
button.style.width = 100
```

Declarative Way:
```js
<button
  onClick={function(event) {
    ...
  }}
  style={{
    width: 100,
    height: 100
  }}
/>
```

Component-Based: Decouple the different issues between components. We can create encapsulated components that manage their own state or use prebuilt components. It is simplifying the complex apps. We have couple of primitive components: 
  - [View](/docs/components/view)
  - [Text](/docs/components/text)
  - [Image](/docs/components/image)