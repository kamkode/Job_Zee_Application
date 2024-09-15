# JobZee - MERN Stack Job Portal
=====================================

JobZee is a full-stack job seeking application built using the MERN (MongoDB, Express, React, Node.js) stack. It provides a platform for both job seekers and employers to connect, with features for posting jobs, applying to positions, and managing the hiring process.

## Features
------------

- User authentication for job seekers and employers
- Job posting and management for employers
- Job search and application submission for job seekers
- Popular job categories showcase
- Company profiles and open positions
- Responsive design for mobile and desktop

## Tech Stack
-------------

- **Frontend**: React, React Router, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Image Upload**: Cloudinary
- **Authentication**: JSON Web Tokens (JWT)
- **API Testing**: Postman

## Installation
------------

### Step 1: Clone the repository

```bash
git clone https://github.com/your-username/jobzee.git
```

### Step 2: Install dependencies for backend and frontend

```bash
cd jobzee
npm install
cd client
npm install
```

### Step 3: Set up environment variables

Create a `.env` file in the root directory and add the following:

```plaintext
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

### Step 4: Run the application

```bash
cd ..
npm run dev
```

## Deployment
-------------

The application is deployed on [Netlify](https://jobquest-web-app.netlify.app) and can be accessed [here](https://jobquest-web-app.netlify.app).

## Screenshots
-------------

### Home Page

You can view the live Home Page [here](https://jobquest-web-app.netlify.app/).

### Usage

Below are some screenshots of the application in use:

![Screenshot 1](https://github.com/user-attachments/assets/a4133ef8-bf6e-4d13-a7ad-a4ef1594ea56)
![Screenshot 2](https://github.com/user-attachments/assets/5bc52928-50b3-493a-adbe-6b9c4a39fd38)
![Screenshot 3](https://github.com/user-attachments/assets/31f03db4-df47-4990-aea8-97c4405fd4e2)
![Screenshot 4](https://github.com/user-attachments/assets/db5c326f-5fc0-455c-821c-02581c587cf9)


1. Visit `http://localhost:3000` to access the application
2. Register as a job seeker or employer
3. Explore job listings, post new jobs, or apply to positions

## Main Components
------------------

### User Authentication

* Register and login functionality for job seekers and employers
* JWT-based authentication

### Job Listings

* View all available jobs
* Filter jobs by category, location, and salary range
* Search functionality

### Job Posting

* Employers can create, edit, and delete job listings
* Include job details, requirements, and application instructions

### Application Process

* Job seekers can apply to jobs
* Employers can view and manage applications

### User Profiles

* Job seekers: Resume upload, skills, experience
* Employers: Company information, open positions

### Dashboard

* Job seekers: Applied jobs, saved jobs
* Employers: Posted jobs, received applications

## API Endpoints
----------------

### Auth

* `POST /api/auth/register` - Register new user
* `POST /api/auth/login` - User login
* `GET /api/auth/profile` - Get user profile

### Jobs

* `GET /api/jobs` - Get all jobs
* `POST /api/jobs` - Create a new job (Employer only)
* `GET /api/jobs/:id` - Get a specific job
* `PUT /api/jobs/:id` - Update a job (Employer only)
* `DELETE /api/jobs/:id` - Delete a job (Employer only)

### Applications

* `POST /api/applications` - Submit a job application
* `GET /api/applications/employer/:jobId` - Get applications for a job (Employer only)
* `GET /api/applications/jobseeker` - Get user's submitted applications

### Companies

* `GET /api/companies/:id` - Get company profile
* `PUT /api/companies/:id` - Update company profile (Employer only)

## Future Enhancements
---------------------

* Implement real-time notifications for application updates
* Add a messaging system between employers and job seekers
* Integrate with external job boards for more listings
* Implement advanced analytics for employers

## Contributing
------------

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Collaborator
[arpit-pathak](https://github.com/arpit-pathak)
-------

This project is licensed under the MIT License.

## Acknowledgements
------------------

* React Documentation
* Express.js Documentation
* MongoDB Documentation
* Cloudinary Documentation
* JSON Web Tokens
```

