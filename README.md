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

2. Edit the `APPNAME` and `VERSION` files if you want to change the application name or version.
3. Build the binary:
   ```bash
   make build
   ```
   The compiled binary will be placed in `build/bin`.
4. Run the server locally:
   ```bash
   make run-local
   ```
   or use `make run` to bind the server to the machine IP.

## Development

- Migration files live in `app/migrations` and are automatically registered.
- Use `make clean` to remove build artifacts.
- Run `make update-pocketbase` to fetch the latest PocketBase version.
- Run `make fmt` to format the code and `make vet` to perform static analysis.

The Makefile downloads the Go toolchain defined in `Makefile`, so you do not need Go installed globally.
