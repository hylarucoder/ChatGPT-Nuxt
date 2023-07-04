RELEASE_IMAGE_TAG = "nuxt-release:latest"

BUILDER_TARGET_IMAGE_TAG = "nuxt-builder"

.PHONY: builder
builder:
	docker build -t $(BUILDER_TARGET_IMAGE_TAG) --progress plain -f builder.dockerfile .
	#docker buildx build -t $(BUILDER_TARGET_IMAGE_TAG) --push --progress plain  -f builder.dockerfile .

build:
	pnpm install && pnpm build

.PHONY: package
package:
	docker run -i --rm -v $(CURDIR):/app $(BUILDER_TARGET_IMAGE_TAG)


.PHONY: release
release: builder package
	docker build -t $(RELEASE_IMAGE_TAG) --progress plain -f release.dockerfile .
	#docker buildx build -t $(RELEASE_IMAGE_TAG) --push --progress plain  -f Dockerfile .