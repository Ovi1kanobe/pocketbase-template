test:
	go test ./... -v --cover

test-report:
	go test ./... -v --cover -coverprofile=coverage.out
	go tool cover -html=coverage.out

# Generate PocketBase TypeScript types
typegen:
	env -u GOOS -u GOARCH go run . migrate up
	bunx pocketbase-typegen --db ./pb_data/data.db --out ./frontend/src/lib/pocketbase-types.ts

build: typegen
	echo "VITE_PB_URL=/" > ./frontend/.env
	cd frontend && bun install
	cd frontend && bun run build
	rm -rf build 
	mkdir -p build
	go build -o build/app
	cp -r frontend/dist build/frontend

zip: build
	tar -czf app.tar.gz -C build/ .
