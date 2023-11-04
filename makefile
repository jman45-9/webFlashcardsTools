CC = tsc
SRCDIREC = src/
OUTDIR = pages
SOURCEFILES = $(wildcard ${SRCDIREC}*.ts)

compile:
	@echo "Compiling code..."
	@${CC} ${SOURCEFILES} --outDir ${OUTDIR} -p ./.tsconfig.json
	@echo "Done"

