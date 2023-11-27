import MDBReader from 'mdb-reader';

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
