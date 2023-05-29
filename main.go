package main

import (
	"encoding/json"
	"io/ioutil"
	"os"
	"path/filepath"
	"strings"
	"time"
)

type Data struct {
	Values []string `json:"values"`
}

func main() {
	filepath.Walk("./targets", func(path string, info os.FileInfo, err error) error {
		if !info.IsDir() && filepath.Ext(path) == ".txt" {
			content, err := ioutil.ReadFile(path)
			if err != nil {
				return err
			}

			lines := strings.Split(string(content), "\n")

			// Remove empty lines and trailing \r if any
			values := []string{}
			for _, line := range lines {
				line = strings.TrimRight(line, "\r")
				if len(strings.TrimSpace(line)) > 0 {
					values = append(values, line)
				}
			}

			data := Data{
				Values: values,
			}

			jsonData, err := json.MarshalIndent(data, "", "  ")
			if err != nil {
				return err
			}

			outFile := "./results/" + time.Now().Format("20060102150405") + ".json"
			err = ioutil.WriteFile(outFile, jsonData, 0644)
			if err != nil {
				return err
			}
		}
		return nil
	})
}
