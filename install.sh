#!/usr/bin/bash

apt-get update -y
apt-get upgrade -y
apt-get install nodejs -y
apt-get install libwebp -y
apt-get install mc -y
apt-get install ffmpeg -y
apt-get install imagemagick -y
apt-get install wget -y
apt-get install tesseract -y
wget -O ~/../usr/share/tessdata/ind.traineddata "https://github.com/tesseract-ocr/tessdata/blob/master/ind.traineddata?raw=true"
npm install

echo "[*] Sukses Gan, semua paket bot telah terinstall, Jalankan bot menggunakan perintah \"npm start\" follow instagram @rey.bot02 untuk menanyakan seputar bot"
