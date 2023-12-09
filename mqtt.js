







 var options = {
    host: '14951d018b4a4ab6923ef058b3789020.s2.eu.hivemq.cloud',
    port: 8000, // MQTT over WebSocket usually uses port 8000
    protocol: 'wss', // WebSocket Secure
    username: 'ethindia-client',
    password: 'ethindia2023'
  };

  // Initialize the MQTT client
  export var client = mqtt.connect(options);

  // Setup the callbacks
  client.on('connect', function () {
    console.log('Connected');

    // Subscribe to the topic 'my/test/topic'
    client.subscribe('my/test/topic', function (err) {
      if (!err) {
        console.log('Subscribed to my/test/topic');
      }
    });

    // Publish message 'Hello' to topic 'my/test/topic'
    client.publish('my/test/topic', 'Hello');
  });

  client.on('error', function (error) {
    console.log(error);
  });

  client.on('message', function (topic, message) {
    // Called each time a message is received
    console.log('Received message:', topic, message.toString());
  });

















//////////////////////////////////////////



// var mqtt = require('mqtt')

// var options = {
//     host: '14951d018b4a4ab6923ef058b3789020.s2.eu.hivemq.cloud',
//     port: 8883,
//     protocol: 'mqtts',
//     username: 'ethindia-client',
//     password: 'ethindia2023'
// }

// // initialize the MQTT client
// export var client = mqtt.connect(options);

// // setup the callbacks
// client.on('connect', function () {
//     console.log('Connected');
// });

// client.on('error', function (error) {
//     console.log(error);
// });

// client.on('message', function (topic, message) {
//     // called each time a message is received
//     console.log('Received message:', topic, message.toString());
// });

// // subscribe to topic 'my/test/topic'
// client.subscribe('my/test/topic');

// // publish message 'Hello' to topic 'my/test/topic'
// client.publish('my/test/topic', 'Hello');