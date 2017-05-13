Markdown
========

Markdown for dialog projects

Installation
------------

```
npm install --save @dlghq/markdown
```

Usage
-----

```js
import { parse, decorators } from '@dlghq/markdown';

console.log(parse('Hello, *world*!', decorators)); // AST
```

AST for above example would be

```json
[
  {
    "type": "paragraph",
    "content": [
      {
        "type": "text",
        "content": "Hello, "
      },
      {
        "type": "text",
        "content": "world",
        "highlight": "bold"
      },
      {
        "type": "text",
        "content": "!"
      }
    ]
  }
]
```

License
-------
[Apache-2.0](LICENSE)
