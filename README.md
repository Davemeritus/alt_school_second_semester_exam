# 2nd Semester Exam

This Node.js project is an advanced web server application utilizing Express.js, designed to demonstrate the creation of secure and efficient APIs. It incorporates user authentication, data handling with MongoDB, enhanced security practices with bcrypt and JSON Web Tokens, and a structured logging system using Winston. The server is hosted at [Alt-School Second Semester Exam](https://alt-school-second-semester-exam.onrender.com/).

## Getting Started

These instructions will get your copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- MongoDB (Local installation or MongoDB Atlas)

### Installation

1. Clone the repository:
git clone https://github.com/Davemeritus/alt_school_second_semester_exam

2. Navigate to the project directory:
cd alt_school_second_semester_exam


3. Install dependencies:
npm install

4. Create a .env file in the root directory based on the .env_sample provided:
   DATABASE_URL="<your_mongoDB_connection_string>"
JWT_SECRET="<your_jwt_secret>"

Run the server:
npm run dev


## Usage

The application can be accessed locally at `http://localhost:3000` or through the hosted site. Here are the main endpoints along with expected responses:

### Authentication

- **POST /auth/register**
- **Description**: Register a new user.
- **Request**: `{"username": "user1", "password": "password123"}`
- **Response**: `{"message": "User registered successfully", "userId": "<user_id>"}`

- **POST /auth/login**
- **Description**: Login an existing user.
- **Request**: `{"username": "user1", "password": "password123"}`
- **Response**: `{"message": "User logged in successfully", "token": "<jwt_token>"}`

### Data Handling

- **GET /data**
- **Description**: Retrieve data only accessible by authenticated users.
- **Headers**: `Authorization: Bearer <jwt_token>`
- **Response**: `{"data": "Sensitive data response"}`
  
### ERD Diagram
An ERD diagram showcasing the entities and their relationships is included in the diagrams folder of the project.

## Running Tests

To run the automated tests for this system, use: npm test

## Author

* OKUNADE DAVID 


## Contact

For any queries, you can reach out at [davidokunade1@gmail.com].