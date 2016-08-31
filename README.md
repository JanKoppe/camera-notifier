# Camera Operator notifier

I wrote this simple tool for a member of the awesome [warpzone](https://warpzone.ms) hackerspace. It can be used to notify your camera operators (or anyone, really) via their smartphone browsers with a big, fat, red display.

## Usage

### Server setup

It uses a node.js server, so obviously you need to install `nodejs` (>= v6.0). Dependencies are managed with `npm`, so a `npm install` in the project directory should fetch all dependencies. After that, the server can be started with `npm start` and listens on port 8080. You can easily change the port by defining the environment variable `PORT`, i.e. `PORT=9000 npm start` will make it available on port 9000.

### Client usage

Your camera operators just need to open the servers ip adress and port in their mobile browsers. So, if the server runs on port `1234` and has the ip adress `192.168.1.2`, the camera operators need to open `http://192.168.1.2:1234`.

When the page first loads, the display will be blue - this indicates that you need to select your camera number via the dropdown. After selecting, the background shold go black. If the operator is active/notified, the screen turns red. If the client loses connection (bad wireless, server crash), the screen will once again turn blue, prompting the user to again set the camera number.

### Master usage

The camera directory can then define the total amount of cameras and the currently active camera with simple HTTP `GET` requests.

Set the amount of cameras to twelve:
```
curl http://192.168.1.2:1234/amount/12
```

Activate camera six (its screen will glow red):
```
curl http://192.168.1.2:1234/activate/6
```

## License

[WTFPL](https://www.wtfpl.net) - Do what the frack you want.
