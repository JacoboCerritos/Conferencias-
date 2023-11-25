// replace these values with those generated in your Video API account
var apiKey = "47813501";
var sessionId = "2_MX40NzgxMzUwMX5-MTcwMDg4NDU2NjQyMX5qWlNmWDZ2dTkzME54eVQ3c1dSbUpIUnN-fn4";
var token = "T1==cGFydG5lcl9pZD00NzgxMzUwMSZzaWc9ODdiMjYxM2MzOGM1ZDRiN2JiZjg0ZDg1YWZlMDE2MDM0YTQ1YjIwZTpzZXNzaW9uX2lkPTJfTVg0ME56Z3hNelV3TVg1LU1UY3dNRGc0TkRVMk5qUXlNWDVxV2xObVdEWjJkVGt6TUU1NGVWUTNjMWRTYlVwSVVuTi1mbjQmY3JlYXRlX3RpbWU9MTcwMDg4NDU5MyZub25jZT0wLjI1MTEyMTk5MzQ2NjczMTcmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTcwMDg4ODE5MiZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==";

// (optional) add server code here
initializeSession();

// Handling all of our errors here by alerting them
function handleError(error) {
    if (error) {
      alert(error.message);
    }
  }
  
  function initializeSession() {
    var session = OT.initSession(apiKey, sessionId);

  
    // Subscribe to a newly created stream
    session.on('streamCreated', function(event) {
        session.subscribe(event.stream, 'subscriber', {
          insertMode: 'append',
          width: '100%',
          height: '100%'
        }, handleError);
      });
  
    // Create a publisher
    var publisher = OT.initPublisher('publisher', {
      insertMode: 'append',
      width: '100%',
      height: '100%'
    }, handleError);
  
    // Connect to the session
    session.connect(token, function(error) {
      // If the connection is successful, publish to the session
      if (error) {
        handleError(error);
      } else {
        session.publish(publisher, handleError);
      }
    });
  }

  
  
  
  
