# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client

authtool = []
authkey = open('api.auth','r')
for target_list in authkey:
    authtool.append(target_list.replace('\n', ''))
# Your Account Sid and Auth Token from twilio.com/console
# DANGER! This is insecure. See http://twil.io/secure
account_sid = authtool[0]
auth_token = authtool[1]
client = Client(account_sid, auth_token)

message = client.messages \
    .create(
         from_='whatsapp:+14155238886',
         body='Hi Joe! Thanks for ~placing an~ order with us. *We’ll let* you know once your _order has been_ processed and delivered. Your order number is ```O12235234```',
         to='whatsapp:' + authtool[2]
     )

print(message.sid)
