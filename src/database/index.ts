import {createConnection,Connection, getConnectionOptions} from 'typeorm';

export default async ():Promise<Connection>=>{
  //pega as configs do ORM Config
  const defaultOptions=await getConnectionOptions();
  
  if(!process.env.NODE_ENV){
    process.env.NODE_ENV='qalquer';
  }

  return createConnection(
    Object.assign(defaultOptions,{
      database:
        process.env.NODE_ENV === 'test' 
        ? './src/database/database.test.sqlite' 
        : defaultOptions.database
    })
    
  );
}