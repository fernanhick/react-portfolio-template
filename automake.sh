#!/bin/bash

mkdir components images
cd components


for i in Navbar Sidebar Footer HeroSection InfoSections

do 
	mkdir $i 
	cd $i
	touch index.js $i\Elements.js data.js
	cd ..
done 
