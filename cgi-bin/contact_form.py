import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from flask import Flask,request,redirect
app = Flask(__name__)
@app.route('/data/', methods=['POST','GET'])
def data():
    mail = smtplib.SMTP_SSL("smtp.gmail.com",465)
    email = "vivekportfoliocontact@gmail.com"
    password = "EPcz$RKYJ#JQ*QF-79Mnx__kFyS^QnVCR+5&MV6?PugLa3HDBAuS^5!4&Q^As9D85j+khKLYBm?LGDQqrRpzrguTYPt?8=YcH2%v"
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
    return f'''<meta http-equiv="refresh" content="0; URL=http://vivek.nsavjani.co.uk/Vivek.html" /><script>alert("Thank you for your message {sentby}. I look forward to reading and replying to it.")</script>'''
@app.route('/test/', methods=['POST','GET'])
def test():
  return "cgi is running"
@app.route('/testdata/',methods=["GET","POST"])
def testdata():
 return(request.form['name'])

##run flask local server
##set FLASK_APP=sendmail.py
##set FLASK_ENV=development
##py -m flask run
