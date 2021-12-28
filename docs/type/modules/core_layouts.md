[perfect-graph](../README.md) / [Modules](../modules.md) / core/layouts

# Module: core/layouts

## Table of contents

### Properties

- [default](core_layouts.md#default)

## Properties

### default

• **default**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `avsdf` | `Object` |
| `avsdf.animate` | ``"end"`` |
| `avsdf.animateFilter` | () => `boolean` |
| `avsdf.animationDuration` | ``1000`` |
| `avsdf.animationEasing` | ``"linear"`` |
| `avsdf.animationThreshold` | ``250`` |
| `avsdf.fit` | ``true`` |
| `avsdf.name` | ``"avsdf"`` |
| `avsdf.nodeSeparation` | ``60`` |
| `avsdf.padding` | ``10`` |
| `avsdf.refresh` | ``30`` |
| `avsdf.ungrabifyWhileSimulating` | ``false`` |
| `avsdf.ready` | [object Object] |
| `avsdf.stop` | [object Object] |
| `breadthfirst` | `Object` |
| `breadthfirst.animate` | ``"end"`` |
| `breadthfirst.animateFilter` | () => `boolean` |
| `breadthfirst.animationDuration` | ``1000`` |
| `breadthfirst.animationEasing` | ``"linear"`` |
| `breadthfirst.animationThreshold` | ``250`` |
| `breadthfirst.avoidOverlap` | ``true`` |
| `breadthfirst.circle` | ``false`` |
| `breadthfirst.directed` | ``false`` |
| `breadthfirst.fit` | ``true`` |
| `breadthfirst.grid` | ``false`` |
| `breadthfirst.maximal` | ``false`` |
| `breadthfirst.name` | ``"breadthfirst"`` |
| `breadthfirst.nodeDimensionsIncludeLabels` | ``false`` |
| `breadthfirst.padding` | ``30`` |
| `breadthfirst.ready` | `undefined` |
| `breadthfirst.roots` | `undefined` |
| `breadthfirst.spacingFactor` | ``1.75`` |
| `breadthfirst.stop` | `undefined` |
| `breadthfirst.transform` | (`node`: `any`, `position`: `any`) => `any` |
| `circle` | `Object` |
| `circle.animate` | ``"end"`` |
| `circle.animateFilter` | () => `boolean` |
| `circle.animationDuration` | ``1000`` |
| `circle.animationEasing` | ``"linear"`` |
| `circle.animationThreshold` | ``250`` |
| `circle.avoidOverlap` | ``true`` |
| `circle.clockwise` | ``true`` |
| `circle.fit` | ``true`` |
| `circle.name` | ``"circle"`` |
| `circle.nodeDimensionsIncludeLabels` | ``false`` |
| `circle.padding` | ``30`` |
| `circle.radius` | `undefined` |
| `circle.ready` | `undefined` |
| `circle.sort` | `undefined` |
| `circle.spacingFactor` | `undefined` |
| `circle.startAngle` | `number` |
| `circle.stop` | `undefined` |
| `circle.sweep` | `undefined` |
| `circle.transform` | (`node`: `any`, `position`: `any`) => `any` |
| `cise` | `Object` |
| `cise.allowNodesInsideCircle` | ``false`` |
| `cise.animate` | ``"end"`` |
| `cise.animateFilter` | () => `boolean` |
| `cise.animationDuration` | ``1000`` |
| `cise.animationEasing` | ``"linear"`` |
| `cise.animationThreshold` | ``250`` |
| `cise.fit` | ``true`` |
| `cise.gravity` | ``0.25`` |
| `cise.gravityRange` | ``3.8`` |
| `cise.idealInterClusterEdgeLengthCoefficient` | ``1.4`` |
| `cise.maxRatioOfNodesInsideCircle` | ``0.1`` |
| `cise.name` | ``"cise"`` |
| `cise.nodeRepulsion` | ``4500`` |
| `cise.nodeSeparation` | ``12.5`` |
| `cise.padding` | ``30`` |
| `cise.refresh` | ``10`` |
| `cise.springCoeff` | ``0.45`` |
| `cise.ready` | [object Object] |
| `cise.stop` | [object Object] |
| `cola` | `Object` |
| `cola.alignment` | `undefined` |
| `cola.allConstIter` | `undefined` |
| `cola.animate` | ``"end"`` |
| `cola.animateFilter` | () => `boolean` |
| `cola.animationDuration` | ``1000`` |
| `cola.animationEasing` | ``"linear"`` |
| `cola.animationThreshold` | ``250`` |
| `cola.avoidOverlap` | ``true`` |
| `cola.convergenceThreshold` | ``0.01`` |
| `cola.edgeJaccardLength` | `undefined` |
| `cola.edgeLength` | `undefined` |
| `cola.edgeSymDiffLength` | `undefined` |
| `cola.fit` | ``true`` |
| `cola.flow` | `undefined` |
| `cola.gapInequalities` | `undefined` |
| `cola.handleDisconnected` | ``true`` |
| `cola.maxSimulationTime` | ``4000`` |
| `cola.name` | ``"cola"`` |
| `cola.nodeDimensionsIncludeLabels` | ``false`` |
| `cola.padding` | ``30`` |
| `cola.randomize` | ``false`` |
| `cola.refresh` | ``1`` |
| `cola.unconstrIter` | `undefined` |
| `cola.ungrabifyWhileSimulating` | ``false`` |
| `cola.userConstIter` | `undefined` |
| `cola.nodeSpacing` | [object Object] |
| `cola.ready` | [object Object] |
| `cola.stop` | [object Object] |
| `concentric` | `Object` |
| `concentric.animate` | ``"end"`` |
| `concentric.animateFilter` | () => `boolean` |
| `concentric.animationDuration` | ``1000`` |
| `concentric.animationEasing` | ``"linear"`` |
| `concentric.animationThreshold` | ``250`` |
| `concentric.avoidOverlap` | ``true`` |
| `concentric.clockwise` | ``true`` |
| `concentric.concentric` | (`node`: `any`) => `any` |
| `concentric.equidistant` | ``false`` |
| `concentric.fit` | ``true`` |
| `concentric.height` | `undefined` |
| `concentric.levelWidth` | (`nodes`: `any`) => `number` |
| `concentric.minNodeSpacing` | ``10`` |
| `concentric.name` | ``"concentric"`` |
| `concentric.nodeDimensionsIncludeLabels` | ``false`` |
| `concentric.padding` | ``30`` |
| `concentric.ready` | `undefined` |
| `concentric.spacingFactor` | `undefined` |
| `concentric.startAngle` | `number` |
| `concentric.stop` | `undefined` |
| `concentric.sweep` | `undefined` |
| `concentric.transform` | (`node`: `any`, `position`: `any`) => `any` |
| `concentric.width` | `undefined` |
| `cose` | `Object` |
| `cose.animate` | ``"end"`` |
| `cose.animateFilter` | () => `boolean` |
| `cose.animationDuration` | ``1000`` |
| `cose.animationEasing` | ``"linear"`` |
| `cose.animationThreshold` | ``250`` |
| `cose.componentSpacing` | ``40`` |
| `cose.coolingFactor` | ``0.99`` |
| `cose.edgeElasticity` | (`edge`: `any`) => `number` |
| `cose.fit` | ``true`` |
| `cose.gravity` | ``1`` |
| `cose.idealEdgeLength` | (`edge`: `any`) => `number` |
| `cose.initialTemp` | ``1000`` |
| `cose.minTemp` | ``1`` |
| `cose.name` | ``"cose"`` |
| `cose.nestingFactor` | ``1.2`` |
| `cose.nodeDimensionsIncludeLabels` | ``false`` |
| `cose.nodeOverlap` | ``4`` |
| `cose.nodeRepulsion` | (`node`: `any`) => `number` |
| `cose.numIter` | ``1000`` |
| `cose.padding` | ``30`` |
| `cose.randomize` | ``false`` |
| `cose.refresh` | ``20`` |
| `cose.ready` | [object Object] |
| `cose.stop` | [object Object] |
| `dagre` | `Object` |
| `dagre.animate` | ``"end"`` |
| `dagre.animateFilter` | () => `boolean` |
| `dagre.animationDuration` | ``1000`` |
| `dagre.animationEasing` | ``"linear"`` |
| `dagre.animationThreshold` | ``250`` |
| `dagre.edgeSep` | `undefined` |
| `dagre.fit` | ``true`` |
| `dagre.name` | ``"dagre"`` |
| `dagre.nodeDimensionsIncludeLabels` | ``false`` |
| `dagre.nodeSep` | `undefined` |
| `dagre.padding` | ``30`` |
| `dagre.rankDir` | `undefined` |
| `dagre.rankSep` | `undefined` |
| `dagre.ranker` | `undefined` |
| `dagre.spacingFactor` | `undefined` |
| `dagre.edgeWeight` | [object Object] |
| `dagre.minLen` | [object Object] |
| `dagre.ready` | [object Object] |
| `dagre.stop` | [object Object] |
| `dagre.transform` | [object Object] |
| `euler` | `Object` |
| `euler.animate` | ``"end"`` |
| `euler.animateFilter` | () => `boolean` |
| `euler.animationDuration` | ``1000`` |
| `euler.animationEasing` | ``"linear"`` |
| `euler.animationThreshold` | ``250`` |
| `euler.avoidOverlap` | ``true`` |
| `euler.dragCoeff` | ``0.02`` |
| `euler.gravity` | ``-1.2`` |
| `euler.mass` | (`node`: `any`) => `number` |
| `euler.maxIterations` | ``1000`` |
| `euler.movementThreshold` | ``1`` |
| `euler.name` | ``"euler"`` |
| `euler.padding` | ``30`` |
| `euler.pull` | ``0.001`` |
| `euler.randomize` | ``false`` |
| `euler.refresh` | ``10`` |
| `euler.springCoeff` | (`edge`: `any`) => `number` |
| `euler.springLength` | (`edge`: `any`) => `number` |
| `euler.theta` | ``0.666`` |
| `euler.timeStep` | ``20`` |
| `euler.ungrabifyWhileSimulating` | ``false`` |
| `euler.ready` | [object Object] |
| `euler.stop` | [object Object] |
| `grid` | `Object` |
| `grid.animate` | ``"end"`` |
| `grid.animateFilter` | () => `boolean` |
| `grid.animationDuration` | ``1000`` |
| `grid.animationEasing` | ``"linear"`` |
| `grid.animationThreshold` | ``250`` |
| `grid.avoidOverlap` | ``true`` |
| `grid.avoidOverlapPadding` | ``10`` |
| `grid.cols` | `undefined` |
| `grid.condense` | ``false`` |
| `grid.fit` | ``true`` |
| `grid.name` | ``"grid"`` |
| `grid.nodeDimensionsIncludeLabels` | ``false`` |
| `grid.padding` | ``30`` |
| `grid.position` | (`node`: `any`) => `void` |
| `grid.ready` | `undefined` |
| `grid.rows` | `undefined` |
| `grid.sort` | `undefined` |
| `grid.spacingFactor` | `undefined` |
| `grid.stop` | `undefined` |
| `grid.transform` | (`node`: `any`, `position`: `any`) => `any` |
| `klay` | `Object` |
| `random` | `Object` |
| `random.animate` | ``"end"`` |
| `random.animateFilter` | () => `boolean` |
| `random.animationDuration` | ``1000`` |
| `random.animationEasing` | ``"linear"`` |
| `random.animationThreshold` | ``250`` |
| `random.fit` | ``true`` |
| `random.name` | ``"random"`` |
| `random.padding` | ``30`` |
| `random.ready` | `undefined` |
| `random.stop` | `undefined` |
| `random.transform` | (`node`: `any`, `position`: `any`) => `any` |
| `spread` | `Object` |
| `spread.animate` | ``"end"`` |
| `spread.animateFilter` | () => `boolean` |
| `spread.animationDuration` | ``1000`` |
| `spread.animationEasing` | ``"linear"`` |
| `spread.animationThreshold` | ``250`` |
| `spread.expandingFactor` | ``-1`` |
| `spread.fit` | ``true`` |
| `spread.maxExpandIterations` | ``4`` |
| `spread.minDist` | ``20`` |
| `spread.name` | ``"spread"`` |
| `spread.padding` | ``20`` |
| `spread.prelayout` | `Object` |
| `spread.prelayout.name` | ``"cose"`` |
| `spread.randomize` | ``false`` |
| `spread.ready` | `undefined` |
| `spread.stop` | `undefined` |
