var jenkinsapi = require('jenkins-api');
var jenkins = jenkinsapi.init('https://username:token@jenkins.company.com');


class JenkinsRun {

    doRun() { 
        jenkins.build_with_params('test', {test:'hello'}, function(err, data) {
            if (err){ 
                return console.log(err); 
            }
            console.log(data)
        });
        
        jenkins.last_build_info('test', function(err, data) {
            if (err){ 
                return console.log(err); 
            }   
            
            jenkins.console_output('test', data.id, function(err, data) {
                if (err){ 
                    return console.log(err); 
                }
                console.log(data)}
                );   
            });
        }
        
    }

module.exports = JenkinsRun
//junk = new JenkinsRun()