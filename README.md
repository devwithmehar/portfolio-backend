# Portfolio Backend

This is the backend service for the **e-portfolio** project, built with **Node.js** and **Express.js**. It provides APIs to handle contact form submissions, integrates with **AWS SES** for email functionality, and is deployed on **AWS Elastic Beanstalk** with a CI/CD pipeline configured via **AWS CodePipeline**.

---

## Features

- **Contact Form API**:
  - Accepts `name`, `email`, `subject`, and `message`.
  - Sends emails using **AWS SES**.
- **Health Check Endpoint**:
  - Endpoint to verify application status.
- **CORS Configuration**:
  - Allows secure API access across origins.
- **CI/CD**:
  - Fully automated pipeline for seamless deployment from GitHub to Elastic Beanstalk.

---

## Tech Stack

- **Node.js**: Backend runtime.
- **Express.js**: Web framework for building APIs.
- **AWS SES**: Simple Email Service for email integration.
- **AWS Elastic Beanstalk**: For application hosting.
- **AWS CodePipeline**: For continuous integration and deployment.
- **PM2**: Process manager for running the application in production.

---

## Repository

**GitHub Repository**: [Portfolio Backend](https://github.com/devwithmehar/portfolio-backend.git)

---

## Installation

### Prerequisites
- Node.js and npm installed.
- AWS account with **SES**, **Elastic Beanstalk**, and **CodePipeline** access.

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/devwithmehar/portfolio-backend.git
   cd portfolio-backend
   ```
2. Install dependencies:

     ```bash
     npm install
   ```
3. Configure environment variables: Create a .env file in the project root with the following:

    ```bash
    AWS_REGION=your-aws-region
    AWS_ACCESS_KEY_ID=your-aws-access-key-id
    AWS_SECRET_ACCESS_KEY=your-aws-secret-access-key
    AWS_SENDER=your-sender-email
    PORT=8081

   ```
4. Start the development server:

  ```bash
     npm run dev
   ```
5. Access the API:

- Health check: ```bash http://localhost:8081/health ```
- Contact API:  ```bash http://localhost:8081/contact ```

## Deployment

### Using AWS Elastic Beanstalk

1. Prepare for Deployment:

- Ensure the app runs with pm2 for production:
```bash
     npm start
   ```
2. Deploy to Elastic Beanstalk:

- Create an Elastic Beanstalk application and upload the code zip file.

3. CI/CD with AWS CodePipeline:

 Set up CodePipeline with: 

 - **Source** : GitHub repository.
 - **Build**: Skipped (Node.js doesn’t require a build step).
 - **Deploy**: Elastic Beanstalk integration. 

## Endpoint

### ``` GET / ```

- **Description**: Root endpoint for backend confirmation.
- **Response**: 

```bash
    {
     "message": "Hey This is the backend of the e-portfolio"
    }
   ```
### ``` GET /health ```

- **Description**: Health check endpoint.
- **Response**: 

```bash
    {
     "success": true
    }
```    

### ``` POST /contact ```

- **Description**:  Sends contact form details via email.
- **Request Body**: 

```bash
    {
        "name": "John Doe",
        "email": "john.doe@example.com",
        "subject": "Portfolio Inquiry",
        "message": "I am interested in working with you."
    }

```   
- **Response**: 

   ```bash
    {
     "success": true,
     "message": "Message Sent!"
    }
  ```    

## Contribution

Feel free to fork the repository, raise issues, or submit pull requests. Contributions are always welcome!

## License

This project is licensed under the **ISC License**.

You are free to use, modify, and distribute this project, provided that the original copyright notice and permission notice are included in all copies or substantial portions of the Software.

For more details, refer to the [ISC License](https://opensource.org/licenses/ISC).
