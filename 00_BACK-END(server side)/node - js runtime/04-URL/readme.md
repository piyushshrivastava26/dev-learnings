/* A URL (Uniform Resource Locator) is a reference to a web resouce consist of several parts.


  EX :: https://www.example.com:8080/path/to/resource?name=JohnDoe&age=25#section1

    https://        <- a ssl certified protocol used to access the resource
    
    www.example.com <- domain name, points to an IP address(location) of the server   where request is transferred.
        www <- subdomain
        example <- domain name 
        .com <- Top-Level Domain(e.g., .org, .edu, .in)

    :8080    <- port on which it is contacted to server

    /path/to/resource <- (route) specifies the exact file on the server.
        / <- base directory

    ?name=JohnDoe&age=25 <- quiery string ( Contains additional data sent to the server)
            Begins with ?(search parameter)
            Key-value pairs are separated by = (e.g., name=JohnDoe).
            Multiple pairs are separated by & (e.g., name=JohnDoe&age=25).

    #section1   <- fragment(anchor) points to a specific section within the resource.
                Begins with #.
                Represents an a section ID in an HTML document.
                
 
COMPONENT	    EXAMPLE                         PURPOSE

Protocol	        https	                    Defines the protocol for communication.

Hostname	    www.example.com	                Specifies the server's location on the web.

Port	        8080	                        Identifies the specific server port to use.

Path	        /path/to/resource	            Points to the resource or file on the server.

Query String	?name=JohnDoe&age=25	        Sends extra data or parameters to the server.

Fragment	    #section1	                    Links to a specific section within the resource.



https://www.example.com:8080/path/to/resource?name=JohnDoe&age=25#section1
|___|   |_____________| |__| |______________||__________________||_________|
  |         |            |           |             |                |
Scheme   Hostname       Port       Path       Query String      Fragment



*/

/*
Method	  Purpose	                    Safe	      Idempotent

GET	      Retrieve data	              Yes	            Yes
POST	    Create a resource	           No	            No
PUT	      Update/Replace a resource	   No	            Yes
DELETE	  Remove a resource	           No	            Yes
PATCH	    Partially update a resource	 No	            No
HEAD	    Fetch headers only	         Yes	          Yes
OPTIONS	  Describe communication	     Yes	          Yes

*/