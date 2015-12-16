# log-requests
A service that simply echos and logs all requests sent to it


## Usage
```
npm install log-requests

// help
log-requests --help

Options:

  -h, --help         output usage information
  -V, --version      output the version number
  -p, --port <port>  Specify port [2345]
  -a, --all          Log all attributes
  -u, --url          Log url
  -b, --body         Log body
  -q, --query        Log query
  -h, --headers      Log headers
  -c, --cookies      Log cookies

// usage
log-requests -a -p 2345

curl http://localhost:2345

// response
{"url":"/","body":{},"query":{},"headers":{"host":"localhost:2345","user-agent":"curl/7.43.0","accept":"*/*"},"cookies":{}}

// terminal log
________________REQUEST SUMMARY________________
url:     /
body:

query:

headers:
  host:       localhost:2345
  user-agent: curl/7.43.0
  accept:     */*
cookies:

```


## Dependencies
- nodejs (https://nodejs.org/en/)
