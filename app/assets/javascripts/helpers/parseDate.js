/*
 * NOTICE
 * 
 * This software was produced for the U. S. Government
 * under Contract No. FA8702-13-C-0001, and is
 * subject to the Rights in Noncommercial Computer Software
 * and Noncommercial Computer Software Documentation Clause (DFARS) 252.227-7014 (JUN 1995)
 *
 *  2013 The MITRE Corporation. All Rights Reserved.
*/
Ember.Handlebars.registerBoundHelper('parseDate', function(value, options) {
	var ret = ""
	if (value) {
		var mon = "" + value.getMonth();
		var dat = "" + value.getDate();
		var tm = value.getHours();
		var pm = false;
		if (tm == 0) {
			tm = 12;
		} else if (tm > 12) {
			pm = true;
			tm = tm - 12;
		}
		if (value.getMonth() < 10) {
			mon = "0" + mon
		}		
		if (value.getDate() < 10) {
			dat = "0" + dat
		}		
		ret = "" + value.getFullYear() + "-" + mon + "-" + dat + " " + tm + ":" + value.getMinutes();
		if (pm) {
			ret = ret + " pm";
		} else {
			ret = ret + " am";
		}
	}
  	return new Handlebars.SafeString(ret);
});

Ember.Handlebars.registerBoundHelper('parseShortDate', function(value, options) {
	var ret = ""
  var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
	if (value) {
		var mon = months[value.getMonth()];
		var dat = "" + value.getDate();

		if (value.getDate() < 10) {
			dat = "0" + dat
		}		
		ret = "" + mon + " " + dat;
		var year = value.getFullYear();
		var currYear = new Date().getFullYear();
		if (year != currYear) {
		  ret += " " + year;
		}
	}
  	return new Handlebars.SafeString(ret);
});

Ember.Handlebars.registerBoundHelper('parseShortDateTime', function(value, options) {
	var ret = ""
  var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
	if (value) {
		var mon = months[value.getMonth()];
		var dat = "" + value.getDate();
		var tm = value.getHours();
		var pm = false;
		if (tm == 0) {
			tm = 12;
		} else if (tm > 12) {
			pm = true;
			tm = tm - 12;
		}

		if (value.getDate() < 10) {
			dat = "0" + dat
		}		
		ret = "" + mon + " " + dat;
		var year = value.getFullYear();
		var currYear = new Date().getFullYear();
		if (year != currYear) {
		  ret += " " + year;
		}
		ret += " " + tm + ":";
		var min = value.getMinutes();
		if (min < 10) {min = "0" + min;}
		ret += min;
		if (pm) {
			ret = ret + " pm";
		} else {
			ret = ret + " am";
		}
	}
  	return new Handlebars.SafeString(ret);
});