package utils

import (
	"os"
	"testing"
)

func TestGoDotEnvVariable(t *testing.T) {
	data := []byte("TEST_KEY=test_value\n")
	if err := os.WriteFile(".env", data, 0644); err != nil {
		t.Fatalf("failed to write env file: %v", err)
	}
	t.Cleanup(func() { os.Remove(".env") })

	v := GoDotEnvVariable("TEST_KEY")
	if v != "test_value" {
		t.Fatalf("expected test_value, got %s", v)
	}
}
