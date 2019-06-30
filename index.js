'use strict';

const { resolve } = require('path');
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const getFeature = require('./routes/checkFeature');

const routeProtosPath = resolve('protos/route.proto');
const packageDefinition = protoLoader.loadSync(routeProtosPath, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
});

const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
const routeguide = protoDescriptor.routeguide;

console.log(routeguide);

const server = new grpc.Server();

server.addProtoService(routeguide.RouteGuide.service, {
  getFeature: getFeature,
  listFeatures: listFeatures,
  recordRoute: recordRoute,
  routeChat: routeChat
});

routeServer.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
routeServer.start();
