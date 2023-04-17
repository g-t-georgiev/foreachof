# Description

ForEachOf is a utility function similiar to the idea of Array.prototype.forEach method executing a callback function on each element of an array, but in this case in a flattening manner, so you could have an infinite levels of nesting and it will go through every element, with hierarchical order in mind.

# Installation 

```
npm i @g.t.georgiev/foreachof
```

# Usage and examples 

```
import { forEachOf } from '@g.t.georgiev/foreachof';

const nestedArray = [ 1, 2, 3, [ 3.1, 3.2, 3.3, [ 3.31, 3.32 ] ], 4, 5, 6 ];
const callback = function (entry) {
    console.log(entry);
};

// Executes callback on each item of the provided array
// Optionally, starting index can be provided, defaults to 0
forEachOf(nestedArray, callback, startIndex = 0);
```