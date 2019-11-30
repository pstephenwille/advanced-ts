interface Action {
    type: string;
}

interface ListNode2<T> {
    value: T;
    next?: ListNode2<T>;
    prev?: ListNode2<T>;
}

class BackwardsActionIterator implements IterableIterator<Action> {
    constructor(private _currentActionNode: ListNode2<Action>) {

    }
    [Symbol.iterator](): IterableIterator<Action> {
        return this;
    }

    next(): IteratorResult<Action> {
        const curr = this._currentActionNode;
        if(!curr || !curr.value) {
            return {value: null, done: true};
        }
        //1. move through each item in the list
        this._currentActionNode = curr.prev;
        //2. return each item
        return {value: curr.value, done: false};
    }
}

let Action1 = { type: "LOGIN" };
let Action2 = { type: "LOAD_POSTS" };
let Action3 = { type: "DISPLAY_POSTS" };
let Action4 = { type: "LOGOUT" };

let ActionNode1: ListNode2<Action> = {
    prev: null,
    next: null,
    value: Action1
};
let ActionNode2: ListNode2<Action> = {
    prev: ActionNode1,
    next: null,
    value: Action2
};
ActionNode1.next = ActionNode2;

let ActionNode3: ListNode2<Action> = {
    prev: ActionNode2,
    next: null,
    value: Action3
};
ActionNode2.next = ActionNode3;

let ActionNode4: ListNode2<Action> = {
    prev: ActionNode3,
    next: null,
    value: Action4
};
ActionNode3.next = ActionNode4;

const backwardsActionsList = new BackwardsActionIterator(
    ActionNode4
);

for(let action of backwardsActionsList) {
    console.log(action.type);
}