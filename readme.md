# nodejs-color-logger
---
Simple and easy to use console log utilty for node.js applications

### Functions
- `.color('color')`
- `.style('style')`
- `.type('type')`
- `.timestamp('format [optional]')`
- `.log(...args)`


### Examples
```js
logger.color('green').log('Connected to Socket')
```
![](https://d0dge.isfucking.pro/iTk52I.png)
```js
logger.type('debug').color('brightGreen').log('Connected to Socket')
```
![](https://d0dge.isfucking.pro/bZa7tp.png)
```js
logger.style('underscore').log('Connected to Socket')
```
![](https://d0dge.isfucking.pro/2fVXX3.png)
```js
logger.type('info').timestamp().style('italic').color('green').log("Connected to Socket")
```
![](https://d0dge.isfucking.pro/YmLHYs.png)

The positioning of the elments doesnt matter with one execption, the log function have to called at least position.
### Options
| colors | styles | types |
|--------|--------|-------|
| black | bold | success |
| red | dim | error |
| green | italic | warning |
| yellow | underscore  | info |
| blue | reverse | debug |
| magenta | hidden | |
| cyan | strikethrough | |
| white | backoneline | |
---
**_INFO:_**
You can use every color as brighter version by adding a bright before and capitalize the first letter of the color

---
