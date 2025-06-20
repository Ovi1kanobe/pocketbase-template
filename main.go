package main

import (
	"flag"
	"fmt"
	"log"
	"os"
	_ "pocketbase-template/migrations"

	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/plugins/migratecmd"
)

var Version = "dev"

func main() {

	app := pocketbase.New()

	if err := app.Start(); err != nil {
		log.Fatal(err)
	}
}
