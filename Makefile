SHELL := /bin/bash

PWD := $(shell pwd)

structure:
	@echo "Create folder structure"
	mkdir -p dist
	mkdir -p src
	mkdir -p test/unit

.PHONY: npm
npm:
	@echo "Install node packages"
	npm install

.PHONY: typescript
webpack:
	@echo "Transpile typescript"
	$(PWD)/node_modules/.bin/webpack

webpack-watch:
	@echo "Transpile typescript (watching for changes)"
	$(PWD)/node_modules/.bin/webpack --watch

.PHONY: karma
karma:
	@echo "Run karma tests"
	$(PWD)/node_modules/.bin/karma start karma.conf.js --single-run --no-auto-watch --reporters dots

.PHONY: lint
lint:
	echo "Run tslint"
	node $(PWD)/node_modules/.bin/tslint --config $(PWD)/node_modules/tslint-rules/tslint.json --project $(PWD)/tsconfig.json

setup: structure npm webpack

clean:
	@echo "Remove node_modules and transpiled javascript files"
	rm -rf $(PWD)/node_modules
	cd $(PWD)/dist && rm *
	rm -rf coverage
