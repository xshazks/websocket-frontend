<!DOCTYPE html>
<html>
<head>
    <title>WebSocket Chat</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0ed3cf">
    <meta name="msapplication-TileColor" content="#0ed3cf">
    <meta name="theme-color" content="#0ed3cf">

    <meta property="og:image" content="http://tailwindcomponents.com/storage/799/temp75559.png?v=2023-02-20 06:33:35" />
    <meta property="og:image:width" content="1280" />
    <meta property="og:image:height" content="640" />
    <meta property="og:image:type" content="image/png" />

    <meta property="og:url" content="https://tailwindcomponents.com/component/sign-up-form/landing" />
    <meta property="og:title" content="Sign Up Form by shubhamjainco" />
    <meta property="og:description" content="A Sign Up Form for Tailwind CCSS" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@TwComponents" />
    <meta name="twitter:title" content="Sign Up Form by shubhamjainco" />
    <meta name="twitter:description" content="A Sign Up Form for Tailwind CCSS" />
    <meta name="twitter:image" content="http://tailwindcomponents.com/storage/799/temp75559.png?v=2023-02-20 06:33:35" />
    
    <link href="https://unpkg.com/tailwindcss@0.3.0/dist/tailwind.min.css" rel="stylesheet">
    
</head>
<body class="bg-grey-lighter min-h-screen flex flex-col" style="background-image: url(2.jpg); background-size: 100px;"></body>
<div class="min-h-screen flex flex-col">
    <div class="container max-w-sm mx-auto items-center justify-center px-2">
        <div class="bg-green px-6 py-8 rounded shadow-md text-black w-full">
    <h1 class="mb-8 text-3xl text-center">Chat Yoooo</h1>
    <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
    <input type="text" class="block border border-grey-light w-full p-3 rounded mb-4" id="username" placeholder="Username" />
    <input type="text" class="block border border-grey-light w-full p-3 rounded mb-4" id="message" placeholder="Message" />
    <button id="send" class="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1">Send</button>
    <div id="messages" class="bg-white px-6 py-8 scrool shadow-md text-black w-full"></div><br>
</div>
    </div>
        </div>

    <script>
        $(function() {
            var socket = new WebSocket("wss://ws-new1-723cde489905.herokuapp.com/ws?username=" + encodeURIComponent($('#username').val()));

            socket.onmessage = function(event) {
                var message = JSON.parse(event.data);
                var content = "<strong>" + message.username + ":</strong> " + message.content + "<br />";
                $('#messages').append(content);
            };

            $('#send').click(function() {
                var message = {
                    username: $('#username').val(),
                    content: $('#message').val()
                };
                socket.send(JSON.stringify(message));
                $('#message').val('');
            });
        });
    </script>
</body>
</html>