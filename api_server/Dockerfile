FROM python:3.11.0

COPY webserver /usr/local/bin/
COPY log.sh /api_server/
WORKDIR /api_server
# ENV PYTHONUNBUFFERED = 1

CMD ["/bin/sh", "-c", "/api_server/log.sh"]