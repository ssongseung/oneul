document.write('<script type="text/javascript" src="https://www.gstatic.com/firebasejs/8.6.5/firebase-app.js"></script>');
document.write('<script type="text/javascript" src="https://www.gstatic.com/firebasejs/8.6.5/firebase-auth.js"></script>');
document.write('<script type="text/javascript" src="https://www.gstatic.com/firebasejs/8.6.5/firebase-firestore.js"></script>');
document.write('<script type="text/javascript" src="https://www.gstatic.com/firebasejs/8.6.5/firebase-storage.js"></script>');
document.write('<script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>');

window.onload = function(){
    const firebaseConfig = {
            apiKey: "AIzaSyBPwBvkUab2QHIgqTPODBIC8gWWowDohjM",
            authDomain: "oneul-9b3e4.firebaseapp.com",
            databaseURL: "https://oneul-9b3e4-default-rtdb.asia-southeast1.firebasedatabase.app",
            projectId: "oneul-9b3e4",
            storageBucket: "oneul-9b3e4.appspot.com",
            messagingSenderId: "993417131341",
            appId: "1:993417131341:web:ce271d5bffa75a7d42f304"
        };
    
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
}



