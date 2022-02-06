VERSION=0.1
PKGNAME=ilegra-desafio-front
DOCKER_DEVELNAME=${PKGNAME}-dev
DEPLOYHOST?=moitabrava

all: docker_build_dev

.PHONY: run
run: docker_run_dev
	@true

.PHONY: buildrun
buildrun: docker_build_dev docker_run_dev
	@true

.PHONY: cleandir
cleandir: clean_release
	cd ${PWD} && rm -fv -rfv node_modules

.PHONY: clean_release
clean_release:
	cd ${PWD} && rm -fv ${PKGNAME}.img
	cd ${PWD} && rm -fv -rfv dist

.PHONY: docker_build_dev
docker_build_dev:
	docker build \
		-t ${DOCKER_DEVELNAME} -f ./Dockerfile.dev .
	-docker run --rm -it \
		-v ${PWD}/:/code \
		--name ${DOCKER_DEVELNAME} \
		-w /code ${DOCKER_DEVELNAME} \
		bash -x npm-install.sh

.PHONY: docker_run_dev
docker_run_dev:
	docker run --rm -it \
		-p 4200:4200 \
		-v ${PWD}/:/code \
		--name ${DOCKER_DEVELNAME} \
		-w /code ${DOCKER_DEVELNAME} \
		bash -c "npm run dev"

.PHONY: docker_bash
docker_bash:
	docker exec -it -w /code --name ${DOCKER_DEVELNAME} \
		${DOCKER_DEVELNAME} \
		bash -l

.PHONY: docker_run_bash
docker_run_bash:
	docker run --rm -it -v ${PWD}:/code -w /code ${DOCKER_DEVELNAME} \
		bash -l

.PHONY: release-send
release-send:
	rsync -avz --progress ${PKGNAME}-${VERSION}.img ${DEPLOYHOST}:

.PHONY: release
release: docker_build_dev docker_build_release docker_save_release

.PHONY: docker_save_release
docker_save_release: docker_build_release
	docker save ${PKGNAME}:${VERSION} -o ${PKGNAME}-${VERSION}.img
	chmod 644 ${PKGNAME}-${VERSION}.img

.PHONY: docker_build_release
docker_build_release:
	docker run --rm -it \
		-p 4200:4200 \
		-v ${PWD}/:/code \
		--name ${DOCKER_DEVELNAME} \
		-w /code ${DOCKER_DEVELNAME} \
		bash -c "ng build --progress --prod"
	docker build -t ${PKGNAME}:${VERSION} \
		-f ${PWD}/Dockerfile.release .

.PHONY: tests
tests:
	cd ${PWD}/tests && ${MAKE}
