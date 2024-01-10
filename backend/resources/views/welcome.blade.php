<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>{{config('app.name')}}</title>
        <style>
            .content{
                color:#598d0b;
                background-color: aliceblue;
            }
            .text{
                margin:300px, auto;
            }
            .text h2 {
                margin-left: 45%;
            }
        </style>
    </head>
    <body class="antialiased content">
        <div class="text">
            <h2 class="">TAIC BACKEND APP IS LIVE</h2>
        </div>
    </body>
</html>
