---
title: Introduction
sidebar_label: Introduction
slug: /
---

## Motivation

There are many package to help creating network graphs. These tools are great but not complete with the latest frameworks and design paradigms. We started this project to build a collaborative Knowledge Graph Editor. To achive that goal we need to have a Graph Visualizer on a web browser and it should be written in a declarative way. Because in imperative style we need to call appropriate api functions respect to the data changes like addNode, deleteNode etc. But we just want to change JSON data (node and edge information) and render elements respectively to the changes. 

We used the most used packages to create the API. 
Pixi.js: to render 2D scenes on web browser, it is one of the most performant WEBGL renderer.
Cytoscape.js: to use graph analysis and keep track of the elements' data. It is graph theory (a.k.a. network) library.

