<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=0.8">
    {{-- <meta http-equiv="X-UA-Compatible" content="ie=edge"> --}}
    <meta name="theme-color" content="#35006e" />
    <meta name="msapplication-navbutton-color" content="#35006e">
<!-- iOS Safari -->
    <meta name="apple-mobile-web-app-status-bar-style" content="#35006e">
    <title>Адаптивная верстка - от новичка до профессионала</title>
    <link rel="stylesheet" href="{{url('css/app.css')}}">
    @section('fonts')
      <link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,400,500,500i,700,900|Source+Sans+Pro:200,300,400,600,700,900&amp;subset=cyrillic" rel="stylesheet">
    @show
</head>
<body>
    @yield('header')
    @yield('content')
    @yield('footer')
    <script src = "{{url('js/super.js')}}"></script>
</body>
</html>