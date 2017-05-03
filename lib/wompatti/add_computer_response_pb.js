/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var computer_pb = require('./computer_pb.js');
goog.exportSymbol('proto.WompattiService.AddComputerResponse', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.WompattiService.AddComputerResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.WompattiService.AddComputerResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.WompattiService.AddComputerResponse.displayName = 'proto.WompattiService.AddComputerResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.WompattiService.AddComputerResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.WompattiService.AddComputerResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.WompattiService.AddComputerResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.WompattiService.AddComputerResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    computer: (f = msg.getComputer()) && computer_pb.Computer.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.WompattiService.AddComputerResponse}
 */
proto.WompattiService.AddComputerResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.WompattiService.AddComputerResponse;
  return proto.WompattiService.AddComputerResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.WompattiService.AddComputerResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.WompattiService.AddComputerResponse}
 */
proto.WompattiService.AddComputerResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new computer_pb.Computer;
      reader.readMessage(value,computer_pb.Computer.deserializeBinaryFromReader);
      msg.setComputer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.WompattiService.AddComputerResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.WompattiService.AddComputerResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.WompattiService.AddComputerResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.WompattiService.AddComputerResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getComputer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      computer_pb.Computer.serializeBinaryToWriter
    );
  }
};


/**
 * optional Computer computer = 1;
 * @return {?proto.WompattiService.Computer}
 */
proto.WompattiService.AddComputerResponse.prototype.getComputer = function() {
  return /** @type{?proto.WompattiService.Computer} */ (
    jspb.Message.getWrapperField(this, computer_pb.Computer, 1));
};


/** @param {?proto.WompattiService.Computer|undefined} value */
proto.WompattiService.AddComputerResponse.prototype.setComputer = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.WompattiService.AddComputerResponse.prototype.clearComputer = function() {
  this.setComputer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.WompattiService.AddComputerResponse.prototype.hasComputer = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.WompattiService);