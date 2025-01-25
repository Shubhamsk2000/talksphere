# Chat Application API Signup

This document provides information on how to use the API for signing up a new user in the Chat Application.

## Signup Endpoint

`POST /api/auth/signup`

## Request Body

The request body should be in JSON format and include the following fields:

- `fullName` (string): The full name of the user.
- `username` (string): The desired username for the user. [unique]
- `password` (string): The password for the user.
- `confirmPassword` (string): Confirmation of the password.
- `gender` (string): The gender of the user. [male, female]

## Login Endpoint

`POST /api/auth/login`

## Request Body

The request body should be in JSON format and include the following fields:

- `username` (string): The username of the user.
- `password` (string): The password of the user.

## Send message

`POST /send/:id`

:id will be of message receiver and sender id will be from jwt

- `message` (string)
