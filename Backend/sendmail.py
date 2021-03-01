import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from flask import Flask,request,redirect
app = Flask(__name__)
@app.route('/data/', methods=['POST','GET'])
def data():
    mail = smtplib.SMTP(host = "smtp.gmail.com")
    mail.starttls()    
    email = ""
    password = ""
    mail.login(email,password)
    sentby = request.form['name']
    sentbyemail = request.form['email']
    messagebody = request.form['message']
    message = MIMEMultipart()
    message.set_charset("utf-8")
    message['To'] = email
    message['From'] = email
    message['Subject'] = f"A message from {sentby} <{sentbyemail}> via portfolio form"
    messagebody= MIMEText(messagebody)
    message.attach(messagebody)
    mail.sendmail(email,email,message.as_string())
    mail.close()
    return '''<meta http-equiv="refresh" content="0; URL=http://127.0.0.1:5500/Vivek.html" /><script>alert("Thank you for your message. I look forward to reading and replying to it.")</script>'''

    

##run flask local server
##set FLASK_APP=sendmail.py
##set FLASK_ENV=development
##py -m flask run
