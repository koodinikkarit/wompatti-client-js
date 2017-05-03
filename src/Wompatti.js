
import fs from "fs";
import grpc from "grpc";

const wompattiSerivce = grpc.load(__dirname + "/../lib/wompatti/wompatti_service.proto").WompattiService;

import Computer from "./Computer";

export default class {
	constructor({
		ip,
		port
	}) {
		this.client = new wompattiSerivce.Wompatti(`${ip}:${port}`, grpc.credentials.createInsecure());
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
			var call = this.client.fetchComputers({
				offset,
				limit
			});

			var computers = [];

			call.on("data", computer => {
				computers.push(new Computer(this.client, computer));
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