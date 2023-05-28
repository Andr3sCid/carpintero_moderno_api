const { MongoClient, ObjectId, ServerApiVersion } = require("mongodb");

class DbConnection {
  constructor() {
    const uri =
      "mongodb+srv://Andr3sCid:dRZ2U6OKbrIQCfUb@cluster0.dd2svyc.mongodb.net/?retryWrites=true&w=majority";

    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
    this.client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
  }

  async createUser(user) {
    try {
      // Conectar a la base de datos
      await this.client.connect();

      // Acceder a la base de datos
      const db = this.client.db("Carpintero-Moderno");

      // Acceder a la colección de usuarios
      const collection = db.collection("user");

      // Insertar el nuevo usuario
      const result = await collection.insertOne(user);

      // Retornar el ID del usuario creado
      return result.insertedId;
    } catch (error) {
      // Manejar errores aquí
      console.error("Error al crear el usuario:", error);
      throw error;
    } finally {
      // Desconectar de la base de datos
      await this.client.close();
    }
  }

  async getUserById(userId) {
    try {
      // Conectar a la base de datos
      await this.client.connect();

      // Acceder a la base de datos
      const db = this.client.db("Carpintero-Moderno");

      // Acceder a la colección de usuarios
      const collection = db.collection("user");

      // Buscar el usuario por su ID
      const user = await collection.findOne({ _id: ObjectId(userId) });

      // Retornar el usuario encontrado
      return user;
    } catch (error) {
      // Manejar errores aquí
      console.error("Error al obtener el usuario por ID:", error);
      throw error;
    } finally {
      // Desconectar de la base de datos
      await this.client.close();
    }
  }

  async getUserByUserName(UserName) {
    try {
      // Conectar a la base de datos
      await this.client.connect();

      // Acceder a la base de datos
      const db = this.client.db("Carpintero-Moderno");

      // Acceder a la colección de usuarios
      const collection = db.collection("user");

      // Buscar el usuario por su ID
      const user = await collection.findOne({ userName: UserName });

      // Retornar el usuario encontrado
      return user;
    } catch (error) {
      // Manejar errores aquí
      console.error("Error al obtener el usuario por ID:", error);
      throw error;
    } finally {
      // Desconectar de la base de datos
      await this.client.close();
    }
  }

  async updateUser(userId, updatedUser) {
    try {
      // Conectar a la base de datos
      await this.client.connect();

      // Acceder a la base de datos
      const db = this.client.db("Carpintero-Moderno");

      // Acceder a la colección de usuarios
      const collection = db.collection("user");

      // Actualizar los datos del usuario por su ID
      await collection.updateOne(
        { _id: ObjectId(userId) },
        { $set: updatedUser }
      );

      // Retornar true si la actualización fue exitosa
      return true;
    } catch (error) {
      // Manejar errores aquí
      console.error("Error al actualizar el usuario:", error);
      throw error;
    } finally {
      // Desconectar de la base de datos
      await this.client.close();
    }
  }

  async deleteUser(userId) {
    try {
      // Conectar a la base de datos
      await this.client.connect();

      // Acceder a la base de datos
      const db =this.client.db("Carpintero-Moderno");

      // Acceder a la colección de usuarios
      const collection = db.collection("user");

      // Eliminar el usuario por su ID
      await collection.deleteOne({ _id: ObjectId(userId) });

      // Retornar true si la eliminación fue exitosa
      return true;
    } catch (error) {
      // Manejar errores aquí
      console.error("Error al eliminar el usuario:", error);
      throw error;
    } finally {
      // Desconectar de la base de datos
      await this.client.close();
    }
  }

  async getAllUsers() {
    try {
      // Conectar a la base de datos
      await this.client.connect();

      // Acceder a la base de datos
      const db = this.client.db("Carpintero-Moderno");

      // Acceder a la colección de usuarios
      const collection = db.collection("user");

      // Obtener todos los usuarios
      const users = await collection.find().toArray();

      // Retornar los usuarios encontrados
      return users;
    } catch (error) {
      // Manejar errores aquí
      console.error("Error al obtener todos los usuarios:", error);
      throw error;
    } finally {
      // Desconectar de la base de datos
      await this.client.close();
    }
  }

