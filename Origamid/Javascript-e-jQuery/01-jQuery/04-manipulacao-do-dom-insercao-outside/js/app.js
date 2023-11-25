// Adiciona após o conteudo

$('h2').after('Isso é um h2') 
$('h2').insertAfter($('h3'))

// Adiciona antes do conteudo

$('h2').before('Isso é um h2') 
$('h2').insertBefore($('h3'))


$('p').wrap('<span> teste </span>')
$('li p').unwrap('')