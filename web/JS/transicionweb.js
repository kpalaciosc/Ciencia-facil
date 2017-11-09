$('a[href=#nosotros]').click(function (event)
{
event.stopPropagation();
var Position = jQuery('[id="nosotros"]').offset().top;
jQuery('html, body').animate({ scrollTop: Position }, 1500);
return false;
});

$('a[href=#materia]').click(function (event)
{
event.stopPropagation();
var Position = jQuery('[id="materia"]').offset().top;
jQuery('html, body').animate({ scrollTop: Position }, 1500);
return false;
});

$('a[href=#opcion]').click(function (event)
{
event.stopPropagation();
var Position = jQuery('[id="opcion"]').offset().top;
jQuery('html, body').animate({ scrollTop: Position }, 1500);
return false;
});

$('a[href=#contacto]').click(function (event)
{
event.stopPropagation();
var Position = jQuery('[id="contacto"]').offset().top;
jQuery('html, body').animate({ scrollTop: Position }, 1500);
return false;
});