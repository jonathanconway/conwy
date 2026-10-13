# `server` folder

Server modules can, and should only be, consumed in server side files. They are consumed in static site build or pre-build processes, CLI tools or automated tests.

They typically contain code that depends on NodeJS server side features, such as IO, the file system and libraries that target NodeJS.
