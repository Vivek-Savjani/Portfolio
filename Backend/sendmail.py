from flask import Flask,request,render_template
app = Flask(__name__)

@app.route('/data', methods=['POST','GET'])
def data():
    print("works here")
    import smtplib
    mail = smtplib.SMTP(host = "smtp.gmail.com")
    mail.starttls()
    password = ""
    email = ""
    mail.login(email,password)
    sentby = request.args.get('email')
    ##mail.sendmail(email,email,sentby)
    mail.close()
    print(sentby)
    return "test19"

if __name__ == '__main__':
    app.run(host='127.0.0.1', port='8000', debug=True)


##set FLASK_APP=sendmail.py
##py -m flask run
##set FLASK_ENV=development