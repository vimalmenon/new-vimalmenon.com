import {STORAGE} from "const";


class StorageService {
	private storage:Storage;
	constructor() {
		this.storage = localStorage;
	}
	setLocalStorage ():StorageService {
		this.storage = localStorage;
		return this;
	}
	setSessionStorge ():StorageService {
		this.storage = sessionStorage;
		return this;
	}
	addValue(valueToAdd:IStorage):IStorage {
		const value = this.getValue();
		this.storage.setItem(STORAGE, JSON.stringify({...value, valueToAdd}));
		return this.getValue();
	}
	getValue():IStorage {
		const value = this.storage.getItem(STORAGE)||"{}";
		return JSON.parse(value);
	}
}

const storage = new StorageService();

export { 
	storage
};