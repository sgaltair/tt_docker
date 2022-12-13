FROM python:3.11.0

ENV SRC_DIR /usr/bin/src/webapp/src
WORKDIR ${SRC_DIR}
ENV PYTHONUNBUFFERED = 1
HEALTHCHECK CMD curl  -s -o /dev/null  -w "%{http_code}" http://isame-lab.com:8069 || exit 1
CMD ["python", "simple_server.py"]