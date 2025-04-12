
const {serialPort} = require('serailPort');
const {ReadLineParser} = require ('@serialport/parser-readline');

const port = new SerailPort({path: 'COM3', baudRate: 9600});
const parser = port.pipe(new ReadLineParser({delimiter: '\r\n'}));

port.on('open', ()=> console.log('Serial port opened'));

port.on('open', () => {
    console.log('Serial port opened');
    // Send data to the virtual serial port
    port.write('Hello from Node.js\n', (err) => {
      if (err) {
        return console.log('Error on write: ', err.message);
      }
      console.log('Message written to serial port');
    });
  });

parser.on('data', ()=> {console.log('Data recieved:', data)});
// Receive data from the virtual serial port
port.on('data', (data) => {
    console.log('Data received:', data.toString());
  });

  port.on('error', (err) => {
    console.error('Serial port error:', err);
  });

port.write('Hello from Node.js\n', err=>{
    if(err){
        return console.log('Error on write: ', err.message);
    }
    console.log('Message written')
})



const express = require('express');
const app = express();
const port2 = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port2, () => {
  console.log(`Server listening on port ${port2}`);
});



const socket = new WebSocket('ws://localhost:8080');

socket.addEventListener('open', event => {
  console.log('Connection opened');
  socket.send('Hello Server!');
});

socket.addEventListener('message', event => {
  console.log('Message from server ', event.data);
});

socket.addEventListener('close', event => {
  console.log('Connection closed');
});

socket.addEventListener('error', event => {
  console.error('WebSocket error:', event);
});