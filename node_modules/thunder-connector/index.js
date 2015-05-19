'use strict';


/*
 *
 * Imports
 * 
 */

// https://github.com/node-hid/node-hid
var HID = require('node-hid');





/*
 *
 * Application logic
 *
 */

/*
 * Constructor
 */
function ThunderConnector() {
  // Options
  this.options = {
    // Decimal ID of the USB vendor 
    vendorID : 8483, // hex 2123
    // Decimal ID of the USB product
    productID : 4112, // hex 1010
    // Command: Turn left 
    left  : [2, 4, 0, 0, 0, 0, 0, 0],
    // Command: Turn right
    right : [2, 8, 0, 0, 0, 0, 0, 0],
    // Command: Turn up
    up    : [2, 2, 0, 0, 0, 0, 0, 0],
    // Command: Turn down
    down  : [2, 1, 0, 0, 0, 0, 0, 0],
    // Command: Stop everything you are doing right now
    stop  : [2, 32, 0, 0, 0, 0, 0, 0],
    // Command: Fire a missile
    fire  : [2, 16, 0, 0, 0, 0, 0, 0],
    // Command: Turn LED on
    ledOn  : [3, 1, 0, 0, 0, 0, 0, 0],
    // Command: Turn LED off
    ledOff  : [3, 0, 0, 0, 0, 0, 0, 0]
  };

  // Messages 
  this.messages = {
    connected : 'connected',
    notConnected : 'not connected',
    success : 'success',
    notSupported : 'not supported',
    errorNoDevice : 'Cannot write to HID device'
  };

  // Array of devices
  this.devices = null;

  // A single device
  // @TODO [TimPietrusky] - Allow more devices
  this.device = null;
}





/**
 * Connect to the USB devices.
 */
ThunderConnector.prototype.connect = function() {
  var result = this.messages.notConnected;

  // Get all USB-HID devices
  this.devices = HID.devices();

  // Reset device
  this.device = null;

  // Iterate over all USB-HID devices
  this.devices.forEach(function(element, index) {

    // Get the path of the real device if vendorID & productID match
    if (element.vendorId == this.options.vendorID && element.productId == this.options.productID) {
      // Open the device
      this.device = new HID.HID(element.path);

      // Set the result
      result = this.messages.connected;
    }

  }, this);

  return result;
};





/**
 * Send a command to the USB device
 */
ThunderConnector.prototype.command = function(command) {
  var result = this.messages.success;

  // Do nothing if no device is connected & the command is not "connect"
  if (this.device == null && command !== 'connect') {
    result = this.messages.notConnected;

  // Execute a command if a device is connected
  } else {

    try {

      switch (command) {
        // Connect to the USB device
        case 'connect' :
          result = this.connect();
          break;

        // Stop everything the device is doing right now
        case 'stop' :
          this.device.write(this.options.stop);
          break;

        // Turn left
        case 'left' :
          this.device.write(this.options.left);
          break;

        // Turn right
        case 'right' :
          this.device.write(this.options.right);
          break;

        // Turn up
        case 'up' :
          this.device.write(this.options.up);
          break;

        // Turn down
        case 'down' :
          this.device.write(this.options.down);
          break;

        // Launch a missile
        case 'fire' :
          this.device.write(this.options.fire);
          break;

        // Turn the LED on
        case 'ledOn' :
          this.device.write(this.options.ledOn);
          break;

        // Turn the LED off
        case 'ledOff' :
          this.device.write(this.options.ledOff);
          break;

        // The transmitted command is not supported
        default:
          console.error('Command "' + command + '" is not supported.');
          result = this.message.notSupported;
          break;
      }

    } catch (error) {
      
      // Lost connection to the device
      if (error === this.messages.errorNoDevice) {
        this.device = null;
        result = this.messages.notConnected

      } else {
        console.error(error);
      }
    }

  }

  return result;
};





/**
 * Export the module so that others can use it
 */ 
module.exports = new ThunderConnector();