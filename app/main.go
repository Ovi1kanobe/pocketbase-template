package main

import (
	_ "pocketbase-template/migrations"
	"flag"
	"fmt"
	"log"
	"os"

	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/plugins/migratecmd"
)

var Version = "dev"

func main() {
	showVersion := flag.Bool("v", false, "Show version")
	flag.Parse()

	if *showVersion {
		fmt.Println(Version)
		os.Exit(0)
	}
	app := pocketbase.New()
	log.Println("Version: ", Version)
	

	// When a collection is created in the UI, a new migration file is created
	migratecmd.MustRegister(app, app.RootCmd, migratecmd.Config{
		Automigrate: false,
	})


	if err := app.Start(); err != nil {
		log.Fatal(err)
	}
}
