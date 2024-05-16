document.getElementsById('contact-form')
.addEventListner('submit',function(e){
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email')value;
    var messege = document.getElementById('messege').value;
    var subject = "new message from"+name;
    var body ="name"+ name + "\nEmail:" + email + "\nMessege:" +messege;
    var mailto_link ='mailto:shreevidya96448@gmail.com' + '?subject='
     + subject +'&body=' + encodeURIComponent(body);
     window.location.href = mailto_link;
})