
import fs from "fs";
import grpc from "grpc";


const messages = require(__dirname + "/../lib/wompatti/wompatti_service_pb");
const services = require(__dirname + "/../lib/wompatti/wompatti_service_grpc_pb");

//const wompattiSerivce = grpc.load(__dirname + "/../lib/wompatti/wompatti_service_pb").WompattiService;

import Computer from "./Computer";

export default class {
	constructor({
		ip,
		port
	}) {
		this.client = new services.WompattiClient(`${ip}:${port}`, grpc.credentials.createInsecure());
	}

	addComputer({
		name,
		mac
	}) {
		return new Promise((resolve, reject) => {
			this.client.addComputer({
				name,
				mac
			}, (error, res) => {
				resolve(new Computer(this.client, res.computer));
			})
		});
	}

	editComputer({
		id,
		name,
		mac
	}) {
		return new Promise((resolve, reject) => {
			this.client.editComputer({
				id,
				name,
				mac
			}, (error, res) => {
				resolve(new Computer(this.client, res.computer));
			})
		})
	}

	fetchComputerById(id) {
		return new Promise((resolve, reject) => {
			this.client.fetchComputerById({
				id
			}, (error, res) => {
				resolve(new Computer(this.client, res.computer));
			})
		});
	}

	fetchComputers({
		offset,
		limit
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.FetchComputersRequest();

			var call = this.client.fetchComputers(req);

			var computers = [];

			call.on("data", computer => {
				computers.push(new Computer(this.client, {
					id: computer.getId(),
					name: computer.getName(),
					mac: computer.getMac()
				}));
			});

			call.on("end", () => {
				resolve(computers);
			});
		});
	}

	wakeup(computerId) {
		return new Promise((resolve, reject) => {
			this.client.wakeup({
				computerId
			}, (error, computer) => {

			});
		});
	}
}