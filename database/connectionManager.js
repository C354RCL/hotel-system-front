// Hacemos las importaciones pertinentes
import { MongoClient } from "mongodb";

// Direccion del cluster 
const uri = "mongodb+srv://doreimon3:fw6xqj0DsUNaWypt@plannedflamecluster.r3ayz.mongodb.net/?retryWrites=true&w=majority&appName=PlannedFlameCluster";

// Cramos un nuevo cliente 
const client = new MongoClient(uri);

// Metodo encargado de regresar todos los documentos de una coleccion
async function getDocuments(collectionName){
    try{
        await client.connect(); // Conectamos el cliente
        const database = client.db('hotelManagment'); // Seleccionamos la base de datos a usar 
        const collection = database.collection(collectionName); // Usamos el parametro para traer la coleccion a usar
        const lista = collection.find();
        let arreglo = []; // Creamos el arreglo donde se guardaran los datos que se extraigan
        // Ciclo for que itera sobre la lista y cada elemento lo agrega a arreglo
        for await(const elemento of lista){
            arreglo.push(elemento);
        }
        return arreglo; // Retonamos el arreglo
    } catch {
        console.log("Error en la consulta");
        client.close(); // Cerramos la coneccion del cliente
        return null; // Retornamos null
    } finally {
        client.close();
    }
}

// Metodo encargado de regresar documentos
// Parametros
// Nombre de la coleccion
// Query de filtro que identifica all documento requerido
async function selectDocument(collectionName, filterQuery) {
    try {
        await client.connect(); // Conectamos el cliente
        const database = client.db('hotelManagment'); // Seleccionamos la base de datos a usar
        const collection = database.collection(collectionName) // Usamos el parametro para traer la coleccion a usar
        return await collection.findOne(filterQuery);
    } catch {
        console.log("Error en la consulta");
        return null; // Retornamos null
    } finally {
        await client.close(); // Cerramos la coneccion del cliente
    }
}

// Metodo encargado de actualizar documentos
// Parametros 
// Nombre de la coneccion 
// Query de filtro para identificra documentos a modificar
// Query con los valores a cambiar
async function updateDocument(collectionName, filterQuery, updateQuery) {
    try {
        await client.connect(); // Conectamos el cliente
        const database = client.db('hotelManagment'); // Seleccionamos la base de datos a usar
        const collection = database.collection(collectionName) // Usamos el parametro para traer la coleccion a usar
        const query = {$set: updateQuery}; // Query con los valores a cambiar
        return await collection.updateOne(filterQuery, query); // Retornamos la actualizacion
    } catch {
        console.log("Error en el Update");
        return null;
    } finally {
        await client.close(); // Cerramos la coneccion del cliente
    } 
}

// Metodo enacargado de insertar nuevo documentos a las colecciones
// Parametros 
// Nombre de la coleccion 
// Query con los datos datos del documento
async function insertDocument(collectionName, insertQuery) {
    try {
        await client.connect(); // Conectamos el cliente
        const database = client.db('hotelManagment'); // Seleccionamos la base de datos a usar
        const collection = database.collection(collectionName);
        return await collection.insertOne(insertQuery);  // Retornamos la insercion 
    } catch {
        console.log("Error en el Insert");
        return null;
    } finally {
        await client.close(); // Cerramos la coneccion del cliente
    }
}

// Exportamos las funciones 
export {getDocuments, selectDocument, insertDocument, updateDocument};