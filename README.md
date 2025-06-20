# PocketBase Makefile Template

This repository provides a minimal setup for running a [PocketBase](https://pocketbase.io) instance.
A Makefile is included to manage the Go toolchain and compile the project.

## Getting Started

1. Copy `.env.sample` to `.env` and adjust the variables for your environment.

### Environment variables

The `.env` file controls runtime configuration. The sample file includes variables for:

- `PB_USER` and `PB_PASS` for the initial admin account.
- `PB_APP_NAME` and `PB_APP_URL` to set the displayed name and base URL.
- `PB_SMTP_*` to configure SMTP credentials for sending emails.
- `PB_S3_*` to enable S3 storage of uploaded files.

Adjust these values to match your environment before running the server.
