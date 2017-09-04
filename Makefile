REPORTER = spec

test:
		@NODE_ENV=test ./node_modules/.bin/mocha \
				--reporter $(REPORTER) \
				--reporter=nyan \
				--ui tdd

test-w:
		@NODE_ENV=test ./node_modules/.bin/mocha \
				--reporter $(REPORTER) \
				--reporter=nyan \
				--growl \
				--ui tdd \
				--watch

.PHONY: test test-w
