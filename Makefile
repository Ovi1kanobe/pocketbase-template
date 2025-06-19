# Configuration Variables
GO_VERSION := 1.24.4

# Determine host OS and architecture for downloading Go
HOST_OS := $(shell uname -s | tr '[:upper:]' '[:lower:]')
HOST_ARCH := $(shell uname -m)
ifeq ($(HOST_ARCH),x86_64)
HOST_ARCH := amd64
endif

# Use the host's OS and architecture for downloading Go
GO_URL := https://dl.google.com/go/go$(GO_VERSION).$(HOST_OS)-$(HOST_ARCH).tar.gz

# Directory Variables (unchanged)
MAKEFILE_DIR := $(dir $(abspath $(lastword $(MAKEFILE_LIST))))
PB_BUILD_DIR := $(MAKEFILE_DIR)build
DEPS_DIR := $(PB_BUILD_DIR)/deps

GO_DIR := $(DEPS_DIR)/go
GO_BIN := $(GO_DIR)/bin/go

BIN_DIR := $(PB_BUILD_DIR)/bin

# MACHINE Variables
MACHINE_IP := $(shell hostname -I | awk '{print $$1}')
VERSION := $(shell cat VERSION)
APPNAME := $(shell cat APPNAME)

# Determine target architecture.
# If GOARCH is passed, use it; otherwise, use the host's architecture.
TARGET_ARCH ?= $(GOARCH)
ifeq ($(TARGET_ARCH),)
    TARGET_ARCH := $(shell uname -m)
endif
ifeq ($(TARGET_ARCH),x86_64)
    TARGET_ARCH := amd64
endif

# Define the output binary name using target architecture
OUTPUT_BIN := $(BIN_DIR)/$(APPNAME)_$(VERSION)_$(HOST_OS)_$(TARGET_ARCH)

.PHONY: install-go
install-go:
	@echo "Downloading and extracting Go $(GO_VERSION)..."
	mkdir -p $(GO_DIR)
	curl -sSL $(GO_URL) | tar -C $(DEPS_DIR) -xz
	chmod +x $(GO_BIN)

$(MAKEFILE_DIR)app/go.mod | $(GO_BIN):
	echo "Creating go.mod file..."
	cd $(MAKEFILE_DIR)app && $(GO_BIN) mod init $(APPNAME)

# ── Keep go.mod's 'go' directive in sync with GO_VERSION ──────────────────────
.PHONY: sync-go-version
sync-go-version: install-go | $(MAKEFILE_DIR)app/go.mod
	@cd $(MAKEFILE_DIR)app && $(GO_BIN) mod edit -go=$(GO_VERSION)

# Build PocketBase
.PHONY: build
build: install-go $(MAKEFILE_DIR)app/go.mod
	echo "$(APPNAME) version $(VERSION)..."
	mkdir -p $(BIN_DIR)
	cd $(MAKEFILE_DIR)app && $(GO_BIN) mod tidy 
	cd $(MAKEFILE_DIR)app && $(GO_BIN) build -o $(OUTPUT_BIN) -ldflags "-X main.Version=$(VERSION)"

$(BIN_DIR)/.env:
	echo "Creating .env file..."
	cp $(MAKEFILE_DIR).env $(BIN_DIR)

.PHONY: run
run: build $(BIN_DIR)/.env
	@echo "Starting $(APPNAME)..."
	$(OUTPUT_BIN) serve --http $(MACHINE_IP):8090

.PHONY: run-local
run-local: build $(BIN_DIR)/.env
	@echo "Starting $(APPNAME)..."
	$(OUTPUT_BIN) serve --http localhost:8090

.PHONY: clean
clean:
	echo "Cleaning data..."
	rm -rf $(MAKEFILE_DIR)build

.PHONY: update-pocketbase
update-pocketbase:
	echo "Updating PocketBase..."
	cd $(MAKEFILE_DIR)app && $(GO_BIN) get github.com/pocketbase/pocketbase@latest
	cd $(MAKEFILE_DIR)app && $(GO_BIN) mod tidy
	echo "PocketBase updated."


.PHONY: fmt
fmt: install-go
	cd $(MAKEFILE_DIR)app && $(GO_BIN) fmt ./...

.PHONY: vet
vet: install-go
	cd $(MAKEFILE_DIR)app && $(GO_BIN) vet ./...

.PHONY: test
test: install-go
	cd $(MAKEFILE_DIR)app && $(GO_BIN) test ./...
