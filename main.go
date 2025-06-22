package main

import (
	"log"

	"github.com/pocketbase/pocketbase"
)

var Version = "dev"

func main() {

	app := pocketbase.New()

	if err := app.Start(); err != nil {
		log.Fatal(err)
	}
}
