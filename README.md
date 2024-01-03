# Forgot Password Page

This document provides details on the Forgot Password feature of the application. The process involves the following steps:

## Features

### Login Page

- Users can log in with their credentials.

### Forgot Password

- **Button:** A "Forgot Password" button is available on the login page.
- **Click Action:** Clicking the button opens the Forgot Password page.

### Forgot Password Page

- **Input Field:** Users enter their email address.
- **Button:** Clicking "Forget Password" initiates the process.

### Email Validation

- The system checks for user availability and validates the provided email.

### Reset Password Email

- If the email is valid and associated with a registered user:
  - A reset password link is sent to the user's email.
  - User is instructed to check their email.

### Reset Password Page

- **Email Link:** User clicks the reset password link in their email.
- **Redirection:** User is redirected to the Reset Password page.
- **Fields:** Two fields are provided to enter the new password twice.

### Password Change

- **Validation:** The entered passwords are validated.
- **Update:** If validation passes, the user's password is updated.

## Technologies Used

- Frontend: Reactjs
- Backend: Expressjs
- Database: MongoDB

## Usage:

1. To get started with the Restaurant Website:
   ```bash
   git clone https://github.com/Emmanuel-Benjamin00/blog-app-frontend

