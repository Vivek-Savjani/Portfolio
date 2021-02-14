from flask import Flask,request,render_template
app = Flask(__name__)

@app.route('/addr', methods=['POST','GET'])
def addr():
    return render_template("Vivek.html")


import smtplib
mail = smtplib.SMTP(host = "smtp.gmail.com")
mail.starttls()
password = ""
email = ""
mail.login(email,password)
mail.sendmail(email,email,"test7")
mail.close()


##set FLASK_APP=sendmail.py
##py -m flask run
##set FLASK_ENV=development