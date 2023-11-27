import { Buffer } from 'buffer/';
import MDBReader from 'mdb-reader';

// @ts-expect-error `globalThis` has no signature
globalThis.Buffer = globalThis.Buffer || Buffer;

export async function readDatabase(file: File) {
	console.log(file.name);
	try {
		const reader = new MDBReader(Buffer.from(await file.arrayBuffer()));
		for (const tableName of reader.getTableNames()) {
			console.log('-', tableName);
		}
	} catch (error) {
		console.error('Could not read database:', error);
	}
}
