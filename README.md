# log-requests
A service that simply echos and logs all requests sent to it

## Usage
```
npm install log-requests
log-requests --help

Usage: log-requests [options]

A service that simply echos and logs all requests sent to it

Options:

  -h, --help         output usage information
  -V, --version      output the version number
  -p, --port <port>  Specify port [2345]
  -u, --url          Log url
  -b, --body         Log body
  -q, --query        Log query
  -h, --headers      Log headers
  -c, --cookies      Log cookies

Examples:

  to log requests to http://localhost:2345:

  log-requests

  to log requests to http://localhost:2000:

  log-requests -p 2000
  log-requests --port 2000

  to log just the url and cookies for requests to http://localhost:2000:

  log-requests -p 2000 -uc
  log-requests --port 2000 --url --cookies

  to log just the headers query and body for requests to http://localhost:2000:

  log-requests -p 2000 -hqb
  log-requests -p 2000 --headers --query --body

```

## Output
```
log-requests
curl http://localhost:2345
```
Response:
```

  {"url":"/","body":{},"query":{},"headers":{"host":"localhost:2345","user-agent":"curl/7.43.0","accept":"*/*"},"cookies":{}}

```
Log:
```

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
nodejs (https://nodejs.org/en/)
