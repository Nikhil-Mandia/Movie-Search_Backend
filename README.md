# Movie Search and Favourites App - Backend  

This is the backend of the **Movie Search and Favourites App**, built using **Node.js** and **MySQL**. It provides APIs to handle movie search functionality using the OMDB API and manage user favourites.  

## Features  

1. **Save Favourite**:  
   - Save a selected movie/TV show to the database.  

2. **View Favourites**:  
   - Fetch all saved favourite movies/TV shows from the database.  

---

## Technologies Used  

- **Node.js**: For building the backend server.  
- **Express.js**: Framework for creating APIs.  
- **MySQL**: Database for storing favourites.  
- **Sequelize**: ORM for database operations.  
- **dotenv**: For managing environment variables.  
- **Axios**: For calling external APIs.  

---

## Getting Started  

### Prerequisites  

Make sure you have the following installed:  
- **Node.js** (v16 or higher)  
- **MySQL** (v8 or higher)  
- **npx**  

---

### Installation  

1. **Clone the Repository**:  
   ```bash
   git clone <repository-url>
   cd backend
2.  Install Dependencies:
    Npm i

3   Set Up Environment Variables:

    Create a .env file in the project root.
    Add the following environment variables:
    
    env
    Copy code
    PORT=5000
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=your_password
    DB_NAME=movies_db
    
4  Set Up the Database:

  Log in to your MySQL server and create the database:
  CREATE DATABASE movies_db;

5  Run Migrations:
   Use Sequelize CLI to create the necessary tables:
   npx sequelize-cli db:migrate

6  Start the Server:

  npm run dev 
  The backend server will run at http://localhost:5100.
    
