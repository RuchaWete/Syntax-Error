var firebaseConfig = {
    apiKey: "AIzaSyA2uGw7nM1S4iYDhzhVgvURnl07PSYlRK4",
  authDomain: "tripplanner-9b05d.firebaseapp.com",
  databaseURL: "https://tripplanner-9b05d-default-rtdb.firebaseio.com",
  projectId: "tripplanner-9b05d",
  storageBucket: "tripplanner-9b05d.appspot.com",
  messagingSenderId: "1077597827775",
  appId: "1:1077597827775:web:b7cadaad7d54ed37b28c0a",
  measurementId: "G-5SBRM1G95T"
  };

  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth()
  const database = firebase.database()
  
  function login () {
    email = document.getElementById('email').value
    password = document.getElementById('password').value
  
    if (validate_email(email) == false || validate_password(password) == false) {
      alert('Incorrect email or password')
      return
    }
  
    auth.signInWithEmailAndPassword(email, password)
    .then(function() {
      var user = auth.currentUser
      var database_ref = database.ref()
      var user_data = {
        last_login : Date.now()
      }
  
      database_ref.child('users/' + user.uid).update(user_data)
      location.href = "team.html"
  
    })
    .catch(function(error) {
      var error_code = error.code
      var error_message = error.message
      alert(error_message)
    })
  }
    
  function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true) {
      return true
    } else {
      return false
    }
  }
  
  function validate_password(password) {
    if (password < 6) {
      return false
    } else {
      return true
    }
  }
  
  function validate_field(field) {
    if (field == null) {
      return false
    }
    if (field.length <= 0) {
      return false
    } else {
      return true
    }
  }