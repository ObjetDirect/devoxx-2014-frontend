--------------------------------------------------------------------------------------------------------------
What do you need ?
* Install NodeJs: http://nodejs.org/
* Install Git: https://code.google.com/p/msysgit/ or http://git-scm.com/download/win
* Install PhantomJs: http://phantomjs.org/
* Install Chrome: http://www.google.fr/intl/fr/chrome/browser/
* Install SVN: http://subversion.tigris.org/

Next, put into the system PATH:
* NodeJs bin
* Git bin
* SVN bin
* PhantomJs bin (with the specified name: PHANTOMJS_BIN)
* Chrome exe (with the specified name: CHROME_BIN)


--------------------------------------------------------------------------------------------------------------
If you have a proxy:

You have a configuration property to configure Git
git config --global http.proxy http://proxy.company.com:8080
git config --global https.proxy http://proxy.company.com:8080

And if needed
git config --global url."https://".insteadOf git://

You have two configuration properties to configure NPM
npm config set proxy http://proxy.company.com:8080
npm config set https-proxy http://proxy.company.com:8080

For Bower, put into the PATH the variable "HTTP_PROXY"
HTTP_PROXY http://proxy.company.com:8080
HTTPS_PROXY http://proxy.company.com:8080

--------------------------------------------------------------------------------------------------------------
After that, open a shell prompt, go to the current directory and type the following commands
> npm install
    -> We will install required NodeJs main and development plugins

> grunt default
    -> If 'Logging some stuff...' appears, the install seems good

> grunt dependencies
    -> download all required dependencies for the application
    -> we can do too: > grunt dependencies:install


--------------------------------------------------------------------------------------------------------------
To clean the target folder
> grunt clean

To generate reports:
> grunt reports

To update dependencies
> grunt dependencies

To generate some reports
> grunt reports

To execute tests
> grunt tests

To generate the distribution application
> grunt dist

To enable the live loading (if you have include some reverse proxy, be sure that the firewall of your post will not blocked you)
> grunt server


Nota Bene: if "grunt" is not recognized:
* do a global install
    > npm install -g grunt grunt-cli

* use instead of the following command
    > "./node_modules/bin/grunt" reports


--------------------------------------------------------------------------------------------------------------
Don't forget to specify some required mime-type on your web server

For example, for Apacahe:
AddType text/cache-manifest .appcache
AddType text/html .tmpl
AddType text/less .less
AddType image/svg+xml .svg
AddType font/opentype .otf
AddType application/vnd.ms-fontobject .eot
AddType application/octet-stream .ttf
AddType application/font-woff .woff

For ASP .Net MVC projects, into the Web.config file:
<system.webServer>
    ...
    <staticContent>
      <remove fileExtension=".eot" />
      <mimeMap fileExtension=".eot" mimeType="application/vnd.ms-fontobject" />
      <mimeMap fileExtension=".woff" mimeType="application/font-woff" />
      <mimeMap fileExtension=".ttf" mimeType="application/octet-stream" />
      <mimeMap fileExtension=".otf" mimeType="font/opentype" />
      <mimeMap fileExtension=".appcache" mimeType="text/cache-manifest" />
      <mimeMap fileExtension=".tmpl" mimeType="text/html" />
      <mimeMap fileExtension=".less" mimeType="text/less" />
      <mimeMap fileExtension=".svg" mimeType="image/svg+xml" />
    </staticContent>
</system.webServer>