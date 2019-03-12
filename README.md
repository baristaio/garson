# Garcon
The flow manager service.

- receive actions via HTTP, AMQP or other transport protocol and redirect  it to related flow or service.

### Actions
Action trigger the flow. On requested action started actions flow from flow table.  For AMQP actions
##### Security
http requests should provide security token
##### Actions parameters:
- action name: _string_
- payload: _JSON_
- header: _dictionary_
    - token (activator information)
    - priority: _number_

##### Flow table
- action sender  name
- action [actions]  
- alternative action    
- exception action
- answer type: _answer via http possible for http requests only_

#### Transport

- http/s
- amqp



####
Run Rabbitmq docker:
```$bash
docker run -d --hostname rabbitmq --name rabbitmq -p 15672:15672  -p 5672:5672 -p 5671:5671  rabbitmq:3-management
```
