const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');

new WebpackPwaManifest({
  name: "Budget Tracker",
  short_name: "moneyWatch",
  description: "An app that allows you to check your spending while travelling.",
  start_url: "../index.html",
  background_color: "#dddddd",
  theme_color: "#ffffff",
  fingerprints: false,
  inject: false,
  icons: [{
    src: path.resolve("assets/img/icons/icon-512x512.png"),
    sizes: [72, 96, 128, 144, 152, 192, 384, 512],
    destination: path.join("assets", "icons")
  }]
})