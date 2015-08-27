/* Linked List */
function List() {
    this.start = null;
    this.end = null;
}

/*  List methods */
List.prototype = {
    /*
        Method: makeNode
        Make a simple Node object
    */
    makeNode : function() {
        return {data: null, next: null};
    },

    /*
        Method: addAtEnd
        Adds a Node to the END of the List
    */
    addAtEnd: function(data) {
        // if linkedList is empty
        if(this.start === null) {
            // start becomes a node
            this.start = this.makeNode();
            // end becomes the start node
            this.end = this.start;

            // else linkedList isn't empty
        } else {
            // create a next property for end and assign it a new Node
            this.end.next = this.makeNode();
            // move the end node to end's next node
            this.end = this.end.next;
        }
        // finally, add the data to the end Node
        this.end.data = data;
    },

    /*
        Method: print
        Traverse the list. For each node, append thte current node's data to
        a master list of all data, including head and tail
    */
    print: function() {
        var listString = 'Head -> ';
        // set our 'current' Node to the starting node
        var current = this.start;
        // while the 'current' Node isn't null
        while(current !== null) {
            // print out the 'current' Node's data
            listString += current.data + ' -> ';
            // assign our 'current' Node's next to be 'current' (increment!)
            current = current.next;
        }
        console.log(listString +'Tail');
    },

    /*
        Method: insertAtHead
        Insert a new Node at the head of the list.
    */
    insertAtHead: function(data) {
        // if linkedList is empty

            //create a new node and name it a new variable
            var current = this.makeNode();
           // then data coming in is set as current data
            current.data = data; 
            //then the current.next becomes the old start
            current.next= this.start;
            //now set the var current as the new start
            this.start=current;
           
      
    },

    /*
        Method: length
        Traverse the list. Return the amount of Nodes in the list.
    */
    length: function() {
    for(var current = this.start, i = 0; current!==null;current=current.next,i++);{

    }
        return i;
    },

    /*
        Method: exists
        Traverse the list. If a Node with the data passed in exists, then return
        true. If not, return false
    */

    //just a method
    exists: function(data) {
        // Enter code here!
        var node = this.start;
        //loops through list until node === null
        while(node!==null){
            if(data===node.data){
                return true;
            }
                // since data !== node.data
                // then we set no to the next node
                node = node.next;
         }
         //one node === null we finish the while loop 
        return false;
    },

    /*
        Method: each
        Traverse the list. For each Node, call the function f on that Node.
        Example: f(current);
    *///f is a call back function which is being passed
    each: function(f) { 
    // check for the call back function below
        var node = this.start;
        while(node !== null){
          f(node);
          node=node.next;
        }
        // Enter code here!
      
    },


    /*
        Method: indexOf
        Traverse the list. If a Node with the data passed is found, return an
         index (integer) of that Node's location.
    */
    indexOf: function(data) {
        // Enter code here!
    },

    /*
        Method: dataFrom
        Traverse the list to the ith position and return the corresponding data.
              */
    dataFrom: function(i) {
        // Enter code here!
    },

    /*
        Method: insertAt
        Traverse the List.  Find the ith Node in the list and insert a new Node
         after it.  You must preserve the list structure!
    */

    //08/27/2015 due
    insertAt: function(i, data){
        // Enter code here!
    },

    /*
        Method: delete
        Traverse the list, find the node with the corresponding data,
        and remove that node. List must still be fully intact after
        you remove the node!
    */
    delete: function(data) {
        // Enter code here!
    }
};

function testCallback(obj){
    var newData = "new value";
    console.log("the data is = " + obj);
    obj.data = newData;
    console.log("now the data is = " + newData);


};

/* LinkedList initialization */
var LinkedList = new List();
var i = 2;
while(i <= 20) {
    LinkedList.addAtEnd(i);
    i+=2;
}
LinkedList.insertAtHead("breakfast");
console.log(LinkedList.length());



LinkedList.print();
