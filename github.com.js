// Hide the news since you can't filter it
//
// Preview:
// http://cl.ly/1G3O0T311a2q1Y1D1C0k

var quietStyles = '<style type="text/css">' +
                  '  #footer { display: none; }' +
                  '  #dashboard .octofication { display: none; } ' +
                  '  .quiet #dashboard .news { display: none; } ' +
                  '  .quiet #dashboard .repos { box-sizing: border-box; width: 100%; } ' +
                  '  .quiet #dashboard .filter_input { border-radius: 4px; font-size: 24px; padding: 8px 8px 6px; width: 100%; } ' +
                  '</style>'

$(quietStyles).appendTo('body');

$(document).keypress(function(e) {
  if (e.which == 113) {
    $('body').toggleClass('quiet');
  }
});
