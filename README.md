# decredpower

This is the code for the [decredpower.com](https://decredpower.com/)

Decred Power is an immediate access layout to all things Decred for those with a strong appetite for more Decred.

## Suggestions

Suggestions welcome, file an [issue](https://github.com/planetdecred/decredpower/issues/new)

## Requirements

* [`Go` 1.14.4](https://golang.org/doc/install)
* [`Hugo-extended` 0.73.0](https://gohugo.io/getting-started/installing/)

## Development

1. Clone repo

    Make sure you have [git](https://git-scm.com/) installed.
    ```sh
    git clone https://github.com/planetdecred/decredpower
    cd decredpower
    ```
2. Start development hugo server
    ```sh
    hugo server -D
    ```
View on: ` http://localhost:1313/ `

## Static Deploy

Build the site

```sh
hugo 
```
This will create a `public` folder in the main path.
Upload files to hosting or server.

#### Some issues
If the sass files are not displayed correctly, try changing the baseurl in the configuration file
~~~
config.toml 
  baseurl = "URL"
~~~ 

For any other query visit the Hugo [documentation](https://gohugo.io/documentation/)
