# ![](./assets/logo-black-small.png)

Reste C is a lightweight, powerful library for creating logs and various types of responses.

## Installation
This is a [Node.js](https://nodejs.org/en/) module available through the npm registry.

Before installing, [download and install Node.js](https://nodejs.org/en/download/). Node.js 0.10 or higher is required.

NPM repository: [https://www.npmjs.com/package/@reste/c](https://www.npmjs.com/package/@reste/c)

**Installation is done using the npm install command:**

`npm install @reste/c`

## Philosophy
Reste C was created to create a standard and simplify the creation of logs and responses from the server.

## Usage
### Message
Message that replaces a typical console.log
```typescript
import { ResteC, StatusCode } from '@reste/c';

ResteC.message(StatusCode.SUCCESS, `Hello Reste!`);
```

### Response
A response from the server that can be used to impose a standard.
```typescript
import { ResteC, StatusCode } from '@reste/c';

ResteC.response(StatusCode._404, 'Not found');

ResteC.response(StatusCode._200, 'Sample message', {sample: 'sample data', type: 'objects'});
```

## Documentation
### `setOptions`
we can set the settings here

```typescript
ResteC.setOptions({
    raw: true
});
```
- `raw` - changes the colored messages to raw messages

### `message`
The message requires the type and content of the message, however, in addition we can use the 'data' parameter, thanks to which the console will also provide data.

```typescript
const data = {data: 'data!'};

ResteC.message(StatusCode.SUCCESS, `Hello Reste!`);
ResteC.message(StatusCode.SUCCESS, `Hello Reste!`, data);
```

### `response`
The response requires the type and content of the message, but additionally we can use the "date" parameter to return data.

```typescript
const data = {data: 'data!'};

ResteC.response(StatusCode._404, 'Not found');
ResteC.response(StatusCode._200, 'Sample message', data);
```

## People
The original author of Reste X is [Dominik Linkowski](https://github.com/Linkowski).

## License
MIT
