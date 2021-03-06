#!/usr/bin/python3.7
from wsgiref.handlers import CGIHandler
import sys
sys.path.append('/kunden/homepages/42/d862915577/htdocs/.local/lib/python3.7/site-packages/')

from simple import app

class ProxyFix(object):
   def __init__(self, app):
       self.app = app

   def __call__(self, environ, start_response):
       environ['SERVER_NAME'] = ""
       environ['SERVER_PORT'] = "80"
       environ['REQUEST_METHOD'] = "GET"
       environ['SCRIPT_NAME'] = ""
       environ['QUERY_STRING'] = ""
       environ['SERVER_PROTOCOL'] = "HTTP/1.1"
       return self.app(environ, start_response)

if __name__ == '__main__':
    app.wsgi_app = ProxyFix(app.wsgi_app)
    CGIHandler().run(app)
