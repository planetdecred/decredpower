# decredpower

This is the code for the [decredpower.com](https://decredpower.com/) website.

Decred Power is an immediate access layout to all things Decred for those with a strong appetite for more Decred.

## Suggestions

Suggestions welcome, file an [issue](https://github.com/planetdecred/decredpower/issues/new)


## Requirements

* `Go` 1.14.4
* `Hugo-extended` 0.73.0

You should now be able to access the site at `http://localhost:1313`

## Testing

* Installing Go
  * Minimum supported version is 1.11.4. Installation instructions can be found [here](https://golang.org/doc/install).
  
* Installing Hugo
  * The instructions for your OS can find [here](https://gohugo.io/getting-started/installing/).
  
####  Start the Hugo server 

* ` hugo server -D `

* ` http://localhost:1313/ `

## Static Deploy

For a static deployment you must use the command ` hugo `.

This will create a `Public` folder in the main path.
Upload files to hosting or server.

#### Some issues
If the sass files are not displayed correctly, try changing the baseurl in the configuration file
~~~
config.toml 
  baseurl = "URL"
~~~ 
## Another Options of Deployment

For a another options of deployment you can consult the following documentation.

- [Hugo Deploy](https://gohugo.io/hosting-and-deployment/hugo-deploy/).
- [Host-Agnostic Deploys with Nanobox](https://gohugo.io/hosting-and-deployment/deployment-with-nanobox/).
- [Host on Render](https://gohugo.io/hosting-and-deployment/hosting-on-render/).
- [Host on AWS Amplify](https://gohugo.io/hosting-and-deployment/hosting-on-aws-amplify/).
- [Host on Netlify](https://gohugo.io/hosting-and-deployment/hosting-on-netlify/).
- [Host on GitHub](https://gohugo.io/hosting-and-deployment/hosting-on-github/).
- [More Options](https://gohugo.io/hosting-and-deployment/)...

#### Some issues
If the sass files are not displayed correctly, try changing the baseurl in the configuration file
~~~
config.toml 
  baseurl = "URL"
~~~ 