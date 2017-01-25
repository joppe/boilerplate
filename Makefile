SHELL := /bin/bash

PWD := $(shell pwd)

structure:
	@echo "Create folder structure"
	mkdir -p dist
	mkdir -p src
	mkdir -p test/js
	mkdir -p test/unit

.PHONY: npm
npm:
	@echo "Install node packages"
	npm install

.PHONY: typescript
typescript: typescript-src typescript-spec
	@echo "Transpile typescript"

typescript-src:
	@echo "Transpile src typescript"
	$(PWD)/node_modules/.bin/tsc --project ./

typescript-spec:
	@echo "Transpile test typescript"
	$(PWD)/node_modules/.bin/tsc --project ./test

typescript-watch:
	@echo "Transpile typescript (watching for changes)"
	@echo typescript-src-watch typescript-spec-watch | xargs -P 4 -n 1 make

typescript-src-watch:
	@echo "Transpile src typescript (watching for changes)"
	$(PWD)/node_modules/.bin/tsc --project ./  --watch

typescript-spec-watch:
	@echo "Transpile test typescript (watching for changes)"
	$(PWD)/node_modules/.bin/tsc --project ./test  --watch

.PHONY: karma
karma: typescript
	@echo "Run karma tests"
	$(PWD)/node_modules/.bin/karma start karma.conf.js --single-run --no-auto-watch --reporters dots

.PHONY: lint
lint:
	echo "Run tslint"
	node $(PWD)/node_modules/.bin/tslint --config $(PWD)/node_modules/tslint-rules/tslint.json --project $(PWD)/tsconfig.json

setup: structure npm typescript

clean:
	@echo "Remove node_modules and transpiled javascript files"
	rm -rf $(PWD)/node_modules
	cd $(PWD)/dist && rm *.js
	rm -rf $(PWD)/test/js
