class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}


class SinglyLinkedList {
    // #head = null;
    // #tail = null;
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
        // this.valArr = [];
    }

    push(val){
        let node = new Node(val);
        // if(!this.#head){
        //     this.#head = node;
        //     this.#tail = this.#head
        // }else{
        //     this.#tail.next = node;
        //     this.#tail = node;
        // }
        if(!this.head){
            this.head = node;
            this.tail = this.head
        }else{
            this.tail.next = node;
            this.tail = node;
        }

        this.length++;
        return this;
    }

    pop(){
        if(!this.head) return null;
        
        let current = this.head;

        let newTail = current;

        while(current.next){
            newTail = current
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if(!this.length){
            this.head = null;
            this.tail = this.head;
        }

        return current;
    }

    

    print(){
        let valArr = [];
        let current = this.head;
        while(current){
            valArr.push(current.val);
            current = current.next;
        }
        if(valArr.length === 0){
            return null;
        }
        return (valArr) ;
    }

    shift(){
        if(!this.head) return null;
        let head = this.head;
        let newHead = head.next;
        this.head = newHead;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return head;
    }
    
    unshift(val){
        let node = new Node(val);
        
        if(!this.head){
            this.head =  node;
            this.tail = this.head;
        }else{
            let curHead = this.head;
            let newHead = node;
            this.head = newHead;
            this.head.next = curHead;
        }

        this.length++;

        return this;

    }

    get(index){
        let count = 0;
        let valArr = [];
        if(index >= this.length || index < 0 || !this.head) return null;

        let current = this.head; 

        while(current && count !== index){
            current = current.next;
            count++;
        }

        valArr.push(current.val);

        console.log(valArr);

        return current;
    }

    set(index,val){
        let node = this.get(index);
        if(!this.head) return null;
        if(!node){
            return false;
        }else{
            node.val = val;
            return true;
        }
    }


}

const list1 = new SinglyLinkedList();

list1.push(3);
list1.push("feet");
list1.push("fee");
list1.push("ft");
list1.push("ertt");
list1.push(63);

console.log(list1.print());
// console.log(list1.length);
// console.log(list1.pop1());
// console.log(list1.shift());
// console.log(list1.print());
console.log(list1.unshift("kinga"));
// console.log(list1.print());
// console.log( list1.get(2) );
// console.log( list1.get(0) );
// console.log( list1.get(-10) );
// console.log(list1.length);
// console.log(list1.print());
// console.log(list1);
// console.log(list1.pop());
// console.log(list1.print());
console.log(list1.set(2,"shall we?"));
console.log(list1.print());
console.log(list1.set(list1.length - 2,"let's go!"));
console.log(list1.print());