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
    sentby = request.args.get('name')
    sentbyemail = request.args.get('email')
    messagebody = request.args.get('message')
    message = MIMEMultipart()
    message.set_charset("utf-8")
    message['To'] = email
    message['From'] = email
    message['Subject'] = f"A message from {sentby} <{sentbyemail}> via portfolio form"
    messagebody= MIMEText(messagebody)
    message.attach(messagebody)
    mail.sendmail(email,email,message.as_string())
    mail.close()
    print(sentby)
    print(messagebody)
    print(message.as_string())
    return redirect("http://127.0.0.1:5500/Vivek.html") 

##run flask local server
##set FLASK_APP=sendmail.py
##py -m flask run
##set FLASK_ENV=development