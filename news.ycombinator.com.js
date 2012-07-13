// A more readable Hacker News
//
// Inspired by:
// https://github.com/zeke/dotjs_scripts/blob/master/news.ycombinator.com.js
//
// Preview:
// http://cl.ly/I3o0

$('table').css({
  width: '700px',
  background: 'none'
});

$('textarea').css({
  width: '100%'
});

$('span.comment').css({
  fontFamily: 'TisaCompPro, Georgia',
  fontSize: '1.2em',
  lineHeight: '1.4em'
});

$('img[src$="grayarrow.gif"]').replaceWith('<span class="grayarrow">▲</span>');

$('span.grayarrow').css({
  color: 'grey',
  fontSize: '0.8em',
  padding: '0 0.5em'
});
