// var twilio = require('twilio');
const accountSid = 'AC1327cce8e207e6d4fd419062786317f5'; // Your Account SID from www.twilio.com/console
const authToken = 'd4c52951279eddb64bb354f425d48fcd';   // Your Auth Token from www.twilio.com/console

const twilio = require('twilio');
const client = new twilio(accountSid, authToken);
const MessagingResponse = require('twilio').twiml.MessagingResponse;

class TwilioRun {
    
    sendFirstMsg() {
        client.messages.create({
            body: 'Your appointment is coming up on chinese at 8am',
            to: 'whatsapp:+60173680025',  // Text this number
            from: 'whatsapp:+14155238886' // From a valid Twilio number
        })
        .then((message) => console.log(message.sid));
    }
    
    sendConversation(res){        
        const twiml = new MessagingResponse();
        twiml.message('The Robots are coming! Head for the hills!');
        
        res.writeHead(200, {'Content-Type': 'text/xml'});
        res.end(twiml.toString());
    }
        
}

module.exports = TwilioRun
//junk = new JenkinsRun()