RELEASE_IMAGE_TAG = "nuxt-release:latest"

BUILDER_TARGET_IMAGE_TAG = "nuxt-builder"

.PHONY: builder
builder:
	docker build -t $(BUILDER_TARGET_IMAGE_TAG) --progress plain -f .docker/builder.dockerfile .
	#docker buildx build -t $(BUILDER_TARGET_IMAGE_TAG) --push --progress plain  -f .docker/builder.dockerfile .

build:
	pnpm install && pnpm build

.PHONY: package
package:
	docker run -i --rm -v $(CURDIR):/app $(BUILDER_TARGET_IMAGE_TAG)


.PHONY: release
release:
	docker build -t $(RELEASE_IMAGE_TAG) --progress plain -f .docker/release.dockerfile .
	#docker buildx build -t $(RELEASE_IMAGE_TAG) --push --progress plain  -f .docker/release.dockerfile .