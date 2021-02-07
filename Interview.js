function LinkedList(value){
    if (!value) throw Error('Error');
    this.initial_value = { value: value};
    this.current_value = { value: value};
}

LinkedList.prototype.add = function(value){
    let value_obj = {value: value};
    value_obj.previous_value = this.current_value;
    this.current_value.next = value_obj;
    this.current_value = value_obj;
}

LinkedList.prototype.getNext = function(){
    let return_value = this.current_value;
    this.current_value = this.current_value.previous_value;
}

var list = new LinkedList('initial value');
list.add(3);
list.add(4);
list.add(5);
let value = list.initial_value;
console.log(value);
while (value.next){
    console.log(value);
    value = value.next;
}