  async createPublication(publication) {
    try {
      // Conectar a la base de datos
      await this.client.connect();

      // Acceder a la base de datos
      const db = this.client.db("Carpintero-Moderno");

      // Acceder a la colección de publicaciones
      const collection = db.collection("publication");

      // Insertar la nueva publicación
      const result = await collection.insertOne(publication);

      // Retornar el ID de la publicación creada
      return result.insertedId;
    } catch (error) {
      // Manejar errores aquí
      console.error("Error al crear la publicación:", error);
      throw error;
    } finally {
      // Desconectar de la base de datos
      await this.client.close();
    }
  }

  async getPublicationById(publicationId) {
    try {
      // Conectar a la base de datos
      await this.client.connect();

      // Acceder a la base de datos
      const db = this.client.db("Carpintero-Moderno");

      // Acceder a la colección de publicaciones
      const collection = db.collection("publication");

      // Buscar la publicación por su ID
      const publication = await collection.findOne({ _id: publicationId });

      // Retornar la publicación encontrada (o null si no se encontró)
      return publication;
    } catch (error) {
      // Manejar errores aquí
      console.error("Error al obtener la publicación por ID:", error);
      throw error;
    } finally {
      // Desconectar de la base de datos
      await this.client.close();
    }
  }

  async updatePublication(publicationId, updatedPublication) {
    try {
      // Conectar a la base de datos
      await this.client.connect();

      // Acceder a la base de datos
      const db = this.client.db("Carpintero-Moderno");

      // Acceder a la colección de publicaciones
      const collection = db.collection("publication");

      // Actualizar la publicación por su ID
      const result = await collection.updateOne(
        { _id: ObjectId(publicationId) },
        { $set: updatedPublication }
      );

      // Retornar true si la publicación se actualizó correctamente, de lo contrario, false
      return result.modifiedCount > 0;
    } catch (error) {
      // Manejar errores aquí
      console.error("Error al actualizar la publicación:", error);
      throw error;
    } finally {
      // Desconectar de la base de datos
      await this.client.close();
    }
  }

  async deletePublication(publicationId) {
    try {
      // Conectar a la base de datos
      await this.client.connect();

      // Acceder a la base de datos
      const db = this.client.db("Carpintero-Moderno");

      // Acceder a la colección de publicaciones
      const collection = db.collection("publication");

      // Eliminar la publicación por su ID
      const result = await collection.deleteOne({
        _id: ObjectId(publicationId),
      });

      // Retornar true si la publicación se eliminó correctamente, de lo contrario, false
      return result.deletedCount > 0;
    } catch (error) {
      // Manejar errores aquí
      console.error("Error al eliminar la publicación:", error);
      throw error;
    } finally {
      // Desconectar de la base de datos
      await this.client.close();
    }
  }

  async getAllpublication() {
    try {
      // Conectar a la base de datos
      await this.client.connect();

      // Acceder a la base de datos
      const db = this.client.db("Carpintero-Moderno");

      // Acceder a la colección de publicaciones
      const collection = db.collection("publication");

      // Obtener todas las publicaciones
      const publication = await collection.find().toArray();

      // Retornar las publicaciones encontradas
      return publication;
    } catch (error) {
      // Manejar errores aquí
      console.error("Error al obtener las publicaciones:", error);
      throw error;
    } finally {
      // Desconectar de la base de datos
      await this.client.close();
    }
  }

  async getpublicationByAuthor(authorId) {
    try {
      // Conectar a la base de datos
      await this.client.connect();

      // Acceder a la base de datos
      const db = this.client.db("Carpintero-Moderno");

      // Acceder a la colección de publicaciones
      const collection = db.collection("publication");

      // Buscar las publicaciones por el ID del autor
      const publication = await collection.find({ authorId }).toArray();

      // Retornar las publicaciones encontradas
      return publication;
    } catch (error) {
      // Manejar errores aquí
      console.error("Error al obtener las publicaciones por autor:", error);
      throw error;
    } finally {
      // Desconectar de la base de datos
      await this.client.close();
    }
  }
}

module.exports = DbConnection;
