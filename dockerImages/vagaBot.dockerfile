FROM python:3.6.2-alpine3.4
RUN apk add --update alpine-sdk libffi-dev libxml2-dev openssl-dev libxslt-dev
RUN pip install cffi
RUN pip install scrapy
