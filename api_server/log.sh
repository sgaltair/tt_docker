rm -rf log.json
echo "{" > log.json
PYTHONUNBUFFERED=x webserver >> log.json
echo "\n}" >> log.json