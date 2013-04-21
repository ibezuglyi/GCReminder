function sendEmails() {
  
  var sheet = SpreadsheetApp.getActiveSheet();
  
  var body;
  var date = new Date();
  var users = SpreadsheetApp.getActiveSpreadsheet().getEditors();
  for (var i=0; i< users.length; i++) 
  {
    var emailAddress = users[i].getEmail();   
    var subject = "<<subject>>";
    try{
      MailApp.sendEmail(emailAddress, subject, "<<body>>");
      Logger.log("Email sent to " + emailAddress + " at " + date);
    }catch(e)
    {
      Logger.log("There is an error sending email to " + emailAddress + " " + e);
    }
   
  }
}