

export default class {
	constructor(client, {
		id,
		name,
		mac
	}) {
		this._id = id;
		this._name = name;
		this._mac = mac;
		this.client = client;
	}

	get id() {
		return this._id;
	}

	get name() {
		return this._name;
	}

	get mac() {
		return this._mac;
	}

	wakeup() {
		return new Promise((resolve, reject) => {
			this.client.wakeup({
				computerId: this.id
			}, (error, res) => {

			});
		});
	}
}