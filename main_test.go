package main

import (
  "os"
  "path/filepath"
  "testing"
)

func TestDefaultPublicDir_Temp(t *testing.T) {
  // simulate running from a temp dir
  os.Args[0] = filepath.Join(os.TempDir(), "app")
  got := defaultPublicDir()
  want := "./frontend/dist"
  if got != want {
    t.Errorf("got %q, want %q", got, want)
  }
}

func TestDefaultPublicDir_NonTemp(t *testing.T) {
  // simulate running from a normal install location
  os.Args[0] = "/usr/local/bin/myapp"
  got := defaultPublicDir()
  want := filepath.Join(os.Args[0], "../frontend/")
  if got != want {
    t.Errorf("got %q, want %q", got, want)
  }
}