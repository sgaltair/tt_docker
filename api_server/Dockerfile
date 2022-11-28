FROM python:3.11.0

COPY webserver /usr/local/bin/
COPY log.sh /api_server/
WORKDIR /api_server
# ENV PYTHONUNBUFFERED = 1
HEALTHCHECK CMD curl  -s -o /dev/null  -w "%{http_code}" http://isame-lab.com:8069 || exit 1

CMD ["/bin/sh", "-c", "/api_server/log.sh"]