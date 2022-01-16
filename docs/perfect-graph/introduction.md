---
title: Introduction
sidebar_label: Introduction
slug: /
---

## Motivation

There are many package to help creating network graphs. These tools are great but not complete with the latest frameworks and design paradigms. The existing tools to view or create a knowledge or property graph have a lot of complexity. Some of them do not support smart layouts options for the graph, so the user views a dense graph and does not have a clear vision for navigating through the graph easily. On the other hand, perfect-graph has a lot of features that make the tool easy to use. 
- Layout support
- Action history support
- Built-in data editor
- Navigate through connected elements
- Query builder to fetch data
- Visualization settings
- Filter graph 
- Clustering
- Record the session to a file or video
To filter or visualize the graph meaningfully, we support the statistics. We can create graph statistics from the data and use the statistics for filtering or visualization. The statistics include:
- Page rank
- Degree
- In Degree
- In Degree Centrality
- Relative In Degree
- Out Degree
- Out Degree Centrality
- Betweenness Centrality
- Closeness Centrality
In case of a need, we can populate more statistics.
When you have these powerful features, the tool can have a beneficial impact on the following domains:
- Genetic Research
- Space Research
- Environmental Issues Research
Because these domains have enormous data and the data is well connected. So representing the data as a graph and using the tool will simplify the researchers' work.

There are many innovative sides of the project:
Collaborative Graph Curation: You can edit the graph with your coworkers at the same time
You can easily attach a project management tool to track data changes
You will have smart statistics built into the tool

Some other works made for related purposes:
- Graphistry: https://www.graphistry.com/
- Linkurious: https://linkurious.com/
- Kineviz: https://www.kineviz.com/

We started this project to build a collaborative Knowledge Graph Editor. To achive that goal we need to have a Graph Visualizer on a web browser and it should be written in a declarative way. Because in imperative style we need to call appropriate api functions respect to the data changes like addNode, deleteNode etc. But we just want to change JSON data (node and edge information) and render elements respectively to the changes. 

We used the most used packages to create the API. 
Pixi.js: to render 2D scenes on web browser, it is one of the most performant WEBGL renderer.
Cytoscape.js: to use graph analysis and keep track of the elements' data. It is graph theory (a.k.a. network) library.

