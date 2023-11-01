CC = tsc
SRCDIREC = src/
SOURCEFILES = $(wildcard ${SRCDIREC}*.ts)

compile:
	@echo "Compiling code..."
	${CC} ${SOURCEFILES} --outDir compiledjs
	@echo "Done"

