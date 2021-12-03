let errorStatus = 404;

switch (errorStatus) {
    case 400:
        console.log( 'Маловато 400' );
        break;
    case 401:
        console.log( 'В точку! 401' );
        break;
    case 402:
        console.log( 'Перебор 402' );
        break;
    case 403:
        console.log( 'Перебор 403' );
        break;
    case 404:
        console.log( 'Перебор 404' );
        // break;
    default:
        console.log( "Нет таких значений" );
}