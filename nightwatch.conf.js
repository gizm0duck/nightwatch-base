
const config = {
  "src_folders": [
    "tests"
  ],
  "custom_commands_path": "custom_commands",
  page_objects_path: 'pages',
  "output_folder": "reports", // reports (test outcome) output by Nightwatch
  "globals_path": "./globals.js",
  "test_settings": {
    "default": {
      "launch_url": "http://6e1a1f97.ngrok.io", // we're testing a Public or "staging" site on Saucelabs
      "silent": true,
      "selenium_host": "chromedriver",
      "screenshots": {
        "enabled": true, // save screenshots to this directory (excluded by .gitignore)
        "path": "reports"
      },
      "videos": {
        "enabled": true,
        "delete_on_success": true,
        "path": "reports"
      },
      "desiredCapabilities": {
        "browserName": "chrome",
        "chromeOptions": {
          "args": [
            "window-size=1280,800"
          ]
        }
      }
    },
    "chrome": { // your local Chrome browser (chromedriver)
      "desiredCapabilities": {
        "browserName": "chrome",
        "javascriptEnabled": true,
        "acceptSslCerts": true
      }
    },
    "firefox" : {
      "desiredCapabilities": {
        "browserName": "firefox",
        "javascriptEnabled": true,
        "acceptSslCerts": true
      }
    },
    "iphone_6_simulator": {
      "desiredCapabilities": {
        "browserName": "iPhone",
        "deviceOrientation": "portrait",
        "deviceName": "iPhone 6",
        "platform": "OSX 10.10",
        "version": "8.4"
      }
    }
  }
}
module.exports = config;
