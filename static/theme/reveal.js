// Don't use the standard CSS import mechanism so that we can easily support directories of notebooks.
$('head').append('<link rel="stylesheet" href="static/theme/rise.css" type="text/css" />');

header = `
<a href="https://ioos.noaa.gov/project/dmac/">
    <img src="static/theme/IOOS.png" style="height: 4.5rem;" />
</a>
<div style="float: right;">
    <img src="static/theme/logo.jpg" style="height: 3.8rem;">
    DMAC | TechWebinar
</div>
`;

footer = `
<a href="https://github.com/ocefpaf/2018-10-25-DMAC-TechWebinar">https://github.com/ocefpaf/2018-10-25-DMAC-TechWebinar</a>

<div style="float: right;">
<a href="https://github.com/ocefpaf">Filipe Fernandes</a>
</div>
`;


$('#rise-header').html(header);
$('#rise-footer').html(footer);


index = Reveal.getIndices();
if (index.h == 0 & index.v == 0) {
    onFirstSlide();
}

Reveal.addEventListener('slidechanged', function(evt) {
  if (evt.indexh == 0 & evt.indexv == 0) {
    onFirstSlide();
  }
});


function onFirstSlide() {
  // Do the thing when first slide is being shown.
}
