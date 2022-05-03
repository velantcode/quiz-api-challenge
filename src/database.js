import dayjs from 'dayjs';
import { connect } from 'mongoose';

export default async function Database() {
  try {
    const mongoOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    const { DDB_HOST, DDB_NAME, DDB_USER, DDB_PASSWORD, DDB_PORT } = process.env;

    if (DDB_HOST === '' || DDB_PORT === '') {
      console.error(`${dayjs().toISOString()} - Error to get params to database.`);
      new Error('Error al obtener los parámetros de conexión a la base de datos.');
      process.exit(500);
      return;
    }

    const dbAuthString = DDB_USER !== '' ? `${DDB_USER}:${DDB_PASSWORD}@` : '';
    const uri = `mongodb://${dbAuthString}${DDB_HOST}:${DDB_PORT}/${DDB_NAME ? encodeURIComponent(DDB_NAME) : ''}`;

    await connect(uri, mongoOptions);
  } catch (e) {
    console.error(`${dayjs().toISOString()} - Database Connection Error .`);
    console.error(e.toString());
    process.exit(500);
  }
}
