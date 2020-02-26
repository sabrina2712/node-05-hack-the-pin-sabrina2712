# Hack the Pin

> PIN is a 4 digit number!

## 1. Node Module aka the Hacker

### What

- Creates a random 4 (numerical) digit Pin
- is able to post this pin to a URL
- waits for the response of the server
- if the server response with true display in the cli `success`
- if failed show attempts (repaint cli)

```js
const { data } = axios.get("http://localhost:3000/<pin>");
if (data) {
  console.log("success");
}
```

### How

- jest tested (bonus)

## 2. Server aka the Victim

### What

- create a server that creates a pin when started
- it has one endpoint where people can post a pin `[localhost:3000/:pin](http://localhost:3000/:pin)`
- response with true or false if pin matches

## 3. Attack 🔥

- attack your server
- get ip's from class mates and attack their server
- mind your cpu 🙏
