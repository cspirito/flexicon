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
Ember.Handlebars.registerBoundHelper('karma', function(value, valct, options) {
	var tmp = 0;
	ret = "<div class='stars' style='cursor: default;'>";
	while (tmp++ <= value - 1) { // display a full star for each whole number
		ret = ret + "<img src='/images/star-on.png'>";
	}
	if (tmp - value === 0.5) { // display a half star if fractional value
		ret = ret + "<img src='/images/star-half.png'>";
		tmp++;
	}
	while (tmp++ <= 5) { // display an empty star until we have 5 star images total
		ret = ret + "<img src='/images/star-off.png'>";
	}
	ret = ret + "<span class='badge badge-info' style='margin-left: 10px;'>";
	ret = ret + valct;
	ret = ret + " votes</span></div>"
  	return new Handlebars.SafeString(ret);
});