## Lingua

A language based machine learning system. Teaching a machine languages. A framework for control, question & response, response assertion, translation, audio to text.

# Features

* [  ] Setup a machine learning
* [  ] Feed tons of languages
* [  ] Train a model
* [  ] Setup a pattern

# Short-term goal

* [  ] Integrate all the systems together

# Systems to integrate

* [  ] Twilio integration
* [  ] Github integration
* [  ] Question and Response framework
* [  ] Google Audio to Text

# What is needed?

## Question and Response framework
* [  ] Response Assertion
* [  ] Question Response


# Workaround

## Twilio Workaround

* In order to have a two way conversation in What's App on Twilio, you'll need to establish a Session. However, a Session must be initiated by the user only and the Session will only live for 24 hours.
* So in order to workaround this issue, everyday in the morning, it'll start off with a greeting from the chatbot in the hopes that the user replies back.
* Limitations: If users doesn't reply, then no Session is created.

# Implementation details

* [  ] Need a server to listen to conversation
* [  ] Need a timer to send chats at fixed interval
* [  ] Need a dictionary of words and conversation with answers
* [  ] Need a library to link messaging platforms
* [  ] Need a user mgmnt system to organize users

# Milestone

* [  ] Every morning sends a 你好
* [  ] User replies, submit a conversation (A conversation is Q & A based)
* [  ] Once a conversation completes a new conversation will start in 30 mins
* [  ] User sends "?你", bot replies with definition of the word