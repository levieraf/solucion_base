<!DOCTYPE html>
<!--[if IE 8]> <html lang="en" class="ie8"> <![endif]-->
<!--[if IE 9]> <html lang="en" class="ie9"> <![endif]-->
<!--[if !IE]><!--> <html lang="en"> <!--<![endif]-->
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="token" id="token" value="{{ csrf_token() }}">
        <title>Solucion Base</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta content="width=device-width, initial-scale=1" name="viewport"/>
        <meta content="Solucion Base" name="description"/>
        <meta content="Luis Viera" name="author"/>
        <link rel="stylesheet" href="css/all.css"/>
    </head>
    <body>
        <div id="app">
            <router-view></router-view>
        </div>
    </body>
    <script src="js/vendor.js"></script>
    <script src="js/main.js"></script>
</html>
