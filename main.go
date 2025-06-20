package main

import (
	"log"
	_ "github.com/Ovi1kanobe/pocketbase-template/migrations"

	"github.com/pocketbase/pocketbase"
)

var Version = "dev"

func main() {

	app := pocketbase.New()

	if err := app.Start(); err != nil {
		log.Fatal(err)
	}
}
