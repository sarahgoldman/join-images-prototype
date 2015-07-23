/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

function loadXMLDoc(filename) {
	if (window.XMLHttpRequest) {
  		xhttp=new XMLHttpRequest();
  	} else {
  		xhttp=new ActiveXObject("Microsoft.XMLHTTP");
  	}
	xhttp.open("GET",filename,false);
	xhttp.send();
	return xhttp.responseXML;
}

var app = {
	
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady(), false);
		
    },
    // deviceready Event Handler
    onDeviceReady: function(self) {
        var self = this;
		document.getElementById('join-data').addEventListener('click', function(e){
			self.joinImagesData();
		});
		document.getElementById('resize-data').addEventListener('click', function(e){
			self.resizeImageData();
		});
    },
	
	joinImagesData: function() {
		var xml = loadXMLDoc('xml/sample.xml');
		var leftEncoded = xml.getElementsByTagName('image')[0].childNodes[0].nodeValue;
		var rightEncoded = xml.getElementsByTagName('image')[1].childNodes[0].nodeValue;
		plugins.JoinImages.join({
			sourceType: 'base64',
			firstImage: leftEncoded,
			secondImage: rightEncoded,
			size: 5,
			success: function(data){
				console.log(data);
				document.getElementById('result').src = 'data:image/jpeg;base64,'+data;
			},
			error: function(data){console.log(data)}
		});
	},
	
	resizeImageData: function() {
		var xml = loadXMLDoc('xml/sample.xml');
		var leftEncoded = xml.getElementsByTagName('image')[0].childNodes[0].nodeValue;
		plugins.JoinImages.resize({
			sourceType: 'base64',
			image: leftEncoded,
			size: 0.1,
			success: function(data){
				console.log(data);
				document.getElementById('result').src = 'data:image/jpeg;base64,'+data;
			},
			error: function(data){console.log(data)}
		});
	},

};

app.initialize();