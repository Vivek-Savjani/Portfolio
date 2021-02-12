import smtplib
mail = smtplib.SMTP(host = "smtp.gmail.com")
mail.starttls()
password = ""
email = ""
mail.login(email,password)
mail.sendmail(email,email,"test")
mail.close()